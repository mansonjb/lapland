import raw from "@/data/hotel-facts.json";
import type { Locale } from "@/lib/i18n";
import { HTML_LANG } from "@/lib/i18n";
import { AMENITY_LABELS } from "@/data/i18n/hotel-page";

/** Faits reels d'un hotel (fiche Google Maps via Apify, scripts/enrich-hotels-apify.mjs). */
export type HotelFacts = {
  matchedTitle: string;
  rating: number | null;
  reviews: number | null;
  address: string | null;
  countryCode: string | null;
  lat: number | null;
  lng: number | null;
  category: string | null;
  website: string | null;
  amenities: string[];
};

const FACTS = raw as Record<string, HotelFacts>;

export function getHotelFacts(slug: string): HotelFacts | undefined {
  return FACTS[slug];
}

/** Distance a vol d'oiseau en km (haversine). */
export function distanceKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const rad = (d: number) => (d * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(h));
}

export function formatKm(km: number, locale: Locale): string {
  return new Intl.NumberFormat(HTML_LANG[locale], { maximumFractionDigits: km < 10 ? 1 : 0 }).format(km);
}

/** Retire le pays (anglais) en fin d'adresse Google ; le pays est localise a part. */
export function cleanAddress(address: string): string {
  return address.replace(/,\s*(Finland|Sweden|Norway)$/i, "");
}

export function countryName(code: string | null, locale: Locale): string | null {
  if (!code) return null;
  try {
    return new Intl.DisplayNames([HTML_LANG[locale]], { type: "region" }).of(code) ?? null;
  } catch {
    return null;
  }
}

/** Equipements traduits, dedoublonnes (Wi-Fi gratuit absorbe Wi-Fi, petit-dej gratuit absorbe petit-dej). */
export function amenityLabels(amenities: string[], locale: Locale): string[] {
  const set = new Set(amenities);
  if (set.has("Free Wi-Fi")) set.delete("Wi-Fi");
  if (set.has("Free breakfast")) set.delete("Breakfast");
  if (set.has("Free parking")) set.delete("Parking");
  return [...set].flatMap((a) => (AMENITY_LABELS[a] ? [AMENITY_LABELS[a][locale]] : []));
}

/** Decoupe une adresse Google "rue, CP ville" en champs PostalAddress. */
export function parseAddress(address: string): { street: string; postalCode?: string; locality?: string } {
  const parts = cleanAddress(address).split(", ");
  const street = parts[0];
  const m = parts[1]?.match(/^(\d{3,5}(?: \d{2})?)\s+(.+)$/);
  return m ? { street, postalCode: m[1], locality: m[2] } : { street, locality: parts[1] };
}
