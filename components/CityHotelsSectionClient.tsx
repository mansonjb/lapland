"use client";

import { useSearchParams } from "next/navigation";
import type { Dict } from "@/data/i18n/ui";
import { isHotelType, type Hotel } from "@/data/hotels";
import type { Destination } from "@/data/destinations";
import type { Locale } from "@/lib/i18n";
import { HotelsSectionView } from "@/components/HotelsSectionView";

/** Lit `?type=` cote client (useSearchParams) pour ne pas rendre la page ville dynamique. */
export function CityHotelsSectionClient({
  lang,
  t,
  destination,
  allHotels,
  imageBaseUrl,
}: {
  lang: Locale;
  t: Dict;
  destination: Destination;
  allHotels: Hotel[];
  imageBaseUrl: string;
}) {
  const searchParams = useSearchParams();
  const rawType = searchParams.get("type");
  const activeType = rawType && isHotelType(rawType) ? rawType : undefined;

  return (
    <HotelsSectionView
      lang={lang}
      t={t}
      destination={destination}
      allHotels={allHotels}
      imageBaseUrl={imageBaseUrl}
      activeType={activeType}
    />
  );
}

export default CityHotelsSectionClient;
