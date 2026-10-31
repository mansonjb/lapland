import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { LOCALES, HTML_LANG, isLocale, getDict, localeHref, fill, type Locale } from "@/lib/i18n";
import { getDestination } from "@/data/destinations";
import { HOTELS, HOTEL_TYPE_LABEL, getHotel, getHotelsByCity } from "@/data/hotels";
import { HOTEL_PAGE } from "@/data/i18n/hotel-page";
import {
  amenityLabels,
  cleanAddress,
  countryName,
  distanceKm,
  formatKm,
  getHotelFacts,
  parseAddress,
} from "@/lib/hotel-facts";
import { absUrl, pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { Stay22Map } from "@/components/Stay22Map";
import { HotelCard } from "@/components/HotelCard";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    HOTELS.map((h) => ({ locale, city: h.citySlug, hotel: h.slug }))
  );
}

function resolve(city: string, hotelSlug: string) {
  const hotel = getHotel(hotelSlug);
  const destination = getDestination(city);
  if (!hotel || !destination || hotel.citySlug !== destination.slug) return null;
  return { hotel, destination };
}

function money(amount: number, currency: string, locale: Locale): string {
  return new Intl.NumberFormat(HTML_LANG[locale], {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; city: string; hotel: string }>;
}): Promise<Metadata> {
  const { locale, city, hotel: hotelSlug } = await params;
  if (!isLocale(locale)) return {};
  const found = resolve(city, hotelSlug);
  if (!found) return {};
  const { hotel, destination } = found;
  const lang = locale as Locale;
  const imageBase = process.env.NEXT_PUBLIC_R2_IMAGE_BASE_URL ?? "";
  const typeLabel = HOTEL_TYPE_LABEL[hotel.type][lang];
  return pageMetadata({
    locale: lang,
    path: `${destination.slug}/${hotel.slug}`,
    title: `${hotel.name}, ${typeLabel} ${destination.label[lang]}`,
    description: hotel.description[lang],
    image: imageBase ? `${imageBase}/hotels/${hotel.image}.jpg` : undefined,
  });
}

export default async function HotelPage({
  params,
}: {
  params: Promise<{ locale: string; city: string; hotel: string }>;
}) {
  const { locale, city, hotel: hotelSlug } = await params;
  if (!isLocale(locale)) notFound();
  const found = resolve(city, hotelSlug);
  if (!found) notFound();

  const { hotel, destination } = found;
  const lang = locale as Locale;
  const t = getDict(lang);
  const p = HOTEL_PAGE[lang];
  const facts = getHotelFacts(hotel.slug);
  const imageBase = process.env.NEXT_PUBLIC_R2_IMAGE_BASE_URL ?? "";
  const aid = process.env.NEXT_PUBLIC_STAY22_AID ?? "PLACEHOLDER_AID";

  const cityName = destination.label[lang];
  const typeLabel = HOTEL_TYPE_LABEL[hotel.type][lang];
  const price = money(hotel.priceFrom, hotel.currency, lang);
  const hasRating = !!facts?.rating && !!facts?.reviews;
  const score = hasRating
    ? new Intl.NumberFormat(HTML_LANG[lang], { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(facts!.rating!)
    : "";
  const count = hasRating ? new Intl.NumberFormat(HTML_LANG[lang]).format(facts!.reviews!) : "";

  const pos = facts?.lat != null && facts?.lng != null ? { lat: facts.lat, lng: facts.lng } : null;
  const km = pos ? formatKm(distanceKm(pos, destination), lang) : null;
  const country = countryName(facts?.countryCode ?? null, lang);
  const address = facts?.address
    ? [cleanAddress(facts.address), country].filter(Boolean).join(", ")
    : null;
  const amenities = facts ? amenityLabels(facts.amenities, lang) : [];

  const summary = fill(hasRating ? p.summary : p.summaryNoRating, {
    name: hotel.name,
    type: typeLabel,
    city: cityName,
    price,
    score,
    count,
  });

  const rows: [string, string][] = [
    [p.factType, typeLabel],
    [p.factCity, cityName],
    ...(address ? ([[p.factAddress, address]] as [string, string][]) : []),
    [p.factPrice, fill(p.priceValue, { price })],
    ...(hasRating ? ([[p.factRating, fill(p.ratingValue, { score, count })]] as [string, string][]) : []),
    ...(km ? ([[p.factDistance, fill(p.distanceValue, { km, city: cityName })]] as [string, string][]) : []),
    ...(amenities.length ? ([[p.factAmenities, amenities.join(", ")]] as [string, string][]) : []),
  ];

  const faq: { q: string; a: string }[] = [
    { q: fill(p.faqPriceQ, { name: hotel.name }), a: fill(p.faqPriceA, { name: hotel.name, price }) },
    ...(address && km
      ? [{ q: fill(p.faqWhereQ, { name: hotel.name }), a: fill(p.faqWhereA, { name: hotel.name, address, km, city: cityName }) }]
      : []),
    ...(hasRating
      ? [{ q: fill(p.faqRatingQ, { name: hotel.name }), a: fill(p.faqRatingA, { name: hotel.name, score, count }) }]
      : []),
    ...(amenities.length
      ? [{ q: fill(p.faqAmenitiesQ, { name: hotel.name }), a: fill(p.faqAmenitiesA, { name: hotel.name, list: amenities.join(", ") }) }]
      : []),
  ];

  const others = getHotelsByCity(destination.slug).filter((h) => h.slug !== hotel.slug).slice(0, 3);
  const pageUrl = absUrl(lang, `${destination.slug}/${hotel.slug}`);
  const addr = facts?.address ? parseAddress(facts.address) : null;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": hotel.type === "hotel" ? "Hotel" : "LodgingBusiness",
      "@id": `${pageUrl}#lodging`,
      name: hotel.name,
      url: pageUrl,
      description: hotel.description[lang],
      inLanguage: HTML_LANG[lang],
      ...(imageBase ? { image: `${imageBase}/hotels/${hotel.image}.jpg` } : {}),
      priceRange: `${hotel.currency} ${hotel.priceFrom}+`,
      ...(addr
        ? {
            address: {
              "@type": "PostalAddress",
              streetAddress: addr.street,
              ...(addr.postalCode ? { postalCode: addr.postalCode } : {}),
              ...(addr.locality ? { addressLocality: addr.locality } : {}),
              ...(facts?.countryCode ? { addressCountry: facts.countryCode } : {}),
            },
          }
        : {}),
      ...(pos ? { geo: { "@type": "GeoCoordinates", latitude: pos.lat, longitude: pos.lng } } : {}),
      ...(amenities.length
        ? { amenityFeature: amenities.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })) }
        : {}),
      ...(facts?.website ? { sameAs: [facts.website] } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t.city.breadcrumbHome, item: absUrl(lang) },
        { "@type": "ListItem", position: 2, name: cityName, item: absUrl(lang, destination.slug) },
        { "@type": "ListItem", position: 3, name: hotel.name, item: pageUrl },
      ],
    },
  ];

  return (
    <main>
      <JsonLd data={jsonLd} />

      <nav className="mx-auto max-w-(--spacing-maxw) px-6 pt-6 text-sm text-ink-soft">
        <Link href={localeHref(lang)} className="hover:text-copper">
          {t.city.breadcrumbHome}
        </Link>
        <span className="mx-2">/</span>
        <Link href={localeHref(lang, destination.slug)} className="hover:text-copper">
          {cityName}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{hotel.name}</span>
      </nav>

      <section className="mx-auto max-w-(--spacing-maxw) px-6 pb-10 pt-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <span className="rounded-full bg-spruce/10 px-3 py-1 text-xs font-semibold text-spruce">
              {typeLabel}
            </span>
            <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl">{hotel.name}</h1>
            <p className="mt-4 text-lg leading-relaxed text-ink">{summary}</p>
            <a
              href={hotel.bookingUrl}
              target="_blank"
              rel="noopener sponsored"
              className="mt-6 inline-flex rounded-full bg-copper px-6 py-3 text-sm font-medium text-white transition hover:bg-copper-dark"
            >
              {p.bookCta} &rarr;
            </a>
          </div>
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={`${imageBase}/hotels/${hotel.image}.jpg`}
              alt={`${hotel.name}, ${cityName}`}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl text-ink">{p.keyFactsHeading}</h2>
          <dl className="mt-5 divide-y divide-line border-y border-line">
            {rows.map(([label, value]) => (
              <div key={label} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="text-sm font-semibold text-copper">{label}</dt>
                <dd className="text-sm leading-relaxed text-ink">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-ink-soft">{p.sourceNote}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl text-ink">{p.aboutHeading}</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">{hotel.description[lang]}</p>
          <ul className="mt-4 space-y-1.5">
            {hotel.highlights[lang].map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-ink-soft">
                <span aria-hidden className="mt-0.5 text-spruce">&#10003;</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper-2 py-12">
        <div className="mx-auto max-w-(--spacing-maxw) px-6">
          <h2 className="font-display text-2xl text-ink">{p.mapHeading}</h2>
          <div className="mt-6">
            <Stay22Map
              aid={aid}
              lat={pos?.lat ?? destination.lat}
              lng={pos?.lng ?? destination.lng}
              address={address ?? destination.address}
              mode="accommodation"
              campaign={`hotel-${hotel.slug}`}
              lang={lang}
              height={420}
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl text-ink">{p.faqHeading}</h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {faq.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-ink">
                  {item.q}
                  <span aria-hidden className="shrink-0 text-xl text-copper transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="bg-paper-2 py-12">
          <div className="mx-auto max-w-(--spacing-maxw) px-6">
            <h2 className="font-display text-2xl text-ink">{fill(p.othersHeading, { city: cityName })}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((h) => (
                <HotelCard
                  key={h.slug}
                  hotel={h}
                  locale={lang}
                  imageBaseUrl={imageBase}
                  availabilityLabel={t.hotelsSection.availabilityLabel}
                  ctaLabel={t.hotelsSection.ctaLabel}
                  priceFromLabel={t.hotelsSection.priceFromLabel}
                  perNightLabel={t.hotelsSection.perNightLabel}
                  showRegion={false}
                />
              ))}
            </div>
            <Link
              href={localeHref(lang, destination.slug)}
              className="mt-8 inline-flex text-sm font-medium text-copper hover:text-copper-dark"
            >
              {fill(p.seeAllIn, { city: cityName })} &rarr;
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
