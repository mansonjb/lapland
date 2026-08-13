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
    de: string;
    nl: string;
    es: string;
    it: string;
  };
  highlights: {
    fr: string[];
    en: string[];
    de: string[];
    nl: string[];
    es: string[];
    it: string[];
  };
};

export const HOTEL_TYPE_LABEL: Record<
  HotelType,
  { fr: string; en: string; de: string; nl: string; es: string; it: string }
> = {
  hotel: { fr: "Hôtel", en: "Hotel", de: "Hotel", nl: "Hotel", es: "Hotel", it: "Hotel" },
  "glass-igloo": {
    fr: "Igloo de verre",
    en: "Glass igloo",
    de: "Glasiglu",
    nl: "Glazen iglo",
    es: "Iglu de cristal",
    it: "Iglu di vetro",
  },
  "ice-hotel": {
    fr: "Hôtel de glace",
    en: "Ice hotel",
    de: "Eishotel",
    nl: "IJshotel",
    es: "Hotel de hielo",
    it: "Hotel di ghiaccio",
  },
  cabin: {
    fr: "Cabane / chalet",
    en: "Cabin / chalet",
    de: "Hütte / Chalet",
    nl: "Hut / chalet",
    es: "Cabaña / chalet",
    it: "Baita / chalet",
  },
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
      fr: "Cabanes suspendues tout en verre, murs orientés au nord pour guetter les aurores depuis le lit, à deux pas du Village du Père Noël.",
      en: "Glass-walled treehouse cabins with north-facing windows for aurora watching from bed, just outside Santa Claus Village.",
      de: "Freistehende Baumhaus-Kabinen ganz aus Glas, mit nach Norden ausgerichteten Fenstern zur Polarlichtbeobachtung vom Bett aus, direkt neben dem Weihnachtsmanndorf.",
      nl: "Boomhut-cabines volledig van glas, met naar het noorden gerichte ramen om het noorderlicht vanuit bed te bekijken, vlak bij het Kerstman Dorp.",
      es: "Cabañas elevadas totalmente acristaladas, con ventanas orientadas al norte para observar las auroras desde la cama, justo al lado del Pueblo de Papá Noel.",
      it: "Baite sopraelevate interamente in vetro, con finestre orientate a nord per osservare le aurore dal letto, a pochi passi dal Villaggio di Babbo Natale.",
    },
    highlights: {
      fr: ["Murs vitrés orientés nord", "Cuisine nordique sur place", "À 10 min de l'aéroport"],
      en: ["North-facing glass walls", "On-site Nordic kitchen", "10 min from the airport"],
      de: ["Nach Norden ausgerichtete Glaswände", "Nordische Küche vor Ort", "10 Min vom Flughafen entfernt"],
      nl: ["Naar het noorden gerichte glazen wanden", "Noordse keuken ter plaatse", "10 min van de luchthaven"],
      es: ["Paredes de cristal orientadas al norte", "Cocina nórdica en el propio hotel", "A 10 min del aeropuerto"],
      it: ["Pareti di vetro orientate a nord", "Cucina nordica in loco", "A 10 min dall'aeroporto"],
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
      fr: "Igloos de verre chauffés directement dans le Village du Père Noël, sur le cercle polaire arctique.",
      en: "Heated glass igloos set right inside Santa Claus Village, on the Arctic Circle line.",
      de: "Beheizte Glasiglus direkt im Weihnachtsmanndorf, auf der Polarkreislinie.",
      nl: "Verwarmde glazen iglos midden in het Kerstman Dorp, op de poolcirkellijn.",
      es: "Iglus de cristal climatizados situados dentro del Pueblo de Papá Noel, sobre la línea del círculo polar ártico.",
      it: "Iglu di vetro riscaldati proprio all'interno del Villaggio di Babbo Natale, sulla linea del circolo polare artico.",
    },
    highlights: {
      fr: ["Sur le cercle polaire", "Igloo chauffé individuel", "Activités Père Noël sur place"],
      en: ["Right on the Arctic Circle", "Individually heated igloo", "Santa Claus activities on-site"],
      de: ["Direkt am Polarkreis", "Individuell beheiztes Iglu", "Weihnachtsmann-Aktivitäten vor Ort"],
      nl: ["Direct op de poolcirkel", "Individueel verwarmde iglo", "Kerstman-activiteiten ter plaatse"],
      es: ["Justo en el círculo polar ártico", "Iglu con calefacción individual", "Actividades de Papá Noel en el mismo lugar"],
      it: ["Proprio sul circolo polare artico", "Iglu con riscaldamento individuale", "Attività di Babbo Natale in loco"],
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
      fr: "Hôtel de neige et de glace reconstruit chaque hiver, avec option igloos de verre chauffés juste à côté.",
      en: "A snow and ice hotel rebuilt from scratch every winter, with heated glass igloos right next door.",
      de: "Ein Schnee- und Eishotel, das jeden Winter komplett neu gebaut wird, mit beheizten Glasiglus direkt nebenan.",
      nl: "Een sneeuw- en ijshotel dat elke winter volledig opnieuw wordt gebouwd, met verwarmde glazen iglos vlak ernaast.",
      es: "Un hotel de nieve y hielo reconstruido desde cero cada invierno, con iglus de cristal climatizados justo al lado.",
      it: "Un hotel di neve e ghiaccio ricostruito da zero ogni inverno, con iglu di vetro riscaldati proprio accanto.",
    },
    highlights: {
      fr: ["Chambres sculptées dans la glace", "Sacs de couchage thermiques fournis", "Jacuzzi extérieur"],
      en: ["Rooms carved from ice", "Thermal sleeping bags provided", "Outdoor hot tub"],
      de: ["Aus Eis geschnitzte Zimmer", "Thermoschlafsäcke inklusive", "Außen-Whirlpool"],
      nl: ["Kamers gebeeldhouwd uit ijs", "Thermische slaapzakken inbegrepen", "Buiten jacuzzi"],
      es: ["Habitaciones talladas en hielo", "Sacos de dormir térmicos incluidos", "Jacuzzi exterior"],
      it: ["Camere scolpite nel ghiaccio", "Sacchi a pelo termici inclusi", "Vasca idromassaggio esterna"],
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
      fr: "Igloos de verre individuels sur la colline de Levi, vue dégagée sur les pistes et le ciel.",
      en: "Standalone glass igloos on Levi's fell, with clear views over the slopes and sky.",
      de: "Freistehende Glasiglus auf dem Fjell von Levi, mit freiem Blick auf die Pisten und den Himmel.",
      nl: "Vrijstaande glazen iglos op de fjell van Levi, met vrij uitzicht over de pistes en de hemel.",
      es: "Iglus de cristal independientes en la colina de Levi, con vistas despejadas a las pistas y al cielo.",
      it: "Iglu di vetro indipendenti sulla collina di Levi, con vista libera sulle piste e sul cielo.",
    },
    highlights: {
      fr: ["Vue panoramique sur la colline", "Sauna privé dans certains igloos", "À 5 min du centre de Levi"],
      en: ["Panoramic fell views", "Private sauna in some igloos", "5 min from Levi centre"],
      de: ["Panoramablick auf das Fjell", "Private Sauna in manchen Iglus", "5 Min vom Zentrum von Levi"],
      nl: ["Panoramisch uitzicht over de fjell", "Privésauna in sommige iglos", "5 min van het centrum van Levi"],
      es: ["Vistas panorámicas de la colina", "Sauna privada en algunos iglus", "A 5 min del centro de Levi"],
      it: ["Vista panoramica sulla collina", "Sauna privata in alcuni iglu", "A 5 min dal centro di Levi"],
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
      fr: "Grand hôtel familial au cœur du village de Levi, base pratique pour skier et enchaîner les excursions aurores.",
      en: "A large family hotel in the heart of Levi village, a practical base for skiing and aurora tours.",
      de: "Ein großes Familienhotel im Herzen des Dorfes Levi, eine praktische Basis zum Skifahren und für Polarlicht-Touren.",
      nl: "Een groot familiehotel in het hart van het dorp Levi, een praktische uitvalsbasis om te skien en noorderlichttochten te maken.",
      es: "Un gran hotel familiar en el corazón del pueblo de Levi, una base práctica para esquiar y encadenar excursiones de auroras.",
      it: "Un grande hotel per famiglie nel cuore del villaggio di Levi, una base pratica per sciare e per le escursioni alle aurore.",
    },
    highlights: {
      fr: ["Au centre du village", "Piscine et spa", "Adapté aux familles"],
      en: ["Village-centre location", "Pool and spa", "Family-friendly"],
      de: ["Lage im Dorfzentrum", "Pool und Spa", "Familienfreundlich"],
      nl: ["Ligging in het dorpscentrum", "Zwembad en spa", "Geschikt voor gezinnen"],
      es: ["Ubicación en el centro del pueblo", "Piscina y spa", "Apto para familias"],
      it: ["Posizione nel centro del villaggio", "Piscina e spa", "Adatto alle famiglie"],
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
      fr: "Hôtel design, le mieux noté du secteur, à distance de marche des remontées mécaniques.",
      en: "A design hotel, the best-rated property in the area, within walking distance of the ski lifts.",
      de: "Ein Designhotel, die bestbewertete Unterkunft der Gegend, in Gehweite zu den Skiliften.",
      nl: "Een designhotel, de best beoordeelde accommodatie in de omgeving, op loopafstand van de skiliften.",
      es: "Un hotel de diseño, el mejor valorado de la zona, a poca distancia a pie de los remontes.",
      it: "Un hotel di design, la struttura meglio valutata della zona, a pochi passi dagli impianti di risalita.",
    },
    highlights: {
      fr: ["Meilleure note du secteur", "À pied des remontées", "Restaurant reconnu sur place"],
      en: ["Best-rated in the area", "Walk to the lifts", "Well-regarded on-site restaurant"],
      de: ["Bestbewertet in der Gegend", "Zu Fuß zu den Liften", "Angesehenes Restaurant vor Ort"],
      nl: ["Best beoordeeld in de omgeving", "Loopafstand tot de liften", "Gerenommeerd restaurant ter plaatse"],
      es: ["El mejor valorado de la zona", "A pie de los remontes", "Restaurante de prestigio en el hotel"],
      it: ["Il migliore valutato della zona", "A piedi dagli impianti", "Ristorante rinomato in loco"],
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
      de: "Das bekannteste Glasiglu-Resort Lapplands, am Rand des Urho-Kekkonen-Nationalparks.",
      nl: "Het bekendste glazen iglo-resort van Lapland, aan de rand van het Urho Kekkonen Nationaal Park.",
      es: "El complejo de iglus de cristal más conocido de Laponia, al borde del Parque Nacional de Urho Kekkonen.",
      it: "Il resort di iglu di vetro più famoso della Lapponia, ai margini del Parco Nazionale di Urho Kekkonen.",
    },
    highlights: {
      fr: ["Le nom le plus reconnu du secteur", "Chalets et igloos de verre", "Accès direct au parc national"],
      en: ["The most recognised name in the region", "Chalets and glass igloos", "Direct access to the national park"],
      de: ["Der bekannteste Name der Region", "Chalets und Glasiglus", "Direkter Zugang zum Nationalpark"],
      nl: ["De meest bekende naam in de regio", "Chalets en glazen iglos", "Directe toegang tot het nationaal park"],
      es: ["El nombre más reconocido de la región", "Chalets e iglus de cristal", "Acceso directo al parque nacional"],
      it: ["Il nome più riconosciuto della regione", "Chalet e iglu di vetro", "Accesso diretto al parco nazionale"],
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
      fr: "Cabanes au toit entièrement vitré, pensées pour observer les aurores allongé sans sortir du lit.",
      en: "Cabins with a full glass ceiling, designed for aurora watching without leaving the bed.",
      de: "Hütten mit komplett verglastem Dach, konzipiert für die Polarlichtbeobachtung, ohne das Bett zu verlassen.",
      nl: "Hutten met een volledig glazen dak, ontworpen om het noorderlicht te bekijken zonder het bed te verlaten.",
      es: "Cabañas con techo totalmente acristalado, pensadas para observar las auroras sin salir de la cama.",
      it: "Baite con soffitto interamente in vetro, pensate per osservare le aurore senza uscire dal letto.",
    },
    highlights: {
      fr: ["Toit intégralement vitré", "Sauna et restaurant sur place", "Navette depuis Ivalo"],
      en: ["Full glass ceiling", "On-site sauna and restaurant", "Shuttle from Ivalo"],
      de: ["Vollständig verglastes Dach", "Sauna und Restaurant vor Ort", "Shuttle ab Ivalo"],
      nl: ["Volledig glazen dak", "Sauna en restaurant ter plaatse", "Shuttle vanaf Ivalo"],
      es: ["Techo totalmente acristalado", "Sauna y restaurante en el mismo lugar", "Traslado desde Ivalo"],
      it: ["Soffitto interamente vetrato", "Sauna e ristorante in loco", "Navetta da Ivalo"],
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
      fr: "Large éventail de formules dans la zone de Saariselkä, des chambres classiques aux igloos de verre.",
      en: "A wide range of stay types in the Saariselka area, from standard rooms to glass igloos.",
      de: "Ein breites Angebot an Unterkunftsarten im Gebiet von Saariselkä, von Standardzimmern bis zu Glasiglus.",
      nl: "Een breed scala aan verblijfsopties in het gebied van Saariselkä, van standaardkamers tot glazen iglos.",
      es: "Una amplia variedad de tipos de alojamiento en la zona de Saariselkä, desde habitaciones clásicas hasta iglus de cristal.",
      it: "Un'ampia gamma di tipologie di soggiorno nella zona di Saariselkä, dalle camere standard agli iglu di vetro.",
    },
    highlights: {
      fr: ["Plusieurs formats d'hébergement", "Restaurant lodge sur place", "Proche des pistes de ski de fond"],
      en: ["Several room formats on one site", "On-site lodge restaurant", "Close to cross-country trails"],
      de: ["Mehrere Zimmerformate an einem Ort", "Lodge-Restaurant vor Ort", "Nahe an Langlaufloipen"],
      nl: ["Meerdere kamertypes op een locatie", "Lodge-restaurant ter plaatse", "Dicht bij langlaufpistes"],
      es: ["Varios formatos de habitación en un mismo sitio", "Restaurante lodge en el hotel", "Cerca de las pistas de esquí de fondo"],
      it: ["Diverse tipologie di camere in un unico sito", "Ristorante lodge in loco", "Vicino alle piste di sci di fondo"],
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
      fr: "L'hôtel de glace original, refait chaque hiver par des artistes, avec une aile chauffée toute l'année.",
      en: "The original ice hotel, rebuilt every winter by artists, with a heated wing open year-round.",
      de: "Das originale Eishotel, jeden Winter von Künstlern neu errichtet, mit einem ganzjährig beheizten Flügel.",
      nl: "Het originele ijshotel, elke winter opnieuw opgebouwd door kunstenaars, met een het hele jaar verwarmde vleugel.",
      es: "El hotel de hielo original, reconstruido cada invierno por artistas, con un ala climatizada abierta todo el año.",
      it: "L'hotel di ghiaccio originale, ricostruito ogni inverno da artisti, con un'ala riscaldata aperta tutto l'anno.",
    },
    highlights: {
      fr: ["Suites d'art sculptées à la main", "Aile chauffée disponible", "Sur la rivière Torne"],
      en: ["Hand-carved art suites", "Heated wing available", "On the Torne River"],
      de: ["Handgeschnitzte Kunst-Suiten", "Beheizter Flügel verfügbar", "Am Fluss Torne"],
      nl: ["Handgesneden kunst-suites", "Verwarmde vleugel beschikbaar", "Aan de rivier de Torne"],
      es: ["Suites artísticas talladas a mano", "Ala climatizada disponible", "A orillas del río Torne"],
      it: ["Suite artistiche scolpite a mano", "Ala riscaldata disponibile", "Sul fiume Torne"],
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
      fr: "À 5 minutes de l'Aurora Sky Station, l'option la plus pratique et la plus accessible pour voir des aurores à Abisko.",
      en: "5 minutes from the Aurora Sky Station, the most practical and accessible base for seeing the lights in Abisko.",
      de: "5 Minuten von der Aurora Sky Station entfernt, die praktischste und zugänglichste Basis, um Polarlichter in Abisko zu sehen.",
      nl: "5 minuten van het Aurora Sky Station, de meest praktische en toegankelijke uitvalsbasis om het noorderlicht in Abisko te zien.",
      es: "A 5 minutos de la Aurora Sky Station, la opción más práctica y accesible para ver auroras en Abisko.",
      it: "A 5 minuti dall'Aurora Sky Station, l'opzione più pratica e accessibile per vedere le aurore ad Abisko.",
    },
    highlights: {
      fr: ["À 5 min de l'Aurora Sky Station", "Ciel parmi les plus clairs de Scandinavie", "Formules auberge et chambres privées"],
      en: ["5 min from the Aurora Sky Station", "Some of Scandinavia's clearest skies", "Hostel and private-room options"],
      de: ["5 Min von der Aurora Sky Station", "Einer der klarsten Himmel Skandinaviens", "Hostel- und Privatzimmer-Optionen"],
      nl: ["5 min van het Aurora Sky Station", "Een van de helderste luchten van Scandinavië", "Hostel- en privékameropties"],
      es: ["A 5 min de la Aurora Sky Station", "Uno de los cielos más despejados de Escandinavia", "Opciones de albergue y habitaciones privadas"],
      it: ["A 5 min dall'Aurora Sky Station", "Uno dei cieli più limpidi della Scandinavia", "Opzioni ostello e camere private"],
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
      fr: "Jacuzzi sur le toit avec vue sur le fjord, en plein centre-ville de Tromsø.",
      en: "Rooftop hot tub with fjord views, right in downtown Tromso.",
      de: "Whirlpool auf dem Dach mit Blick auf den Fjord, mitten im Zentrum von Tromsø.",
      nl: "Jacuzzi op het dak met uitzicht op de fjord, midden in het centrum van Tromsø.",
      es: "Jacuzzi en la azotea con vistas al fiordo, en pleno centro de Tromsø.",
      it: "Vasca idromassaggio sul tetto con vista sul fiordo, nel pieno centro di Tromsø.",
    },
    highlights: {
      fr: ["Jacuzzi sur le toit", "Centre-ville de Tromsø", "Repas du soir inclus"],
      en: ["Rooftop hot tub", "Downtown Tromso", "Evening meal included"],
      de: ["Whirlpool auf dem Dach", "Zentrum von Tromsø", "Abendessen inklusive"],
      nl: ["Jacuzzi op het dak", "Centrum van Tromsø", "Avondmaaltijd inbegrepen"],
      es: ["Jacuzzi en la azotea", "Centro de Tromsø", "Cena incluida"],
      it: ["Vasca idromassaggio sul tetto", "Centro di Tromsø", "Cena inclusa"],
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
      fr: "Sky bar en hauteur et pont vitré sur le front de mer, à distance de marche du centre.",
      en: "A rooftop sky bar and a glass-walled bridge over the waterfront, within walking distance of the centre.",
      de: "Eine Sky Bar auf dem Dach und eine verglaste Brücke über die Uferpromenade, in Gehweite zum Zentrum.",
      nl: "Een sky bar op het dak en een glazen brug over de waterkant, op loopafstand van het centrum.",
      es: "Un sky bar en la azotea y un puente acristalado sobre el paseo marítimo, a poca distancia a pie del centro.",
      it: "Uno sky bar sul tetto e un ponte vetrato sul lungomare, a pochi passi dal centro.",
    },
    highlights: {
      fr: ["Sky bar avec vue", "Pont vitré sur le fjord", "À pied du centre historique"],
      en: ["Sky bar with a view", "Glass bridge over the fjord", "Walk to the old town"],
      de: ["Sky Bar mit Aussicht", "Verglaste Brücke über den Fjord", "Zu Fuß zur Altstadt"],
      nl: ["Sky bar met uitzicht", "Glazen brug over de fjord", "Loopafstand tot de oude stad"],
      es: ["Sky bar con vistas", "Puente acristalado sobre el fiordo", "A pie del casco antiguo"],
      it: ["Sky bar panoramico", "Ponte vetrato sul fiordo", "A piedi dal centro storico"],
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
      fr: "Grand hôtel front de mer de 305 chambres, base solide pour enchaîner excursions aurores et fjords.",
      en: "A large 305-room waterfront hotel, a solid base for stacking aurora and fjord excursions.",
      de: "Ein großes Hotel mit 305 Zimmern direkt am Wasser, eine solide Basis für Polarlicht- und Fjord-Ausflüge.",
      nl: "Een groot hotel met 305 kamers aan het water, een solide uitvalsbasis om noorderlicht- en fjordtochten te combineren.",
      es: "Un gran hotel de 305 habitaciones frente al mar, una base sólida para encadenar excursiones de auroras y fiordos.",
      it: "Un grande hotel fronte mare con 305 camere, una base solida per alternare escursioni alle aurore e ai fiordi.",
    },
    highlights: {
      fr: ["305 chambres, front de mer", "Départ facile pour les excursions", "Restaurant et bar sur place"],
      en: ["305 rooms, on the waterfront", "Easy pickup for excursions", "On-site restaurant and bar"],
      de: ["305 Zimmer, direkt am Wasser", "Einfache Abholung für Ausflüge", "Restaurant und Bar vor Ort"],
      nl: ["305 kamers aan het water", "Makkelijke ophaalservice voor excursies", "Restaurant en bar ter plaatse"],
      es: ["305 habitaciones frente al mar", "Recogida fácil para las excursiones", "Restaurante y bar en el hotel"],
      it: ["305 camere fronte mare", "Ritiro facile per le escursioni", "Ristorante e bar in loco"],
    },
  },
];

export function getHotelsByCity(citySlug: string): Hotel[] {
  return HOTELS.filter((h) => h.citySlug === citySlug);
}

export function getHotel(slug: string): Hotel | undefined {
  return HOTELS.find((h) => h.slug === slug);
}
