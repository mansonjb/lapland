import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { LOCALES, isLocale, getDict, localeHref, type Locale } from "@/lib/i18n";
import { DESTINATIONS } from "@/data/destinations";
import { HOTELS } from "@/data/hotels";
import { EXPERIENCES } from "@/data/experiences";
import { Stay22Map } from "@/components/Stay22Map";
import { DestinationCard } from "@/components/DestinationCard";
import { HotelCard } from "@/components/HotelCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { PlanningBar } from "@/components/PlanningBar";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

// Centre approximatif de la Laponie = moyenne des 5 destinations couvertes.
const LAPLAND_CENTER = { lat: 68.147, lng: 23.139 };

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const lang = locale as Locale;
  const t = getDict(lang);
  const featured = DESTINATIONS[0]; // Rovaniemi
  const imageBaseUrl = process.env.NEXT_PUBLIC_R2_IMAGE_BASE_URL ?? "";
  const aid = process.env.NEXT_PUBLIC_STAY22_AID ?? "PLACEHOLDER_AID";

  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden pb-24 pt-14">
        <div className="mx-auto grid max-w-(--spacing-maxw) gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-copper/10 px-3 py-1 text-xs font-semibold text-copper">
                {t.hero.badgeBrand}
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-spruce/10 px-3 py-1 text-xs font-semibold text-spruce">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-spruce" />
                {t.hero.badgeKp}
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              {t.hero.titlePre}{" "}
              <span className="font-display text-gradient-brand">
                {t.hero.titleHighlight}
              </span>{" "}
              {t.hero.titlePost}
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              {t.hero.lede}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#hebergements"
                className="rounded-full bg-copper px-6 py-3 text-sm font-medium text-white transition hover:bg-copper-dark"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#destinations"
                className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition hover:bg-paper-2"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            <ul className="mt-7 space-y-2">
              {t.hero.trust.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                  <span aria-hidden className="mt-0.5 text-spruce">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
              {t.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-2xl text-ink">{stat.value}</dt>
                  <dd className="text-xs text-ink-soft">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={`${imageBaseUrl}/destinations/rovaniemi.jpg`}
              alt={t.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-(--spacing-maxw) px-6 sm:mt-14">
          <PlanningBar
            locale={lang}
            heading={t.planning.heading}
            cityLabel={t.planning.cityLabel}
            cityAll={t.planning.cityAll}
            typeLabel={t.planning.typeLabel}
            typeAll={t.planning.typeAll}
            searchButton={t.planning.searchButton}
          />
        </div>
      </section>

      {/* ---------- INTRO EDITORIAL ---------- */}
      <section id="intro" className="pb-16 pt-20">
        <div className="mx-auto max-w-(--spacing-maxw) px-6">
          <h2 className="font-display text-3xl text-ink">{t.intro.heading}</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <p className="text-base leading-relaxed text-ink-soft">
              {t.intro.paragraphLeft}
            </p>
            <p className="text-base leading-relaxed text-ink-soft">
              {t.intro.paragraphRight}{" "}
              <a href="#faq" className="font-medium text-copper hover:text-copper-dark">
                {t.intro.linkLabel} &rarr;
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- EXPERIENCES ---------- */}
      <section id="experiences" className="py-16">
        <div className="mx-auto max-w-(--spacing-maxw) px-6">
          <h2 className="font-display text-3xl text-ink">
            {t.experiencesSection.heading}
          </h2>
          <p className="mt-2 max-w-2xl text-base text-ink-soft">
            {t.experiencesSection.subheading}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERIENCES.map((experience) => (
              <ExperienceCard
                key={experience.slug}
                experience={experience}
                locale={lang}
                ctaLabel={t.experiencesSection.ctaLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DESTINATIONS GRID ---------- */}
      <section id="destinations" className="py-16">
        <div className="mx-auto max-w-(--spacing-maxw) px-6">
          <h2 className="font-display text-3xl text-ink">
            {t.destinationsSection.heading}
          </h2>
          <p className="mt-2 max-w-2xl text-base text-ink-soft">
            {t.destinationsSection.subheading}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.map((d, i) => (
              <DestinationCard
                key={d.slug}
                destination={d}
                index={i}
                locale={lang}
                imageBaseUrl={imageBaseUrl}
                ctaLabel={t.destinationsSection.ctaLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MAP ---------- */}
      <section id="carte" className="py-16">
        <div className="mx-auto max-w-(--spacing-maxw) px-6">
          <h2 className="font-display text-3xl text-ink">{t.mapSection.heading}</h2>
          <p className="mt-2 max-w-2xl text-base text-ink-soft">
            {t.mapSection.subheading}
          </p>

          <div className="mt-8">
            <Stay22Map
              aid={aid}
              lat={LAPLAND_CENTER.lat}
              lng={LAPLAND_CENTER.lng}
              mode="accommodation"
              campaign="home-map"
              lang={lang}
              height={480}
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {DESTINATIONS.map((d) => (
              <Link
                key={d.slug}
                href={localeHref(lang, d.slug)}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink transition hover:border-copper hover:text-copper"
              >
                {d.label[lang]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HOTELS SELECTION ---------- */}
      <section id="hebergements" className="py-16">
        <div className="mx-auto max-w-(--spacing-maxw) px-6">
          <h2 className="font-display text-3xl text-ink">{t.hotelsSection.heading}</h2>
          <p className="mt-2 max-w-2xl text-base text-ink-soft">
            {t.hotelsSection.subheading}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOTELS.map((h) => (
              <HotelCard
                key={h.slug}
                hotel={h}
                locale={lang}
                imageBaseUrl={imageBaseUrl}
                availabilityLabel={t.hotelsSection.availabilityLabel}
                ctaLabel={t.hotelsSection.ctaLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-3xl text-ink">{t.faqSection.heading}</h2>
          <p className="mt-2 text-base text-ink-soft">{t.faqSection.subheading}</p>

          <div className="mt-8 divide-y divide-line border-y border-line">
            {t.faqSection.items.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-ink">
                  {item.q}
                  <span
                    aria-hidden
                    className="shrink-0 text-xl text-copper transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
