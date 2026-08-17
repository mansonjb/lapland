import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  LOCALES,
  isLocale,
  getDict,
  localeHref,
  fill,
  type Locale,
} from "@/lib/i18n";
import { DESTINATIONS, getDestination } from "@/data/destinations";
import { getHotelsByCity } from "@/data/hotels";
import { Stay22Map } from "@/components/Stay22Map";
import { HotelCard } from "@/components/HotelCard";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    DESTINATIONS.map((d) => ({ locale, city: d.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}): Promise<Metadata> {
  const { locale, city } = await params;
  if (!isLocale(locale)) return {};
  const destination = getDestination(city);
  if (!destination) return {};
  const lang = locale as Locale;
  return {
    title: destination.label[lang],
    description: destination.description[lang],
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city } = await params;
  if (!isLocale(locale)) notFound();

  const destination = getDestination(city);
  if (!destination) notFound();

  const lang = locale as Locale;
  const t = getDict(lang);
  const imageBaseUrl = process.env.NEXT_PUBLIC_R2_IMAGE_BASE_URL ?? "";
  const aid = process.env.NEXT_PUBLIC_STAY22_AID ?? "PLACEHOLDER_AID";
  const hotels = getHotelsByCity(destination.slug);

  return (
    <main>
      {/* ---------- BREADCRUMB ---------- */}
      <nav className="mx-auto max-w-(--spacing-maxw) px-6 pt-6 text-sm text-ink-soft">
        <Link href={localeHref(lang)} className="hover:text-copper">
          {t.city.breadcrumbHome}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{destination.label[lang]}</span>
      </nav>

      {/* ---------- HERO ---------- */}
      <section className="mx-auto max-w-(--spacing-maxw) px-6 pb-12 pt-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <span className="rounded-full bg-copper/10 px-3 py-1 text-xs font-semibold text-copper">
              {destination.country}
            </span>
            <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
              {destination.label[lang]}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
              {destination.description[lang]}
            </p>
            <p className="mt-4 text-sm font-medium text-spruce">
              {fill(t.city.seasonLabel, {
                start: destination.season.start,
                end: destination.season.end,
              })}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {destination.quickFacts[lang].map((fact) => (
                <div
                  key={fact}
                  className="flex items-start gap-2 rounded-xl border border-line bg-surface p-3 text-sm text-ink-soft"
                >
                  <span aria-hidden className="mt-0.5 text-spruce">
                    &#10003;
                  </span>
                  {fact}
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={`${imageBaseUrl}/destinations/${destination.slug}.jpg`}
              alt={destination.label[lang]}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------- WHY VISIT ---------- */}
      <section className="bg-paper-2 py-14">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl text-ink">{t.city.whyHeading}</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            {destination.whyVisit[lang]}
          </p>
        </div>
      </section>

      {/* ---------- WHERE TO STAY / WHAT TO DO ---------- */}
      <section className="py-14">
        <div className="mx-auto grid max-w-(--spacing-maxw) gap-10 px-6 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-ink">{t.city.whereToStayHeading}</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              {destination.whereToStay[lang]}
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">{t.city.whatToDoHeading}</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              {destination.whatToDo[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- MAP ---------- */}
      <section id="carte" className="py-14">
        <div className="mx-auto max-w-(--spacing-maxw) px-6">
          <h2 className="font-display text-2xl text-ink">{t.city.mapHeading}</h2>
          <div className="mt-6">
            <Stay22Map
              aid={aid}
              address={destination.address}
              lat={destination.lat}
              lng={destination.lng}
              mode="accommodation"
              campaign={`city-${destination.slug}`}
              lang={lang}
              height={460}
            />
          </div>
        </div>
      </section>

      {/* ---------- HOTELS ---------- */}
      <section id="hebergements" className="py-14">
        <div className="mx-auto max-w-(--spacing-maxw) px-6">
          <h2 className="font-display text-2xl text-ink">{t.city.hotelsHeading}</h2>

          {hotels.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  showRegion={false}
                />
              ))}
            </div>
          ) : (
            <p className="mt-4 text-sm text-ink-soft">{t.city.hotelsEmpty}</p>
          )}
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="py-14">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl text-ink">{t.city.faqHeading}</h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {destination.faq.map((item) => (
              <details key={item.question[lang]} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-ink">
                  {item.question[lang]}
                  <span
                    aria-hidden
                    className="shrink-0 text-xl text-copper transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.answer[lang]}
                </p>
              </details>
            ))}
          </div>

          <Link
            href={localeHref(lang)}
            className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-copper hover:text-copper-dark"
          >
            &larr; {t.city.backToDestinations}
          </Link>
        </div>
      </section>
    </main>
  );
}
