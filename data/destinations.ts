export type Destination = {
  slug: string;
  address: string;
  lat: number;
  lng: number;
  label: {
    fr: string;
    en: string;
  };
  country: string;
  /** Default high-season (aurora season) window used to pre-fill booking widgets. */
  season: {
    /** ISO month-day, e.g. "09-01" */
    start: string;
    end: string;
  };
};

// Sept -> mars = fenetre standard "aurora season" pour tout le site.
const AURORA_SEASON = { start: "09-01", end: "03-31" };

export const DESTINATIONS: Destination[] = [
  {
    slug: "rovaniemi",
    address: "Rovaniemi, Finland",
    lat: 66.5039,
    lng: 25.7294,
    label: { fr: "Rovaniemi", en: "Rovaniemi" },
    country: "Finland",
    season: AURORA_SEASON,
  },
  {
    slug: "levi",
    address: "Levi, Kittila, Finland",
    lat: 67.8054,
    lng: 24.8017,
    label: { fr: "Levi", en: "Levi" },
    country: "Finland",
    season: AURORA_SEASON,
  },
  {
    slug: "saariselka",
    address: "Saariselka, Inari, Finland",
    lat: 68.4189,
    lng: 27.4197,
    label: { fr: "Saariselka", en: "Saariselka" },
    country: "Finland",
    season: AURORA_SEASON,
  },
  {
    slug: "kiruna-abisko",
    address: "Abisko, Kiruna, Sweden",
    lat: 68.3557,
    lng: 18.7906,
    label: { fr: "Kiruna & Abisko", en: "Kiruna & Abisko" },
    country: "Sweden",
    season: AURORA_SEASON,
  },
  {
    slug: "tromso",
    address: "Tromso, Norway",
    lat: 69.6492,
    lng: 18.9553,
    label: { fr: "Tromso", en: "Tromso" },
    country: "Norway",
    season: AURORA_SEASON,
  },
];

export function getDestination(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}
