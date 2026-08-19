import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { LOCALES, isLocale, getDict, localeHref, fill, type Locale } from "@/lib/i18n";
import { DESTINATIONS } from "@/data/destinations";
import { CAR_RENTAL_DISTANCES } from "@/data/car-rental-distances";
import { CarRentalWidgetPlaceholder } from "@/components/CarRentalWidgetPlaceholder";

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
  return { title: t.carRentalPage.metaTitle, description: t.carRentalPage.metaDescription };
}

export default async function CarRentalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const lang = locale as Locale;
  const t = getDict(lang);
  const p = t.carRentalPage;

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

        <div className="mt-12 space-y-12">
          {/* ---------- FAUT-IL LOUER UNE VOITURE ---------- */}
          <div>
            <h2 className="font-display text-2xl text-ink">{p.needHeading}</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">{p.needIntro}</p>
            <ul className="mt-5 space-y-3">
              {DESTINATIONS.map((d) => (
                <li key={d.slug} className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-semibold text-ink">{d.label[lang]}</p>
                  <p className="mt-1 text-sm leading-snug text-ink-soft">
                    {d.practicalInfo.carRental[lang]}
                  </p>
                  <Link
                    href={localeHref(lang, d.slug)}
                    className="mt-2 inline-block text-sm font-medium text-copper hover:text-copper-dark"
                  >
                    {fill(p.needLinkLabel, { city: d.label[lang] })}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- PNEUS HIVER ---------- */}
          <div>
            <h2 className="font-display text-2xl text-ink">{p.tiresHeading}</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">{p.tiresIntro}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-line bg-surface p-4">
                <p className="text-sm font-semibold text-copper">{p.tiresFinlandHeading}</p>
                <p className="mt-1 text-sm leading-snug text-ink-soft">{p.tiresFinlandText}</p>
              </div>
              <div className="rounded-xl border border-line bg-surface p-4">
                <p className="text-sm font-semibold text-copper">{p.tiresSwedenHeading}</p>
                <p className="mt-1 text-sm leading-snug text-ink-soft">{p.tiresSwedenText}</p>
              </div>
              <div className="rounded-xl border border-line bg-surface p-4">
                <p className="text-sm font-semibold text-copper">{p.tiresNorwayHeading}</p>
                <p className="mt-1 text-sm leading-snug text-ink-soft">{p.tiresNorwayText}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{p.tiresRentalNote}</p>
          </div>

          {/* ---------- TYPE DE VEHICULE ---------- */}
          <div>
            <h2 className="font-display text-2xl text-ink">{p.vehicleHeading}</h2>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-base font-semibold text-ink">{p.vehicle2wdHeading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.vehicle2wdText}</p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-ink">{p.vehicleAwdHeading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.vehicleAwdText}</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-base font-semibold text-ink">{p.transmissionHeading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.transmissionText}</p>
            </div>
          </div>

          {/* ---------- AGE ET PERMIS ---------- */}
          <div>
            <h2 className="font-display text-2xl text-ink">{p.ageHeading}</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">{p.ageText}</p>
          </div>

          {/* ---------- SECURITE ---------- */}
          <div>
            <h2 className="font-display text-2xl text-ink">{p.safetyHeading}</h2>
            <ul className="mt-5 space-y-4">
              <li className="rounded-xl border border-line bg-surface p-4">
                <p className="text-sm font-semibold text-ink">{p.safetyWildlifeHeading}</p>
                <p className="mt-1 text-sm leading-snug text-ink-soft">{p.safetyWildlifeText}</p>
              </li>
              <li className="rounded-xl border border-line bg-surface p-4">
                <p className="text-sm font-semibold text-ink">{p.safetyFuelHeading}</p>
                <p className="mt-1 text-sm leading-snug text-ink-soft">{p.safetyFuelText}</p>
              </li>
              <li className="rounded-xl border border-line bg-surface p-4">
                <p className="text-sm font-semibold text-ink">{p.safetyDarknessHeading}</p>
                <p className="mt-1 text-sm leading-snug text-ink-soft">{p.safetyDarknessText}</p>
              </li>
              <li className="rounded-xl border border-line bg-surface p-4">
                <p className="text-sm font-semibold text-ink">{p.safetyKitHeading}</p>
                <p className="mt-1 text-sm leading-snug text-ink-soft">{p.safetyKitText}</p>
              </li>
            </ul>
          </div>

          {/* ---------- DISTANCES ---------- */}
          <div>
            <h2 className="font-display text-2xl text-ink">{p.distancesHeading}</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">{p.distancesIntro}</p>
            <div className="mt-5 overflow-x-auto rounded-xl border border-line">
              <table className="w-full min-w-[420px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-line bg-paper-2 text-left text-xs font-semibold uppercase tracking-wide text-ink-soft">
                    <th className="px-4 py-3">{p.distancesFromLabel}</th>
                    <th className="px-4 py-3">{p.distancesToLabel}</th>
                    <th className="px-4 py-3">{p.distancesDistanceLabel}</th>
                    <th className="px-4 py-3">{p.distancesTimeLabel}</th>
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

          {/* ---------- WIDGET RESERVATION (placeholder) ---------- */}
          <div>
            <h2 className="font-display text-2xl text-ink">{p.widgetHeading}</h2>
            <div className="mt-5">
              {/* TODO: widget de reservation voiture TravelPayouts a integrer ici */}
              <CarRentalWidgetPlaceholder
                title={p.widgetPlaceholderTitle}
                text={p.widgetPlaceholderText}
              />
            </div>
          </div>
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
