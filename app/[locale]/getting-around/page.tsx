import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { LOCALES, isLocale, getDict, localeHref, fill, type Locale } from "@/lib/i18n";
import { DESTINATIONS } from "@/data/destinations";
import { CAR_RENTAL_DISTANCES } from "@/data/car-rental-distances";
import { CarRentalWidget } from "@/components/CarRentalWidget";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDict(locale as Locale);
  return { title: t.gettingAroundPage.metaTitle, description: t.gettingAroundPage.metaDescription };
}

// Icones inline minimalistes (pas de librairie externe), style coherent avec
// les traits fins deja utilises sur le site (DestinationCard, HotelCard).
function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M4.5 16v-3.2L6.5 8h11l2 4.8V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M4.5 16h15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="7.8" cy="16.3" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.2" cy="16.3" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function WalkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="13" cy="4.6" r="1.6" fill="currentColor" />
      <path
        d="M11.2 7 8.3 10.3l1.4 1.2M11.2 7l2.8 2 2.6 1.1M11.2 7l-.4 5 2.8 2.8-.6 4.1M9.8 15l-2.9 4.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x="4" y="5" width="16" height="10.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 11.2h16M8.2 5v6.2M15.8 5v6.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7.6" cy="17.2" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.4" cy="17.2" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Check({ className = "text-copper" }: { className?: string }) {
  return (
    <span aria-hidden className={`mt-0.5 shrink-0 ${className}`}>
      &#10003;
    </span>
  );
}

export default async function GettingAroundPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const lang = locale as Locale;
  const t = getDict(lang);
  const p = t.gettingAroundPage;

  return (
    <main>
      <nav className="mx-auto max-w-3xl px-6 pt-6 text-sm text-ink-soft">
        <Link href={localeHref(lang)} className="hover:text-copper">
          {t.city.breadcrumbHome}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{p.breadcrumbLabel}</span>
      </nav>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="font-display text-4xl text-ink">{p.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{p.intro}</p>

        {/* Selecteur visuel des 3 modes, ancres vers chaque carte */}
        <div className="mt-8 flex flex-wrap gap-2">
          <a
            href="#mode-car"
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-ink transition hover:border-copper hover:text-copper"
          >
            <span className="text-copper">
              <CarIcon />
            </span>
            {p.car.heading}
          </a>
          <a
            href="#mode-walking"
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-ink transition hover:border-spruce hover:text-spruce"
          >
            <span className="text-spruce">
              <WalkIcon />
            </span>
            {p.walking.heading}
          </a>
          <a
            href="#mode-transit"
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-ink transition hover:border-birch-dark hover:text-birch-dark"
          >
            <span className="text-birch-dark">
              <BusIcon />
            </span>
            {p.publicTransport.heading}
          </a>
        </div>

        <div className="mt-10 space-y-10">
          {/* ================= VOITURE ================= */}
          <article
            id="mode-car"
            className="scroll-mt-24 overflow-hidden rounded-3xl border border-line bg-surface"
          >
            <div className="flex items-center gap-4 border-b border-line bg-copper/5 px-6 py-6 sm:px-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-copper/10 text-copper">
                <CarIcon />
              </span>
              <div>
                <h2 className="font-display text-2xl text-ink">{p.car.heading}</h2>
                <p className="mt-0.5 text-sm text-ink-soft">{p.car.tagline}</p>
              </div>
            </div>

            <div className="space-y-10 px-6 py-8 sm:px-8">
              {/* Faut-il louer une voiture */}
              <div>
                <h3 className="text-lg font-semibold text-ink">{p.car.needHeading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.car.needIntro}</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {DESTINATIONS.map((d) => (
                    <li key={d.slug} className="rounded-xl border border-line bg-paper-2 p-4">
                      <p className="text-sm font-semibold text-ink">{d.label[lang]}</p>
                      <p className="mt-1 text-sm leading-snug text-ink-soft">
                        {d.practicalInfo.carRental[lang]}
                      </p>
                      <Link
                        href={localeHref(lang, d.slug)}
                        className="mt-2 inline-block text-sm font-medium text-copper hover:text-copper-dark"
                      >
                        {fill(p.car.needLinkLabel, { city: d.label[lang] })}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pneus hiver */}
              <div>
                <h3 className="text-lg font-semibold text-ink">{p.car.tiresHeading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.car.tiresIntro}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-line bg-paper-2 p-4">
                    <p className="text-sm font-semibold text-copper">{p.car.tiresFinlandHeading}</p>
                    <p className="mt-1 text-sm leading-snug text-ink-soft">{p.car.tiresFinlandText}</p>
                  </div>
                  <div className="rounded-xl border border-line bg-paper-2 p-4">
                    <p className="text-sm font-semibold text-copper">{p.car.tiresSwedenHeading}</p>
                    <p className="mt-1 text-sm leading-snug text-ink-soft">{p.car.tiresSwedenText}</p>
                  </div>
                  <div className="rounded-xl border border-line bg-paper-2 p-4">
                    <p className="text-sm font-semibold text-copper">{p.car.tiresNorwayHeading}</p>
                    <p className="mt-1 text-sm leading-snug text-ink-soft">{p.car.tiresNorwayText}</p>
                  </div>
                </div>
                <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-ink-soft">
                  <Check />
                  {p.car.tiresRentalNote}
                </p>
              </div>

              {/* Type de vehicule */}
              <div>
                <h3 className="text-lg font-semibold text-ink">{p.car.vehicleHeading}</h3>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-base font-semibold text-ink">{p.car.vehicle2wdHeading}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.car.vehicle2wdText}</p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink">{p.car.vehicleAwdHeading}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.car.vehicleAwdText}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-base font-semibold text-ink">{p.car.transmissionHeading}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.car.transmissionText}</p>
                </div>
              </div>

              {/* Age et permis */}
              <div>
                <h3 className="text-lg font-semibold text-ink">{p.car.ageHeading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.car.ageText}</p>
              </div>

              {/* Securite */}
              <div>
                <h3 className="text-lg font-semibold text-ink">{p.car.safetyHeading}</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-2.5 rounded-xl border border-line bg-paper-2 p-4">
                    <Check />
                    <span>
                      <span className="block text-sm font-semibold text-ink">{p.car.safetyWildlifeHeading}</span>
                      <span className="mt-1 block text-sm leading-snug text-ink-soft">{p.car.safetyWildlifeText}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 rounded-xl border border-line bg-paper-2 p-4">
                    <Check />
                    <span>
                      <span className="block text-sm font-semibold text-ink">{p.car.safetyFuelHeading}</span>
                      <span className="mt-1 block text-sm leading-snug text-ink-soft">{p.car.safetyFuelText}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 rounded-xl border border-line bg-paper-2 p-4">
                    <Check />
                    <span>
                      <span className="block text-sm font-semibold text-ink">{p.car.safetyDarknessHeading}</span>
                      <span className="mt-1 block text-sm leading-snug text-ink-soft">{p.car.safetyDarknessText}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 rounded-xl border border-line bg-paper-2 p-4">
                    <Check />
                    <span>
                      <span className="block text-sm font-semibold text-ink">{p.car.safetyKitHeading}</span>
                      <span className="mt-1 block text-sm leading-snug text-ink-soft">{p.car.safetyKitText}</span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Distances */}
              <div>
                <h3 className="text-lg font-semibold text-ink">{p.car.distancesHeading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.car.distancesIntro}</p>
                <div className="mt-4 overflow-x-auto rounded-xl border border-line">
                  <table className="w-full min-w-[420px] border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-line bg-paper-2 text-left text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        <th className="px-4 py-3">{p.car.distancesFromLabel}</th>
                        <th className="px-4 py-3">{p.car.distancesToLabel}</th>
                        <th className="px-4 py-3">{p.car.distancesDistanceLabel}</th>
                        <th className="px-4 py-3">{p.car.distancesTimeLabel}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CAR_RENTAL_DISTANCES.map((row) => (
                        <tr
                          key={`${row.from.en}-${row.to.en}`}
                          className="border-b border-line last:border-0 odd:bg-surface even:bg-paper-2"
                        >
                          <td className="px-4 py-3 font-medium text-ink">{row.from[lang]}</td>
                          <td className="px-4 py-3 font-medium text-ink">{row.to[lang]}</td>
                          <td className="px-4 py-3 text-ink-soft">{row.distanceKm} km</td>
                          <td className="px-4 py-3 text-ink-soft">{row.driveTime[lang]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Widget de reservation (TravelPayouts) */}
              <div>
                <h3 className="text-lg font-semibold text-ink">{p.car.widgetHeading}</h3>
                <div className="mt-4">
                  <CarRentalWidget locale={lang} />
                </div>
              </div>
            </div>
          </article>

          {/* ================= A PIED ================= */}
          <article
            id="mode-walking"
            className="scroll-mt-24 overflow-hidden rounded-3xl border border-line bg-surface"
          >
            <div className="flex items-center gap-4 border-b border-line bg-spruce/5 px-6 py-6 sm:px-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-spruce/10 text-spruce">
                <WalkIcon />
              </span>
              <div>
                <h2 className="font-display text-2xl text-ink">{p.walking.heading}</h2>
                <p className="mt-0.5 text-sm text-ink-soft">{p.walking.tagline}</p>
              </div>
            </div>
            <div className="px-6 py-8 sm:px-8">
              <p className="text-sm leading-relaxed text-ink-soft">{p.walking.intro}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {DESTINATIONS.map((d, i) => (
                  <li key={d.slug} className="rounded-xl border border-line bg-paper-2 p-4">
                    <p className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                      <span className="text-spruce">&#10003;</span>
                      {d.label[lang]}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-ink-soft">{p.walking.cities[i]}</p>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* ================= TRANSPORTS EN COMMUN ================= */}
          <article
            id="mode-transit"
            className="scroll-mt-24 overflow-hidden rounded-3xl border border-line bg-surface"
          >
            <div className="flex items-center gap-4 border-b border-line bg-birch-dark/5 px-6 py-6 sm:px-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-birch-dark/10 text-birch-dark">
                <BusIcon />
              </span>
              <div>
                <h2 className="font-display text-2xl text-ink">{p.publicTransport.heading}</h2>
                <p className="mt-0.5 text-sm text-ink-soft">{p.publicTransport.tagline}</p>
              </div>
            </div>
            <div className="px-6 py-8 sm:px-8">
              <p className="text-sm leading-relaxed text-ink-soft">{p.publicTransport.intro}</p>
              <ul className="mt-5 space-y-3">
                {DESTINATIONS.map((d, i) => (
                  <li
                    key={d.slug}
                    className="flex items-start gap-2.5 rounded-xl border border-line bg-paper-2 p-4"
                  >
                    <span className="mt-0.5 shrink-0 text-birch-dark">&#10003;</span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{d.label[lang]}</span>
                      <span className="mt-1 block text-sm leading-snug text-ink-soft">
                        {p.publicTransport.cities[i]}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <Link
          href={localeHref(lang)}
          className="mt-12 inline-flex items-center gap-1 text-sm font-medium text-copper hover:text-copper-dark"
        >
          &larr; {t.city.backToDestinations}
        </Link>
      </section>
    </main>
  );
}
