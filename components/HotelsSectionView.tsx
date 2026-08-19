import Link from "next/link";
import type { Dict } from "@/data/i18n/ui";
import { HOTEL_TYPE_LABEL, HOTEL_TYPES, type Hotel, type HotelType } from "@/data/hotels";
import type { Destination } from "@/data/destinations";
import { localeHref, fill, type Locale } from "@/lib/i18n";
import { HotelCard } from "@/components/HotelCard";

/**
 * Rendu pur (pas de hook) de la section hebergements d'une page ville,
 * avec ou sans filtre de type actif. Partage par :
 * - le fallback <Suspense> statique (activeType toujours undefined) rendu au build,
 * - CityHotelsSectionClient qui lit `?type=` cote client via useSearchParams.
 * Ce decoupage permet a app/[locale]/[city]/page.tsx de rester entierement
 * statique (generateStaticParams) plutot que de basculer en rendu dynamique
 * a cause d'une lecture de `searchParams` cote serveur.
 */
export function HotelsSectionView({
  lang,
  t,
  destination,
  allHotels,
  imageBaseUrl,
  activeType,
}: {
  lang: Locale;
  t: Dict;
  destination: Destination;
  allHotels: Hotel[];
  imageBaseUrl: string;
  activeType: HotelType | undefined;
}) {
  const hotels = activeType ? allHotels.filter((h) => h.type === activeType) : allHotels;
  const typesInCity = HOTEL_TYPES.filter((type) => allHotels.some((h) => h.type === type));

  return (
    <>
      {activeType ? (
        <>
          <h2 className="font-display text-2xl text-ink">
            {fill(t.cityTypeFilter.activeTitle, {
              type: HOTEL_TYPE_LABEL[activeType][lang],
              city: destination.label[lang],
            })}
          </h2>
          <Link
            href={`${localeHref(lang, destination.slug)}#hebergements`}
            className="mt-2 inline-block text-sm font-medium text-copper hover:text-copper-dark"
          >
            {fill(t.cityTypeFilter.clearFilter, { city: destination.label[lang] })}
          </Link>
        </>
      ) : (
        <h2 className="font-display text-2xl text-ink">{t.city.hotelsHeading}</h2>
      )}

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
      ) : activeType ? (
        <div className="mt-4">
          <p className="text-sm text-ink-soft">
            {fill(t.cityTypeFilter.noResults, {
              type: HOTEL_TYPE_LABEL[activeType][lang],
              city: destination.label[lang],
            })}
          </p>
          <Link
            href={localeHref(lang, `hebergements/${activeType}`)}
            className="mt-2 inline-block text-sm font-medium text-copper hover:text-copper-dark"
          >
            {fill(t.cityTypeFilter.seeElsewhere, { type: HOTEL_TYPE_LABEL[activeType][lang] })}
          </Link>
        </div>
      ) : (
        <p className="mt-4 text-sm text-ink-soft">{t.city.hotelsEmpty}</p>
      )}

      {typesInCity.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6">
          {typesInCity
            .filter((type) => type !== activeType)
            .map((type) => (
              <Link
                key={type}
                href={localeHref(lang, `hebergements/${type}`)}
                className="text-sm font-medium text-copper hover:text-copper-dark"
              >
                {fill(t.cityTypeFilter.typeLinkLabel, { type: HOTEL_TYPE_LABEL[type][lang] })}
              </Link>
            ))}
        </div>
      )}
    </>
  );
}

export default HotelsSectionView;
