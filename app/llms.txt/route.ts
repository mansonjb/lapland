import { SITE_NAME, SITE_URL } from "@/lib/site";
import { LOCALES, localeHref } from "@/lib/i18n";
import { DESTINATIONS } from "@/data/destinations";
import { HOTELS, HOTEL_TYPES, HOTEL_TYPE_LABEL } from "@/data/hotels";

// Index lisible par les IA (convention llms.txt) : decrit le site et liste les pages cles en anglais.
export const dynamic = "force-static";

export function GET() {
  const abs = (path: string) => `${SITE_URL}${localeHref("en", path)}`;
  const lines: string[] = [
    `# ${SITE_NAME}`,
    "",
    "> Independent guide to where to stay in Lapland to see the northern lights: 5 destinations (Rovaniemi, Levi, Saariselkä, Kiruna & Abisko, Tromsø) and 58 hand-checked stays (glass igloos, ice hotels, cabins, hotels) with real prices, Google Maps ratings, addresses and Booking.com links. Available in 7 languages: French (default, root), English, German, Dutch, Spanish, Italian, Japanese.",
    "",
    "Prices are indicative starting rates per night (cheapest room) in the local currency (EUR, SEK or NOK). Ratings and addresses come from each property's Google Maps listing. The site earns a commission on bookings made through its links, which does not change which stays are listed.",
    "",
    "## Destinations",
    ...DESTINATIONS.map((d) => `- [${d.label.en}](${abs(d.slug)}): ${d.description.en}`),
    "",
    "## Stay types",
    ...HOTEL_TYPES.map((t) => `- [${HOTEL_TYPE_LABEL[t].en}](${abs(`hebergements/${t}`)})`),
    "",
    "## Practical",
    `- [Getting around Lapland: car, on foot and public transport](${abs("getting-around")})`,
    "",
    "## All stays",
    ...HOTELS.map((h) => {
      const city = DESTINATIONS.find((d) => d.slug === h.citySlug)!;
      return `- [${h.name}](${abs(`${h.citySlug}/${h.slug}`)}): ${HOTEL_TYPE_LABEL[h.type].en} in ${city.label.en}, from ${h.priceFrom} ${h.currency} per night`;
    }),
    "",
    "## Languages",
    ...LOCALES.map((l) => `- ${l}: ${SITE_URL}${localeHref(l)}`),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
