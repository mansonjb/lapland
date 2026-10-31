/**
 * Enrichit chaque hotel avec des faits reels (note, nb d'avis, adresse,
 * coordonnees, equipements) via Apify (compass~crawler-google-places).
 * PAS l'API Google Places. Sortie : data/hotel-facts.json (cle = slug).
 * Les requetes sont reprises de scripts/fetch-hotels-apify.mjs.
 * Usage : node scripts/enrich-hotels-apify.mjs [--filter slug1,slug2]
 */
import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "data", "hotel-facts.json");
const src = await readFile(path.join(ROOT, "scripts", "fetch-hotels-apify.mjs"), "utf-8");
const HOTELS = [...src.matchAll(/\{ slug: "([^"]+)", query: "([^"]+)" \}/g)].map((m) => ({ slug: m[1], query: m[2] }));
const env = await readFile(path.join(ROOT, ".env.local"), "utf-8");
const token = (process.env.APIFY_TOKEN || env.match(/APIFY_TOKEN=(.+)/)?.[1] || "").trim().replace(/^["']|["']$/g, "");
const i = process.argv.indexOf("--filter");
const only = i >= 0 ? process.argv[i + 1].split(",") : null;

const facts = existsSync(OUT) ? JSON.parse(await readFile(OUT, "utf-8")) : {};
async function enrich(h) {
  // Run asynchrone + polling : le mode run-sync depasse le timeout HTTP sur les recherches lentes.
  let items;
  try {
    const start = await fetch(`https://api.apify.com/v2/acts/compass~crawler-google-places/runs?token=${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        searchStringsArray: [h.query],
        maxCrawledPlacesPerSearch: 1,
        language: "en",
        skipClosedPlaces: true,
        scrapePlaceDetailPage: true,
      }),
    });
    const run = (await start.json()).data;
    let status = run.status;
    while (!["SUCCEEDED", "FAILED", "ABORTED", "TIMED-OUT"].includes(status)) {
      await new Promise((r) => setTimeout(r, 4000));
      status = (await (await fetch(`https://api.apify.com/v2/actor-runs/${run.id}?token=${token}`)).json()).data.status;
    }
    if (status !== "SUCCEEDED") { console.error(`! ${h.slug} run ${status}`); return; }
    items = await (await fetch(`https://api.apify.com/v2/datasets/${run.defaultDatasetId}/items?token=${token}`)).json();
  } catch (e) { console.error(`! ${h.slug} ${e.message}`); return; }
  const d = items[0];
  if (!d) { console.error(`! ${h.slug} no result`); return; }
  const amenities = (d.additionalInfo?.Amenities ?? []).flatMap((o) => Object.entries(o).filter(([, v]) => v).map(([k]) => k));
  facts[h.slug] = {
    matchedTitle: d.title,
    rating: d.totalScore ?? null,
    reviews: d.reviewsCount ?? null,
    address: d.address ?? null,
    countryCode: d.countryCode ?? null,
    lat: d.location?.lat ?? null,
    lng: d.location?.lng ?? null,
    category: d.categoryName ?? null,
    website: d.website ? d.website.split("?")[0] : null,
    amenities: [...new Set(amenities)],
  };
  console.log(`${h.slug} -> "${d.title}" ${d.totalScore}★ (${d.reviewsCount}) ${d.address}`);
  await writeFile(OUT, JSON.stringify(facts, null, 2));

}

const todo = HOTELS.filter((h) => (!only || only.includes(h.slug)) && (only || !facts[h.slug]));
const CONCURRENCY = 6;
for (let i = 0; i < todo.length; i += CONCURRENCY) {
  await Promise.all(todo.slice(i, i + CONCURRENCY).map(enrich));
  await writeFile(OUT, JSON.stringify(facts, null, 2));
}
console.log(`\n${Object.keys(facts).length}/${HOTELS.length} hotels enrichis -> data/hotel-facts.json`);
