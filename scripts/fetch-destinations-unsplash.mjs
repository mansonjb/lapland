/**
 * Destination hero photos via Unsplash (free-license CDN, no scraping, no
 * API key needed for hotlinked/downloaded photo-page images — same approach
 * used on sibling sites for moodboard imagery, e.g. curatedbachelorette/lib/images.ts).
 *
 * Each entry below was picked by hand by browsing unsplash.com/s/photos/...,
 * opening the photo page and checking Unsplash's own "Infos" location tag to
 * confirm it's genuinely shot in (or immediately at) that destination — a
 * matching filename/keyword is not enough (see feedback_image_subject_check
 * memory). Slugs match data/destinations.ts exactly.
 *
 * Usage:
 *   node scripts/fetch-destinations-unsplash.mjs
 *   node scripts/fetch-destinations-unsplash.mjs --filter rovaniemi
 *   add --dry to preview without downloading.
 *
 * Output: public/images/destinations/<slug>.jpg (1600px wide, cover-cropped
 * to 16:9). Run scripts/migrate-images-to-r2.mjs afterwards to publish to R2
 * under destinations/<slug>.jpg.
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const IMG_DIR = path.join(ROOT, "public", "images", "destinations");

const argv = process.argv.slice(2);
const DRY = argv.includes("--dry");
const filterArg = (() => {
  const i = argv.indexOf("--filter");
  return i >= 0 && argv[i + 1] ? argv[i + 1].split(",").map((s) => s.trim()).filter(Boolean) : null;
})();

// photoId = the images.unsplash.com CDN id (from the photo-page <img>, not
// the unsplash.com/photos/<slug>-<shareId> page slug — they differ).
// location = Unsplash's own geotag on the photo, verified on the photo page.
const DESTINATIONS = [
  {
    slug: "rovaniemi",
    photoId: "photo-1645020456013-c4e693da0bbf",
    photographer: "Roman Protsyshyn",
    location: "Rovaniemi, Finland",
    note: "Lit-up wooden cabins/teepees in a snowy boreal forest, Santa Claus Village style.",
  },
  {
    slug: "levi",
    photoId: "photo-1505281906411-28d444dd417e",
    photographer: "Jouni Rajala",
    location: "Levi, Kittilä, Finland",
    note: "Green aurora over snowy fell forest.",
  },
  {
    slug: "saariselka",
    photoId: "photo-1674572271930-4ad298cdfff0",
    photographer: "Harri P",
    location: "Urho Kekkonen kansallispuisto, Finland",
    note: "Urho Kekkonen National Park is the wilderness area Saariselka is the gateway village to.",
  },
  {
    slug: "kiruna-abisko",
    photoId: "photo-1656068697265-d31980069d28",
    photographer: "Jian Liu",
    location: "Abisko, Sweden",
    note: "Aurora over the Abisko valley.",
  },
  {
    slug: "tromso",
    photoId: "photo-1531366936337-7c912a4589a7",
    photographer: "Lightscape",
    location: "Tromsø, Norway",
    note: "Aurora over snowy peaks near Tromso.",
  },
];

function cdnUrl(photoId) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1600&q=80`;
}

async function downloadPhoto(url, outPath) {
  const img = await fetch(url);
  if (!img.ok) throw new Error(`photo HTTP ${img.status}`);
  const buf = Buffer.from(await img.arrayBuffer());
  await sharp(buf)
    .resize(1600, 900, { fit: "cover", position: "centre" })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(outPath);
}

async function main() {
  await mkdir(IMG_DIR, { recursive: true });
  let work = DESTINATIONS;
  if (filterArg) work = DESTINATIONS.filter((d) => filterArg.includes(d.slug));

  const results = { ok: [], failed: [] };
  for (const d of work) {
    console.log(`${d.slug}: ${d.location} — photo by ${d.photographer} (${d.photoId})`);
    if (DRY) continue;
    const outPath = path.join(IMG_DIR, `${d.slug}.jpg`);
    try {
      await downloadPhoto(cdnUrl(d.photoId), outPath);
      results.ok.push(d.slug);
    } catch (e) {
      console.error(`      download failed for ${d.slug}: ${e.message}`);
      results.failed.push({ slug: d.slug, reason: e.message });
    }
  }

  console.log(`\n${results.ok.length}/${work.length} destination photos downloaded to public/images/destinations/`);
  if (results.failed.length) {
    console.log("Failed:");
    results.failed.forEach((f) => console.log(`  - ${f.slug}: ${f.reason}`));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
