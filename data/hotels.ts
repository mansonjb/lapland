export type HotelType = "hotel" | "glass-igloo" | "ice-hotel" | "cabin";

export type Hotel = {
  slug: string;
  citySlug: string;
  name: string;
  type: HotelType;
  /** R2 key suffix under hotels/, i.e. hotels/<image>.jpg */
  image: string;
  priceTier: 1 | 2 | 3;
  description: {
    fr: string;
    en: string;
  };
  highlights: {
    fr: string[];
    en: string[];
  };
};

export const HOTEL_TYPE_LABEL: Record<HotelType, { fr: string; en: string }> = {
  hotel: { fr: "Hotel", en: "Hotel" },
  "glass-igloo": { fr: "Igloo de verre", en: "Glass igloo" },
  "ice-hotel": { fr: "Hotel de glace", en: "Ice hotel" },
  cabin: { fr: "Cabane / chalet", en: "Cabin / chalet" },
};

export const HOTELS: Hotel[] = [
  // --- Rovaniemi ---
  {
    slug: "arctic-treehouse-hotel",
    citySlug: "rovaniemi",
    name: "Arctic TreeHouse Hotel",
    type: "cabin",
    image: "arctic-treehouse-hotel",
    priceTier: 3,
    description: {
      fr: "Cabanes suspendues tout en verre, murs orientes au nord pour guetter les aurores depuis le lit, a deux pas du Village du Pere Noel.",
      en: "Glass-walled treehouse cabins with north-facing windows for aurora watching from bed, just outside Santa Claus Village.",
    },
    highlights: {
      fr: ["Murs vitres orientes nord", "Cuisine nordique sur place", "A 10 min de l'aeroport"],
      en: ["North-facing glass walls", "On-site Nordic kitchen", "10 min from the airport"],
    },
  },
  {
    slug: "santas-igloos-arctic-circle",
    citySlug: "rovaniemi",
    name: "Santa's Igloos Arctic Circle",
    type: "glass-igloo",
    image: "santas-igloos-arctic-circle",
    priceTier: 3,
    description: {
      fr: "Igloos de verre chauffes directement dans le Village du Pere Noel, sur le cercle polaire arctique.",
      en: "Heated glass igloos set right inside Santa Claus Village, on the Arctic Circle line.",
    },
    highlights: {
      fr: ["Sur le cercle polaire", "Igloo chauffe individuel", "Activites Pere Noel sur place"],
      en: ["Right on the Arctic Circle", "Individually heated igloo", "Santa Claus activities on-site"],
    },
  },
  {
    slug: "arctic-snowhotel-glass-igloos",
    citySlug: "rovaniemi",
    name: "Arctic SnowHotel & Glass Igloos",
    type: "ice-hotel",
    image: "arctic-snowhotel-glass-igloos",
    priceTier: 2,
    description: {
      fr: "Hotel de neige et de glace reconstruit chaque hiver, avec option igloos de verre chauffes juste a cote.",
      en: "A snow and ice hotel rebuilt from scratch every winter, with heated glass igloos right next door.",
    },
    highlights: {
      fr: ["Chambres sculptees dans la glace", "Sacs de couchage thermiques fournis", "Jacuzzi exterieur"],
      en: ["Rooms carved from ice", "Thermal sleeping bags provided", "Outdoor hot tub"],
    },
  },

  // --- Levi ---
  {
    slug: "golden-crown-levin-iglut",
    citySlug: "levi",
    name: "Golden Crown Levin Iglut",
    type: "glass-igloo",
    image: "golden-crown-levin-iglut",
    priceTier: 3,
    description: {
      fr: "Igloos de verre individuels sur la colline de Levi, vue degagee sur les pistes et le ciel.",
      en: "Standalone glass igloos on Levi's fell, with clear views over the slopes and sky.",
    },
    highlights: {
      fr: ["Vue panoramique sur la colline", "Sauna prive dans certains igloos", "A 5 min du centre de Levi"],
      en: ["Panoramic fell views", "Private sauna in some igloos", "5 min from Levi centre"],
    },
  },
  {
    slug: "break-sokos-hotel-levi",
    citySlug: "levi",
    name: "Break Sokos Hotel Levi",
    type: "hotel",
    image: "break-sokos-hotel-levi",
    priceTier: 2,
    description: {
      fr: "Grand hotel familial au coeur du village de Levi, base pratique pour skier et enchainer les excursions aurores.",
      en: "A large family hotel in the heart of Levi village, a practical base for skiing and aurora tours.",
    },
    highlights: {
      fr: ["Au centre du village", "Piscine et spa", "Adapte aux familles"],
      en: ["Village-centre location", "Pool and spa", "Family-friendly"],
    },
  },
  {
    slug: "hotel-k5-levi",
    citySlug: "levi",
    name: "Hotel K5 Levi",
    type: "hotel",
    image: "hotel-k5-levi",
    priceTier: 3,
    description: {
      fr: "Hotel design, la mieux notee du secteur, a distance de marche des remontees mecaniques.",
      en: "A design hotel, the best-rated property in the area, within walking distance of the ski lifts.",
    },
    highlights: {
      fr: ["Meilleure note du secteur", "A pied des remontees", "Restaurant reconnu sur place"],
      en: ["Best-rated in the area", "Walk to the lifts", "Well-regarded on-site restaurant"],
    },
  },

  // --- Saariselka ---
  {
    slug: "kakslauttanen-arctic-resort",
    citySlug: "saariselka",
    name: "Kakslauttanen Arctic Resort",
    type: "glass-igloo",
    image: "kakslauttanen-arctic-resort",
    priceTier: 3,
    description: {
      fr: "L'igloo de verre le plus connu de Laponie, au bord du parc national d'Urho Kekkonen.",
      en: "Lapland's best-known glass igloo resort, on the edge of Urho Kekkonen National Park.",
    },
    highlights: {
      fr: ["Le nom le plus reconnu du secteur", "Chalets et igloos de verre", "Acces direct au parc national"],
      en: ["The most recognised name in the region", "Chalets and glass igloos", "Direct access to the national park"],
    },
  },
  {
    slug: "northern-lights-village",
    citySlug: "saariselka",
    name: "Northern Lights Village",
    type: "cabin",
    image: "northern-lights-village",
    priceTier: 3,
    description: {
      fr: "Cabanes au toit entierement vitre, pensees pour observer les aurores allonge sans sortir du lit.",
      en: "Cabins with a full glass ceiling, designed for aurora watching without leaving the bed.",
    },
    highlights: {
      fr: ["Toit integralement vitre", "Sauna et restaurant sur place", "Navette depuis Ivalo"],
      en: ["Full glass ceiling", "On-site sauna and restaurant", "Shuttle from Ivalo"],
    },
  },
  {
    slug: "wilderness-hotel-saariselka",
    citySlug: "saariselka",
    // Nom affiche volontairement different du slug historique : la photo
    // scrapee reference specifiquement cette propriete, on garde ce nom.
    name: "Wilderness Hotel Muotka & Igloos",
    type: "hotel",
    image: "wilderness-hotel-saariselka",
    priceTier: 2,
    description: {
      fr: "Large eventail de formules dans la zone de Saariselka, des chambres classiques aux igloos de verre.",
      en: "A wide range of stay types in the Saariselka area, from standard rooms to glass igloos.",
    },
    highlights: {
      fr: ["Plusieurs formats d'hebergement", "Restaurant lodge sur place", "Proche des pistes de ski de fond"],
      en: ["Several room formats on one site", "On-site lodge restaurant", "Close to cross-country trails"],
    },
  },

  // --- Kiruna & Abisko ---
  {
    slug: "icehotel-kiruna",
    citySlug: "kiruna-abisko",
    name: "Icehotel Kiruna",
    type: "ice-hotel",
    image: "icehotel-kiruna",
    priceTier: 3,
    description: {
      fr: "L'hotel de glace original, refait chaque hiver par des artistes, avec une aile chauffee toute l'annee.",
      en: "The original ice hotel, rebuilt every winter by artists, with a heated wing open year-round.",
    },
    highlights: {
      fr: ["Suites d'art sculptees a la main", "Aile chauffee disponible", "Sur la riviere Torne"],
      en: ["Hand-carved art suites", "Heated wing available", "On the Torne River"],
    },
  },
  {
    slug: "stf-abisko-turiststation",
    citySlug: "kiruna-abisko",
    name: "STF Abisko Turiststation",
    type: "hotel",
    image: "stf-abisko-turiststation",
    priceTier: 1,
    description: {
      fr: "A 5 minutes de l'Aurora Sky Station, l'option la plus pratique et la plus accessible pour voir des aurores a Abisko.",
      en: "5 minutes from the Aurora Sky Station, the most practical and accessible base for seeing the lights in Abisko.",
    },
    highlights: {
      fr: ["A 5 min de l'Aurora Sky Station", "Ciel parmi les plus clairs de Scandinavie", "Formules auberge et chambres privees"],
      en: ["5 min from the Aurora Sky Station", "Some of Scandinavia's clearest skies", "Hostel and private-room options"],
    },
  },

  // --- Tromso ---
  {
    slug: "clarion-collection-hotel-aurora",
    citySlug: "tromso",
    // TODO: verifier le nom exact suite a un possible rebranding Nordic Choice avant lancement public
    // (la photo scrapee reference "Home Hotel Aurora").
    name: "Clarion Collection Hotel Aurora",
    type: "hotel",
    image: "clarion-collection-hotel-aurora",
    priceTier: 2,
    description: {
      fr: "Jacuzzi sur le toit avec vue sur le fjord, en plein centre-ville de Tromso.",
      en: "Rooftop hot tub with fjord views, right in downtown Tromso.",
    },
    highlights: {
      fr: ["Jacuzzi sur le toit", "Centre-ville de Tromso", "Repas du soir inclus"],
      en: ["Rooftop hot tub", "Downtown Tromso", "Evening meal included"],
    },
  },
  {
    slug: "clarion-hotel-the-edge",
    citySlug: "tromso",
    name: "Clarion Hotel The Edge",
    type: "hotel",
    image: "clarion-hotel-the-edge",
    priceTier: 2,
    description: {
      fr: "Sky bar en hauteur et pont vitre sur le front de mer, a distance de marche du centre.",
      en: "A rooftop sky bar and a glass-walled bridge over the waterfront, within walking distance of the centre.",
    },
    highlights: {
      fr: ["Sky bar avec vue", "Pont vitre sur le fjord", "A pied du centre historique"],
      en: ["Sky bar with a view", "Glass bridge over the fjord", "Walk to the old town"],
    },
  },
  {
    slug: "the-dock-6939-by-scandic",
    citySlug: "tromso",
    name: "The Dock 69°39 by Scandic",
    type: "hotel",
    image: "the-dock-6939-by-scandic",
    priceTier: 2,
    description: {
      fr: "Grand hotel front de mer de 305 chambres, base solide pour enchainer excursions aurores et fjords.",
      en: "A large 305-room waterfront hotel, a solid base for stacking aurora and fjord excursions.",
    },
    highlights: {
      fr: ["305 chambres, front de mer", "Depart facile pour les excursions", "Restaurant et bar sur place"],
      en: ["305 rooms, on the waterfront", "Easy pickup for excursions", "On-site restaurant and bar"],
    },
  },
];

export function getHotelsByCity(citySlug: string): Hotel[] {
  return HOTELS.filter((h) => h.citySlug === citySlug);
}

export function getHotel(slug: string): Hotel | undefined {
  return HOTELS.find((h) => h.slug === slug);
}
