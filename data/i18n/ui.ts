// Forme du dictionnaire UI (libelles d'interface).

export type Dict = {
  site: {
    name: string;
    tagline: string;
  };
  nav: {
    destinations: string;
    hotels: string;
    map: string;
    faq: string;
  };
  header: {
    ctaButton: string;
    langFr: string;
    langEn: string;
    langDe: string;
    langNl: string;
    langEs: string;
    langIt: string;
    langJa: string;
  };
  hero: {
    badgeBrand: string;
    badgeKp: string;
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string[];
    stats: { value: string; label: string }[];
    imageAlt: string;
  };
  planning: {
    heading: string;
    cityLabel: string;
    cityAll: string;
    typeLabel: string;
    typeAll: string;
    searchButton: string;
  };
  manifesto: {
    quote: string;
    attribution: string;
  };
  intro: {
    heading: string;
    paragraphLeft: string;
    paragraphRight: string;
    linkLabel: string;
  };
  experiencesSection: {
    heading: string;
    subheading: string;
    ctaLabel: string;
  };
  destinationsSection: {
    heading: string;
    subheading: string;
    ctaLabel: string; // gabarit sans {name}, applique par ville
  };
  mapSection: {
    heading: string;
    subheading: string;
  };
  hotelsSection: {
    heading: string;
    subheading: string;
    availabilityLabel: string;
    ctaLabel: string;
    priceFromLabel: string; // ex. "à partir de"
    perNightLabel: string; // ex. "/ nuit"
  };
  faqSection: {
    heading: string;
    subheading: string;
    items: { q: string; a: string }[];
  };
  footer: {
    tagline: string;
    columnDestinations: string;
    columnGuide: string;
    guideHow: string;
    guideFaq: string;
    guideMap: string;
    columnAbout: string;
    columnLegal: string;
    legalLink: string;
    privacyLink: string;
    affiliateLink: string;
    disclosureHeading: string;
    disclosure: string;
    rights: string;
  };
  city: {
    breadcrumbHome: string;
    quickFactsHeading: string;
    whyHeading: string;
    whereToStayHeading: string;
    whatToDoHeading: string;
    hotelsHeading: string;
    hotelsEmpty: string;
    faqHeading: string;
    mapHeading: string;
    backToDestinations: string;
    seasonLabel: string; // gabarit avec {start} et {end}
    practicalHeading: string;
    practicalPopulation: string;
    practicalAirport: string;
    practicalTrain: string;
    practicalCarRental: string;
    practicalWinterTemp: string;
    auroraSpotsHeading: string;
    activitiesHeading: string;
  };
  stay22: {
    sponsored: string;
    browse: string; // gabarit avec {name}
  };
  legal: {
    title: string;
    updated: string;
    publisherHeading: string;
    publisherLines: string[]; // dernier element contient le gabarit {email}
    directorHeading: string;
    directorText: string;
    hostHeading: string;
    hostLines: string[];
    ipHeading: string;
    ipText: string;
    liabilityHeading: string;
    liabilityText: string;
  };
  privacy: {
    title: string;
    updated: string;
    intro: string;
    dataHeading: string;
    dataItems: string[];
    purposesHeading: string;
    purposesText: string;
    legalBasisHeading: string;
    legalBasisText: string;
    retentionHeading: string;
    retentionText: string;
    sharingHeading: string;
    sharingText: string;
    rightsHeading: string;
    rightsText: string; // gabarit avec {email}
  };
  affiliate: {
    title: string;
    updated: string;
    intro: string;
    howHeading: string;
    howText: string;
    editorialHeading: string;
    editorialText: string;
    partnersHeading: string;
    partnersText: string;
    contactText: string; // gabarit avec {email}
  };
  cookieConsent: {
    message: string;
    accept: string;
    decline: string;
    learnMore: string;
    mapPlaceholderText: string;
  };
};
