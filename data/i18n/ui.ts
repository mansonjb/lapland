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
    gettingAround: string;
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
  hotelHub: {
    breadcrumbLabel: string;
    title: string; // gabarit avec {type}
    metaDescription: string; // gabarit avec {type}
    subheading: string; // gabarit avec {count} et {type}
    citiesHeading: string;
    otherTypesHeading: string;
    backToHome: string;
  };
  cityTypeFilter: {
    activeTitle: string; // gabarit avec {type} et {city}
    clearFilter: string; // gabarit avec {city}
    noResults: string; // gabarit avec {type} et {city}
    seeElsewhere: string; // gabarit avec {type}
    typeLinkLabel: string; // gabarit avec {type}
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
  gettingAroundPage: {
    metaTitle: string;
    metaDescription: string;
    breadcrumbLabel: string;
    title: string;
    intro: string;
    car: {
      heading: string;
      tagline: string;
      needHeading: string;
      needIntro: string;
      needLinkLabel: string; // gabarit avec {city}
      tiresHeading: string;
      tiresIntro: string;
      tiresFinlandHeading: string;
      tiresFinlandText: string;
      tiresSwedenHeading: string;
      tiresSwedenText: string;
      tiresNorwayHeading: string;
      tiresNorwayText: string;
      tiresRentalNote: string;
      vehicleHeading: string;
      vehicle2wdHeading: string;
      vehicle2wdText: string;
      vehicleAwdHeading: string;
      vehicleAwdText: string;
      transmissionHeading: string;
      transmissionText: string;
      ageHeading: string;
      ageText: string;
      safetyHeading: string;
      safetyWildlifeHeading: string;
      safetyWildlifeText: string;
      safetyFuelHeading: string;
      safetyFuelText: string;
      safetyDarknessHeading: string;
      safetyDarknessText: string;
      safetyKitHeading: string;
      safetyKitText: string;
      distancesHeading: string;
      distancesIntro: string;
      distancesFromLabel: string;
      distancesToLabel: string;
      distancesDistanceLabel: string;
      distancesTimeLabel: string;
      widgetHeading: string;
      widgetPlaceholderTitle: string;
      widgetPlaceholderText: string;
    };
    walking: {
      heading: string;
      tagline: string;
      intro: string;
      cities: string[]; // 5 entrees, alignees sur l'ordre de DESTINATIONS
    };
    publicTransport: {
      heading: string;
      tagline: string;
      intro: string;
      cities: string[]; // 5 entrees, alignees sur l'ordre de DESTINATIONS
    };
  };
};
