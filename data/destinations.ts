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
  /** Short "recommended stay length" badge shown on destination cards. */
  recommendedStay: {
    fr: string;
    en: string;
  };
  tags: {
    fr: string[];
    en: string[];
  };
  description: {
    fr: string;
    en: string;
  };
  whyVisit: {
    fr: string;
    en: string;
  };
  quickFacts: {
    fr: string[];
    en: string[];
  };
  faq: {
    question: { fr: string; en: string };
    answer: { fr: string; en: string };
  }[];
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
    recommendedStay: { fr: "2-3 nuits", en: "2-3 nights" },
    tags: {
      fr: ["Village du Pere Noel", "Vols directs", "Igloos de verre"],
      en: ["Santa Claus Village", "Direct flights", "Glass igloos"],
    },
    description: {
      fr: "La porte d'entree la plus simple de la Laponie finlandaise, sur le cercle polaire arctique, avec vols directs depuis plusieurs capitales europeennes.",
      en: "The easiest gateway into Finnish Lapland, sitting right on the Arctic Circle, with direct flights from several European capitals.",
    },
    whyVisit: {
      fr: "Rovaniemi combine acces facile (aeroport a 10 minutes du centre) et forte densite d'hebergements aurores : igloos de verre, cabanes vitrees et hotels de neige se trouvent tous a moins de 20 minutes du centre-ville. C'est la meilleure base pour un premier sejour en Laponie, surtout si vous voyagez avec des enfants ou voulez combiner Village du Pere Noel et chasse aux aurores.",
      en: "Rovaniemi pairs easy access (the airport is 10 minutes from downtown) with the highest density of aurora-friendly stays in the region: glass igloos, glazed cabins and snow hotels all sit within 20 minutes of the centre. It is the strongest base for a first Lapland trip, especially with kids or if you want to combine Santa Claus Village with aurora hunting.",
    },
    quickFacts: {
      fr: ["Aeroport a 10 min du centre", "Sur le cercle polaire arctique", "Vols directs depuis Paris, Londres, Bruxelles en saison"],
      en: ["Airport 10 min from the centre", "Sits on the Arctic Circle", "Direct seasonal flights from Paris, London, Brussels"],
    },
    faq: [
      {
        question: { fr: "Faut-il louer une voiture a Rovaniemi ?", en: "Do I need to rent a car in Rovaniemi?" },
        answer: {
          fr: "Pas indispensable pour un premier sejour : la plupart des hebergements proposent des navettes depuis l'aeroport et des excursions aurores organisees. Une voiture est utile si vous voulez explorer par vous-meme au-dela du centre.",
          en: "Not essential for a first trip: most stays run airport shuttles and organised aurora tours. A car helps if you want to explore beyond the centre on your own schedule.",
        },
      },
      {
        question: { fr: "Rovaniemi convient-il aux familles ?", en: "Is Rovaniemi good for families?" },
        answer: {
          fr: "Oui, c'est la destination la plus adaptee aux familles de la region grace au Village du Pere Noel et aux activites encadrees a proximite immediate des hebergements.",
          en: "Yes, it is the most family-friendly destination in the region thanks to Santa Claus Village and guided activities right next to most stays.",
        },
      },
    ],
  },
  {
    slug: "levi",
    address: "Levi, Kittila, Finland",
    lat: 67.8054,
    lng: 24.8017,
    label: { fr: "Levi", en: "Levi" },
    country: "Finland",
    season: AURORA_SEASON,
    recommendedStay: { fr: "3-4 nuits", en: "3-4 nights" },
    tags: {
      fr: ["Station de ski", "Vie de village", "Familles et groupes"],
      en: ["Ski resort", "Village life", "Families and groups"],
    },
    description: {
      fr: "La plus grande station de ski de Finlande, avec un village compact ou pistes, restaurants et igloos de verre se cotoient a pied.",
      en: "Finland's largest ski resort, with a compact village where slopes, restaurants and glass igloos all sit within walking distance.",
    },
    whyVisit: {
      fr: "Levi convient a ceux qui veulent alterner ski et chasse aux aurores sans changer de base. Le village est dense et pietonnier, avec un vrai choix de restaurants et de bars le soir, ce qui en fait la destination la plus vivante de la region pour les groupes d'amis comme pour les familles qui skient.",
      en: "Levi suits travellers who want to alternate skiing and aurora hunting without switching base. The village is compact and walkable, with a real choice of restaurants and bars in the evening, making it the liveliest destination in the region for groups of friends and skiing families alike.",
    },
    quickFacts: {
      fr: ["Plus grande station de ski de Finlande", "Village pietonnier compact", "Aeroport de Kittila a 15 min"],
      en: ["Finland's largest ski resort", "Compact, walkable village", "Kittila airport 15 min away"],
    },
    faq: [
      {
        question: { fr: "Peut-on skier et voir des aurores le meme sejour a Levi ?", en: "Can I ski and see the northern lights on the same trip in Levi?" },
        answer: {
          fr: "Oui, c'est l'atout principal de Levi : les domaines skiables ferment en fin d'apres-midi, ce qui laisse la soiree libre pour les excursions ou l'observation depuis un igloo de verre.",
          en: "Yes, that is Levi's main draw: the slopes close in the late afternoon, leaving the evening free for tours or watching from a glass igloo.",
        },
      },
      {
        question: { fr: "Quand est-ce que la saison de ski et la saison des aurores se chevauchent ?", en: "When do ski season and aurora season overlap?" },
        answer: {
          fr: "De novembre a avril, avec un pic de conditions (neige garantie, nuits longues) entre janvier et mars.",
          en: "From November to April, with peak conditions (guaranteed snow, long dark nights) between January and March.",
        },
      },
    ],
  },
  {
    slug: "saariselka",
    address: "Saariselka, Inari, Finland",
    lat: 68.4189,
    lng: 27.4197,
    label: { fr: "Saariselka", en: "Saariselka" },
    country: "Finland",
    season: AURORA_SEASON,
    recommendedStay: { fr: "3-4 nuits", en: "3-4 nights" },
    tags: {
      fr: ["Parc national", "Le plus au nord", "Igloos de verre"],
      en: ["National park", "Furthest north", "Glass igloos"],
    },
    description: {
      fr: "Le village le plus au nord de la Laponie finlandaise accessible facilement, aux portes du parc national d'Urho Kekkonen.",
      en: "The furthest-north easily reachable village in Finnish Lapland, right on the edge of Urho Kekkonen National Park.",
    },
    whyVisit: {
      fr: "Plus on monte au nord, plus les nuits sont sombres et longues en hiver, ce qui joue en faveur de Saariselka pour l'observation des aurores. C'est aussi la ou l'on trouve le plus fort choix d'igloos de verre et de cabanes vitrees de toute la Laponie, avec un acces direct a un vrai parc national pour la randonnee en raquettes.",
      en: "The further north you go, the darker and longer winter nights get, which works in Saariselka's favour for aurora watching. It also has the widest concentration of glass igloos and glazed cabins in all of Lapland, with direct access to a genuine national park for snowshoe hikes.",
    },
    quickFacts: {
      fr: ["Aux portes d'un parc national", "Plus forte densite d'igloos de verre", "Aeroport d'Ivalo a 30 min"],
      en: ["On the edge of a national park", "Highest concentration of glass igloos", "Ivalo airport 30 min away"],
    },
    faq: [
      {
        question: { fr: "Saariselka est-il plus loin a rejoindre que Rovaniemi ?", en: "Is Saariselka harder to reach than Rovaniemi?" },
        answer: {
          fr: "Un peu : on y arrive par l'aeroport d'Ivalo (30 min de route) plutot que directement depuis l'Europe. En echange, les nuits y sont plus sombres et le paysage plus sauvage.",
          en: "Slightly: you arrive via Ivalo airport (a 30-minute drive) rather than direct from Europe. In exchange, nights are darker and the landscape wilder.",
        },
      },
      {
        question: { fr: "Y a-t-il des activites hors observation des aurores ?", en: "Are there things to do besides aurora watching?" },
        answer: {
          fr: "Oui : raquettes et ski de fond dans le parc national d'Urho Kekkonen, safaris en traineau a chiens et rennes, et sauna en pleine nature.",
          en: "Yes: snowshoeing and cross-country skiing in Urho Kekkonen National Park, husky and reindeer sled safaris, and wilderness sauna sessions.",
        },
      },
    ],
  },
  {
    slug: "kiruna-abisko",
    address: "Abisko, Kiruna, Sweden",
    lat: 68.3557,
    lng: 18.7906,
    label: { fr: "Kiruna & Abisko", en: "Kiruna & Abisko" },
    country: "Sweden",
    season: AURORA_SEASON,
    recommendedStay: { fr: "3-4 nuits", en: "3-4 nights" },
    tags: {
      fr: ["Hotel de glace original", "Ciel le plus clair", "Laponie suedoise"],
      en: ["The original ice hotel", "Clearest skies", "Swedish Lapland"],
    },
    description: {
      fr: "L'Icehotel original a Kiruna, et a une heure de route, l'Aurora Sky Station d'Abisko, reputee pour l'un des ciels les plus clairs de Scandinavie.",
      en: "The original Icehotel in Kiruna, and an hour away, Abisko's Aurora Sky Station, known for some of Scandinavia's clearest skies.",
    },
    whyVisit: {
      fr: "Abisko beneficie d'un microclimat qui degage souvent le ciel meme quand il neige partout ailleurs dans la region, ce qui en fait une reference scientifique pour la probabilite d'observation. Kiruna, a une heure de route, ajoute l'Icehotel, refait chaque annee par des artistes, une experience a part entiere meme sans aurores.",
      en: "Abisko has a microclimate that often keeps the sky clear even when it is snowing everywhere else in the region, making it a scientific reference point for aurora visibility odds. Kiruna, an hour away, adds the Icehotel, rebuilt by artists every year, an experience in its own right even without the lights.",
    },
    quickFacts: {
      fr: ["Microclimat reputee pour un ciel degage", "Aurora Sky Station a Abisko", "Icehotel original a Kiruna"],
      en: ["Microclimate known for clear skies", "Aurora Sky Station in Abisko", "The original Icehotel in Kiruna"],
    },
    faq: [
      {
        question: { fr: "Faut-il choisir entre Kiruna et Abisko ?", en: "Do I need to choose between Kiruna and Abisko?" },
        answer: {
          fr: "Non, les deux sont a environ une heure de route ou de train l'un de l'autre : beaucoup de voyageurs dorment a Kiruna et font une excursion a l'Aurora Sky Station d'Abisko, ou l'inverse.",
          en: "No, the two are about an hour apart by road or train: many travellers base themselves in Kiruna and day-trip to Abisko's Aurora Sky Station, or the other way round.",
        },
      },
      {
        question: { fr: "L'Icehotel est-il ouvert toute l'annee ?", en: "Is the Icehotel open year-round?" },
        answer: {
          fr: "L'aile permanente climatisee est ouverte toute l'annee, mais l'hotel de glace complet n'existe que de decembre a avril, reconstruit chaque hiver.",
          en: "The permanently chilled wing is open year-round, but the full ice hotel only exists from December to April, rebuilt each winter.",
        },
      },
    ],
  },
  {
    slug: "tromso",
    address: "Tromso, Norway",
    lat: 69.6492,
    lng: 18.9553,
    label: { fr: "Tromso", en: "Tromso" },
    country: "Norway",
    season: AURORA_SEASON,
    recommendedStay: { fr: "3-4 nuits", en: "3-4 nights" },
    tags: {
      fr: ["Fjords", "Vraie ville", "Excursions bateau"],
      en: ["Fjords", "Real city", "Boat excursions"],
    },
    description: {
      fr: "La grande ville du Grand Nord norvegien, entre fjords et montagnes, avec la plus forte offre d'excursions aurores organisees en bateau ou en minibus.",
      en: "The big city of Norway's far north, set between fjords and mountains, with the widest choice of organised boat and minibus aurora chases.",
    },
    whyVisit: {
      fr: "Tromso est la seule destination de cette liste qui est une vraie ville : restaurants, bars, musees et vie nocturne, en plus des aurores. La chasse aux aurores s'y organise surtout en minibus ou en bateau pour s'echapper des lumieres urbaines, ce qui rassure les voyageurs qui preferent une excursion guidee a l'attente dans un igloo isole.",
      en: "Tromso is the only destination on this list that is a real city: restaurants, bars, museums and nightlife, on top of the lights. Aurora hunting here is mostly organised via minibus or boat chases that drive away from city lights, which suits travellers who prefer a guided tour over waiting it out in a remote igloo.",
    },
    quickFacts: {
      fr: ["Vraie vie urbaine (restaurants, bars, musees)", "Excursions aurores en bateau et minibus", "Vols directs depuis Oslo toute l'annee"],
      en: ["Real city life (restaurants, bars, museums)", "Boat and minibus aurora chases", "Year-round direct flights from Oslo"],
    },
    faq: [
      {
        question: { fr: "Tromso est-il plus cher que la Laponie finlandaise ?", en: "Is Tromso more expensive than Finnish Lapland?" },
        answer: {
          fr: "En general oui, le cout de la vie norvegien est plus eleve. En echange, la ville offre plus d'options de restauration et de sorties independantes des hotels.",
          en: "Generally yes, the Norwegian cost of living runs higher. In exchange, the city offers far more dining and nightlife options independent of the hotels.",
        },
      },
      {
        question: { fr: "A-t-on besoin d'une excursion pour voir les aurores depuis Tromso ?", en: "Do I need a tour to see the lights from Tromso?" },
        answer: {
          fr: "Fortement conseille : les lumieres de la ville genent l'observation directe, donc la plupart des visiteurs reservent une excursion en bateau ou en minibus qui s'eloigne du centre.",
          en: "Strongly recommended: city lights get in the way of direct viewing, so most visitors book a boat or minibus tour that drives away from downtown.",
        },
      },
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}
