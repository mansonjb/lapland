/**
 * Hotel photo scraper via Apify (NOT the Google Places API).
 *
 * Google Places API is banned on all projects here (surprise 200EUR bill in
 * the past). This runs the Apify "Google Maps Scraper" actor
 * (compass/crawler-google-places), same pipeline as bestsnowhotels /
 * citytrip: it scrapes Google Maps and is billed through Apify, not Google.
 *
 * Setup (one-time):
 *   Add to .env.local:  APIFY_TOKEN=apify_api_xxx
 *
 * Usage:
 *   node scripts/fetch-hotels-apify.mjs                 all 14 hotels below
 *   node scripts/fetch-hotels-apify.mjs --filter icehotel-kiruna
 *   node scripts/fetch-hotels-apify.mjs --filter icehotel-kiruna,levi-hotel-k5
 *   add --dry to preview without downloading.
 *
 * Output: public/images/hotels/<slug>.jpg (800x600, cover-cropped), one per
 * hotel. Slugs are fixed (another agent builds pages against these exact
 * filenames) — do not rename. Run scripts/migrate-images-to-r2.mjs afterwards
 * to publish to R2 under hotels/<slug>.jpg.
 */
import sharp from "sharp";
import { mkdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const IMG_DIR = path.join(ROOT, "public", "images", "hotels");
const ACTOR = (process.env.APIFY_ACTOR || "compass~crawler-google-places").replace("/", "~");

const argv = process.argv.slice(2);
const DRY = argv.includes("--dry");
const filterArg = (() => {
  const i = argv.indexOf("--filter");
  return i >= 0 && argv[i + 1] ? argv[i + 1].split(",").map((s) => s.trim()).filter(Boolean) : null;
})();

// One entry per hotel: slug is the fixed filename, query is "full name + town"
// so the actor's own geocoding lands on the right place. Kakslauttanen is
// physically near Saariselka (not Rovaniemi) -- queried accordingly.
const HOTELS = [
  // Rovaniemi
  { slug: "arctic-treehouse-hotel", query: "Arctic TreeHouse Hotel Rovaniemi Finland" },
  { slug: "santas-igloos-arctic-circle", query: "Santa's Igloos Arctic Circle Rovaniemi Finland" },
  { slug: "arctic-snowhotel-glass-igloos", query: "Arctic SnowHotel & Glass Igloos Rovaniemi Finland" },
  // Levi
  { slug: "golden-crown-levin-iglut", query: "Golden Crown Levin Iglut Levi Finland" },
  { slug: "break-sokos-hotel-levi", query: "Break Sokos Hotel Levi Finland" },
  { slug: "hotel-k5-levi", query: "Hotel K5 Levi Finland" },
  // Saariselka
  { slug: "kakslauttanen-arctic-resort", query: "Kakslauttanen Arctic Resort Saariselka Finland" },
  { slug: "northern-lights-village", query: "Northern Lights Village Saariselka Finland" },
  // "Wilderness Hotel Saariselka" doesn't exist as a listing; the chain's
  // closest property marketed with the Saariselka area is Muotka (~30min away).
  { slug: "wilderness-hotel-saariselka", query: "Wilderness Hotel Muotka Finland" },
  // Kiruna / Abisko
  { slug: "icehotel-kiruna", query: "ICEHOTEL Kiruna Sweden" },
  { slug: "stf-abisko-turiststation", query: "STF Abisko Turiststation Sweden" },
  // Tromso
  { slug: "clarion-collection-hotel-aurora", query: "Clarion Collection Hotel Aurora Tromso Norway" },
  { slug: "clarion-hotel-the-edge", query: "Clarion Hotel The Edge Tromso Norway" },
  { slug: "the-dock-6939-by-scandic", query: "The Dock 6939 by Scandic Tromso Norway" },
];

async function loadToken() {
  if (process.env.APIFY_TOKEN) return process.env.APIFY_TOKEN.trim();
  const env = await readFile(path.join(ROOT, ".env.local"), "utf-8").catch(() => "");
  const m = env.match(/APIFY_TOKEN=(.+)/);
  if (m) return m[1].trim();
  throw new Error("APIFY_TOKEN not set. Add APIFY_TOKEN=apify_api_xxx to .env.local.");
}

async function runActor(searchString, token) {
  const url = `https://api.apify.com/v2/acts/${ACTOR}/run-sync-get-dataset-items?token=${token}`;
  const input = {
    searchStringsArray: [searchString],
    maxCrawledPlacesPerSearch: 5,
    language: "en",
    skipClosedPlaces: true,
    scrapePlaceDetailPage: false,
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error(`Apify HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
  return res.json();
}

// item.imageUrls is often [] for a named-property search even with detail
// scraping on; item.imageUrl (singular) is the reliable field in that case.
// Fallback order matters (see ref_apify_hotel_scraping memory).
function pickImage(item) {
  return item?.imageUrl || (item?.imageUrls && item.imageUrls[0]) || null;
}

async function downloadPhoto(imageUrl, outPath) {
  const img = await fetch(imageUrl);
  if (!img.ok) throw new Error(`photo HTTP ${img.status}`);
  const buf = Buffer.from(await img.arrayBuffer());
  await sharp(buf)
    .resize(800, 600, { fit: "cover", position: "centre" })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(outPath);
}

async function main() {
  await mkdir(IMG_DIR, { recursive: true });
  const token = await loadToken();

  let work = HOTELS;
  if (filterArg) work = HOTELS.filter((h) => filterArg.includes(h.slug));

  const results = { ok: [], failed: [] };

  for (const h of work) {
    let raw;
    try {
      raw = await runActor(h.query, token);
    } catch (e) {
      console.error(`! ${h.slug}: actor error - ${e.message}`);
      results.failed.push({ slug: h.slug, reason: e.message });
      continue;
    }
    const best = raw.find((item) => pickImage(item));
    if (!best) {
      console.error(`! ${h.slug}: no result with a photo for "${h.query}" (${raw.length} raw results)`);
      results.failed.push({ slug: h.slug, reason: "no photo in results" });
      continue;
    }
    console.log(`${h.slug}: matched "${best.title || best.name}" (${best.totalScore ?? "?"}★, ${best.reviewsCount ?? 0} rev)`);
    if (DRY) continue;

    const outPath = path.join(IMG_DIR, `${h.slug}.jpg`);
    try {
      await downloadPhoto(pickImage(best), outPath);
      results.ok.push(h.slug);
      await new Promise((r) => setTimeout(r, 150));
    } catch (e) {
      console.error(`      photo download failed for ${h.slug}: ${e.message}`);
      results.failed.push({ slug: h.slug, reason: e.message });
    }
  }

  console.log(`\n${results.ok.length}/${work.length} hotel photos downloaded to public/images/hotels/`);
  if (results.failed.length) {
    console.log("Failed:");
    results.failed.forEach((f) => console.log(`  - ${f.slug}: ${f.reason}`));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
