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
    disclosureHeading: string;
    disclosure: string;
    rights: string;
  };
  city: {
    breadcrumbHome: string;
    quickFactsHeading: string;
    whyHeading: string;
    hotelsHeading: string;
    hotelsEmpty: string;
    faqHeading: string;
    mapHeading: string;
    backToDestinations: string;
    seasonLabel: string; // gabarit avec {start} et {end}
  };
  stay22: {
    sponsored: string;
    browse: string; // gabarit avec {name}
  };
};
