import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { LOCALES, isLocale, getDict, localeHref, fill, type Locale } from "@/lib/i18n";
import { HOTEL_TYPES, HOTEL_TYPE_LABEL, getHotelsByType, isHotelType } from "@/data/hotels";
import { DESTINATIONS } from "@/data/destinations";
import { HotelCard } from "@/components/HotelCard";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    HOTEL_TYPES.map((type) => ({ locale, type }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; type: string }>;
}): Promise<Metadata> {
  const { locale, type } = await params;
  if (!isLocale(locale) || !isHotelType(type)) return {};
  const lang = locale as Locale;
  const t = getDict(lang);
  const typeLabel = HOTEL_TYPE_LABEL[type][lang];
  return {
    title: fill(t.hotelHub.title, { type: typeLabel }),
    description: fill(t.hotelHub.metaDescription, { type: typeLabel }),
  };
}

export default async function HotelHubPage({
  params,
}: {
  params: Promise<{ locale: string; type: string }>;
}) {
  const { locale, type } = await params;
  if (!isLocale(locale)) notFound();
  if (!isHotelType(type)) notFound();

  const lang = locale as Locale;
  const t = getDict(lang);
  const typeLabel = HOTEL_TYPE_LABEL[type][lang];
  const imageBaseUrl = process.env.NEXT_PUBLIC_R2_IMAGE_BASE_URL ?? "";

  // Objectif : renvoyer TOUS les hotels du site pour ce type, toutes villes confondues.
  const hotels = getHotelsByType(type);
  const cities = DESTINATIONS.filter((d) => hotels.some((h) => h.citySlug === d.slug));
  const otherTypes = HOTEL_TYPES.filter((x) => x !== type);

  return (
    <main>
      {/* ---------- BREADCRUMB ---------- */}
      <nav className="mx-auto max-w-(--spacing-maxw) px-6 pt-6 text-sm text-ink-soft">
        <Link href={localeHref(lang)} className="hover:text-copper">
          {t.city.breadcrumbHome}
        </Link>
        <span className="mx-2">/</span>
        <a href={`${localeHref(lang)}#hebergements`} className="hover:text-copper">
          {t.hotelHub.breadcrumbLabel}
        </a>
        <span className="mx-2">/</span>
        <span className="text-ink">{typeLabel}</span>
      </nav>

      {/* ---------- HERO ---------- */}
      <section className="mx-auto max-w-(--spacing-maxw) px-6 pb-10 pt-6">
        <h1 className="font-display text-4xl text-ink sm:text-5xl">
          {fill(t.hotelHub.title, { type: typeLabel })}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {fill(t.hotelHub.subheading, { type: typeLabel, count: String(hotels.length) })}
        </p>
      </section>

      {/* ---------- CITIES ---------- */}
      {cities.length > 0 && (
        <section className="pb-10">
          <div className="mx-auto max-w-(--spacing-maxw) px-6">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
              {t.hotelHub.citiesHeading}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  href={localeHref(lang, c.slug)}
                  className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink transition hover:border-copper hover:text-copper"
                >
                  {c.label[lang]}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- HOTELS GRID ---------- */}
      <section className="pb-16">
        <div className="mx-auto max-w-(--spacing-maxw) px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((h) => (
              <HotelCard
                key={h.slug}
                hotel={h}
                locale={lang}
                imageBaseUrl={imageBaseUrl}
                availabilityLabel={t.hotelsSection.availabilityLabel}
                ctaLabel={t.hotelsSection.ctaLabel}
                priceFromLabel={t.hotelsSection.priceFromLabel}
                perNightLabel={t.hotelsSection.perNightLabel}
                showRegion={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- OTHER TYPES ---------- */}
      <section className="border-t border-line py-10">
        <div className="mx-auto max-w-(--spacing-maxw) px-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
            {t.hotelHub.otherTypesHeading}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {otherTypes.map((x) => (
              <Link
                key={x}
                href={localeHref(lang, `hebergements/${x}`)}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink transition hover:border-copper hover:text-copper"
              >
                {HOTEL_TYPE_LABEL[x][lang]}
              </Link>
            ))}
          </div>

          <Link
            href={localeHref(lang)}
            className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-copper hover:text-copper-dark"
          >
            &larr; {t.hotelHub.backToHome}
          </Link>
        </div>
      </section>
    </main>
  );
}
