import Image from "next/image";
import type { Hotel } from "@/data/hotels";
import { HOTEL_TYPE_LABEL } from "@/data/hotels";
import { getDestination } from "@/data/destinations";
import type { Locale } from "@/lib/i18n";

const TIER_SIGN: Record<Hotel["priceTier"], string> = {
  1: "€",
  2: "€€",
  3: "€€€",
};

export function HotelCard({
  hotel,
  locale,
  imageBaseUrl,
  availabilityLabel,
  ctaLabel,
  showRegion = true,
}: {
  hotel: Hotel;
  locale: Locale;
  imageBaseUrl: string;
  availabilityLabel: string;
  ctaLabel: string;
  showRegion?: boolean;
}) {
  const city = getDestination(hotel.citySlug);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={`${imageBaseUrl}/hotels/${hotel.image}.jpg`}
          alt={hotel.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
        {showRegion && city && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-ink">
            {city.label[locale]}
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-spruce px-2.5 py-1 text-xs font-medium text-white">
          {HOTEL_TYPE_LABEL[hotel.type][locale]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg text-ink">{hotel.name}</h3>
          <span className="shrink-0 text-sm font-medium text-birch-dark">
            {TIER_SIGN[hotel.priceTier]}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {hotel.description[locale]}
        </p>
        <ul className="mt-3 space-y-1">
          {hotel.highlights[locale].map((h) => (
            <li key={h} className="flex items-start gap-1.5 text-xs text-ink-soft">
              <span aria-hidden className="mt-0.5 text-spruce">
                &#10003;
              </span>
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center justify-between gap-2 border-t border-line pt-3">
          <span className="text-xs text-ink-soft">{availabilityLabel}</span>
          <span className="text-sm font-medium text-copper">{ctaLabel} &rarr;</span>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
