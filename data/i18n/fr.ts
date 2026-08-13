import type { Dict } from "./ui";

export const UI_FR: Dict = {
  site: {
    name: "Lapland Stays",
    tagline: "Voir les aurores boreales en Laponie : ou dormir, quand partir.",
  },
  nav: {
    destinations: "Destinations",
    hotels: "Hebergements",
    map: "Carte",
    faq: "FAQ",
  },
  header: {
    ctaButton: "Voir les hebergements",
    langFr: "FR",
    langEn: "EN",
    langDe: "DE",
    langNl: "NL",
    langEs: "ES",
    langIt: "IT",
  },
  hero: {
    badgeBrand: "Lapland Stays",
    badgeKp: "Indice KP en direct",
    titlePre: "Ou dormir pour voir les",
    titleHighlight: "aurores boreales",
    titlePost: "en Laponie",
    lede: "Guide independant pour choisir le bon village, la bonne fenetre de dates et le bon hebergement, igloo de verre, hotel de glace ou cabane vitree, entre septembre et mars.",
    ctaPrimary: "Comparer les hebergements",
    ctaSecondary: "Voir les 5 destinations",
    trust: [
      "Selection independante, aucune commission ne change nos recommandations",
      "Photos reelles des etablissements, pas de banque d'images generique",
      "Mis a jour pour la saison des aurores 2026-2027",
    ],
    stats: [
      { value: "5", label: "destinations couvertes" },
      { value: "60+", label: "hebergements references" },
      { value: "100%", label: "independant" },
    ],
    imageAlt: "Cabane vitree sous les aurores boreales a Rovaniemi, Laponie",
  },
  planning: {
    heading: "Trouvez votre sejour",
    cityLabel: "Ville",
    cityAll: "Toutes les destinations",
    typeLabel: "Type d'hebergement",
    typeAll: "Tous les types",
    searchButton: "Rechercher",
  },
  manifesto: {
    quote: "Nous ne vendons pas de sejours. Nous vous aidons a choisir ou dormir pour maximiser vos chances de voir les aurores, puis nous vous renvoyons vers nos partenaires de reservation.",
    attribution: "La promesse de Lapland Stays",
  },
  intro: {
    heading: "La Laponie n'est pas un seul endroit",
    paragraphLeft: "Rovaniemi, Levi, Saariselka, Kiruna, Abisko, Tromso : cinq bases tres differentes se partagent l'etiquette « voir les aurores boreales ». Chacune a son climat, son acces, son ambiance et son type d'hebergement dominant. Choisir la bonne destination compte autant que choisir la bonne date.",
    paragraphRight: "Ce guide compare les destinations et les hebergements sans essayer de vous vendre le forfait le plus cher. Chaque fiche renvoie vers nos partenaires de reservation (Stay22, Booking, Airbnb, GetYourGuide) uniquement quand l'offre correspond vraiment a ce que vous cherchez.",
    linkLabel: "Voir notre methode",
  },
  destinationsSection: {
    heading: "Les 5 destinations",
    subheading: "Chaque ville a un profil different : acces, densite d'igloos de verre, ambiance. Comparez avant de reserver.",
    ctaLabel: "Voir les sejours",
  },
  mapSection: {
    heading: "La Laponie sur la carte",
    subheading: "Toutes les destinations couvertes par ce guide, avec les hebergements disponibles a proximite.",
  },
  hotelsSection: {
    heading: "Notre selection d'hebergements",
    subheading: "Igloos de verre, hotels de glace et cabanes vitrees choisis pour leur emplacement et leur potentiel d'observation.",
    availabilityLabel: "Disponibilite variable",
    ctaLabel: "Voir les disponibilites",
  },
  faqSection: {
    heading: "Questions frequentes",
    subheading: "Ce qu'on nous demande le plus souvent avant un sejour aurores boreales.",
    items: [
      {
        q: "Combien de temps a l'avance faut-il reserver ?",
        a: "Pour les igloos de verre et les hotels de glace les plus demandes, comptez 6 a 10 mois a l'avance, surtout pour les dates de decembre-janvier et les vacances scolaires europeennes. Les hotels classiques se reservent plus tard, 2 a 3 mois suffisent generalement.",
      },
      {
        q: "Quelle est la meilleure periode pour voir les aurores boreales ?",
        a: "La saison s'etend de septembre a avril, avec un pic de probabilite en octobre, puis en fevrier-mars, quand le ciel est souvent plus clair qu'en plein hiver. Decembre-janvier offre les nuits les plus longues mais aussi le ciel le plus souvent couvert selon les destinations.",
      },
      {
        q: "Un igloo de verre garantit-il de voir les aurores ?",
        a: "Non. Aucun hebergement, aussi bien place soit-il, ne peut garantir une observation : cela depend de l'activite solaire et de la couverture nuageuse, deux facteurs impossibles a controler. Un igloo de verre maximise simplement vos chances en vous laissant regarder le ciel depuis votre lit, sans avoir a sortir dans le froid.",
      },
      {
        q: "Quel budget prevoir ?",
        a: "Un hotel classique bien situe revient generalement entre 100 et 200 EUR la nuit en saison. Un igloo de verre ou un hotel de glace monte plutot entre 250 et 600 EUR la nuit selon la destination et le niveau de confort. Prevoyez un budget separe pour les excursions guidees si vous ne conduisez pas.",
      },
    ],
  },
  footer: {
    tagline: "Guide independant des sejours aurores boreales en Laponie et dans le Grand Nord scandinave.",
    columnDestinations: "Destinations",
    columnGuide: "Guide",
    guideHow: "Comment ca marche",
    guideFaq: "FAQ",
    guideMap: "Carte des destinations",
    columnAbout: "A propos",
    disclosureHeading: "Transparence",
    disclosure: "Lapland Stays est un site independant finance par des liens d'affiliation. Nous pouvons percevoir une commission si vous reservez via nos partenaires Stay22, Booking.com, Airbnb ou GetYourGuide, sans surcout pour vous. Ces partenariats n'influencent pas nos recommandations.",
    rights: "Tous droits reserves.",
  },
  city: {
    breadcrumbHome: "Accueil",
    quickFactsHeading: "En bref",
    whyHeading: "Pourquoi choisir cette destination",
    hotelsHeading: "Ou dormir",
    hotelsEmpty: "Nous mettons a jour notre selection pour cette destination.",
    faqHeading: "Questions frequentes",
    mapHeading: "Hebergements sur la carte",
    backToDestinations: "Toutes les destinations",
    seasonLabel: "Saison des aurores : {start} - {end}",
  },
  stay22: {
    sponsored: "Reservation partenaire",
    browse: "Voir les hebergements a {name}",
  },
};
