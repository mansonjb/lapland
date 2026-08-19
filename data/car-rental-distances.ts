// Distances routieres indicatives entre les destinations du site, verifiees via recherche web (aout 2026).
// Utilise par app/[locale]/getting-around/page.tsx (section voiture).

type LocaleText = {
  fr: string;
  en: string;
  de: string;
  nl: string;
  es: string;
  it: string;
  ja: string;
};

export type CarRentalDistance = {
  from: LocaleText;
  to: LocaleText;
  distanceKm: number;
  driveTime: LocaleText;
};

const ROVANIEMI: LocaleText = {
  fr: "Rovaniemi",
  en: "Rovaniemi",
  de: "Rovaniemi",
  nl: "Rovaniemi",
  es: "Rovaniemi",
  it: "Rovaniemi",
  ja: "ロヴァニエミ",
};

const LEVI: LocaleText = {
  fr: "Levi",
  en: "Levi",
  de: "Levi",
  nl: "Levi",
  es: "Levi",
  it: "Levi",
  ja: "レヴィ",
};

const SAARISELKA: LocaleText = {
  fr: "Saariselkä",
  en: "Saariselkä",
  de: "Saariselkä",
  nl: "Saariselkä",
  es: "Saariselkä",
  it: "Saariselkä",
  ja: "サーリセルカ",
};

const KIRUNA: LocaleText = {
  fr: "Kiruna",
  en: "Kiruna",
  de: "Kiruna",
  nl: "Kiruna",
  es: "Kiruna",
  it: "Kiruna",
  ja: "キルナ",
};

const ABISKO: LocaleText = {
  fr: "Abisko",
  en: "Abisko",
  de: "Abisko",
  nl: "Abisko",
  es: "Abisko",
  it: "Abisko",
  ja: "アビスコ",
};

const TROMSO: LocaleText = {
  fr: "Tromsø",
  en: "Tromsø",
  de: "Tromsø",
  nl: "Tromsø",
  es: "Tromsø",
  it: "Tromsø",
  ja: "トロムソ",
};

export const CAR_RENTAL_DISTANCES: CarRentalDistance[] = [
  {
    from: ROVANIEMI,
    to: LEVI,
    distanceKm: 170,
    driveTime: {
      fr: "≈ 2 h 15",
      en: "≈ 2h 15",
      de: "≈ 2 Std. 15",
      nl: "≈ 2 u 15",
      es: "≈ 2 h 15",
      it: "≈ 2 h 15",
      ja: "約2時間15分",
    },
  },
  {
    from: ROVANIEMI,
    to: SAARISELKA,
    distanceKm: 260,
    driveTime: {
      fr: "≈ 3 h",
      en: "≈ 3h",
      de: "≈ 3 Std.",
      nl: "≈ 3 u",
      es: "≈ 3 h",
      it: "≈ 3 h",
      ja: "約3時間",
    },
  },
  {
    from: LEVI,
    to: SAARISELKA,
    distanceKm: 230,
    driveTime: {
      fr: "≈ 3 h",
      en: "≈ 3h",
      de: "≈ 3 Std.",
      nl: "≈ 3 u",
      es: "≈ 3 h",
      it: "≈ 3 h",
      ja: "約3時間",
    },
  },
  {
    from: ROVANIEMI,
    to: KIRUNA,
    distanceKm: 340,
    driveTime: {
      fr: "≈ 5 h",
      en: "≈ 5h",
      de: "≈ 5 Std.",
      nl: "≈ 5 u",
      es: "≈ 5 h",
      it: "≈ 5 h",
      ja: "約5時間",
    },
  },
  {
    from: KIRUNA,
    to: ABISKO,
    distanceKm: 95,
    driveTime: {
      fr: "≈ 1 h 10",
      en: "≈ 1h 10",
      de: "≈ 1 Std. 10",
      nl: "≈ 1 u 10",
      es: "≈ 1 h 10",
      it: "≈ 1 h 10",
      ja: "約1時間10分",
    },
  },
  {
    from: KIRUNA,
    to: TROMSO,
    distanceKm: 390,
    driveTime: {
      fr: "≈ 6 h",
      en: "≈ 6h",
      de: "≈ 6 Std.",
      nl: "≈ 6 u",
      es: "≈ 6 h",
      it: "≈ 6 h",
      ja: "約6時間",
    },
  },
  {
    from: ABISKO,
    to: TROMSO,
    distanceKm: 300,
    driveTime: {
      fr: "≈ 4 h 45",
      en: "≈ 4h 45",
      de: "≈ 4 Std. 45",
      nl: "≈ 4 u 45",
      es: "≈ 4 h 45",
      it: "≈ 4 h 45",
      ja: "約4時間45分",
    },
  },
];
