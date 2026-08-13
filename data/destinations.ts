export type Destination = {
  slug: string;
  address: string;
  lat: number;
  lng: number;
  label: {
    fr: string;
    en: string;
    de: string;
    nl: string;
    es: string;
    it: string;
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
    de: string;
    nl: string;
    es: string;
    it: string;
  };
  tags: {
    fr: string[];
    en: string[];
    de: string[];
    nl: string[];
    es: string[];
    it: string[];
  };
  description: {
    fr: string;
    en: string;
    de: string;
    nl: string;
    es: string;
    it: string;
  };
  whyVisit: {
    fr: string;
    en: string;
    de: string;
    nl: string;
    es: string;
    it: string;
  };
  quickFacts: {
    fr: string[];
    en: string[];
    de: string[];
    nl: string[];
    es: string[];
    it: string[];
  };
  faq: {
    question: { fr: string; en: string; de: string; nl: string; es: string; it: string };
    answer: { fr: string; en: string; de: string; nl: string; es: string; it: string };
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
    label: {
      fr: "Rovaniemi",
      en: "Rovaniemi",
      de: "Rovaniemi",
      nl: "Rovaniemi",
      es: "Rovaniemi",
      it: "Rovaniemi",
    },
    country: "Finland",
    season: AURORA_SEASON,
    recommendedStay: {
      fr: "2-3 nuits",
      en: "2-3 nights",
      de: "2-3 Naechte",
      nl: "2-3 nachten",
      es: "2-3 noches",
      it: "2-3 notti",
    },
    tags: {
      fr: ["Village du Pere Noel", "Vols directs", "Igloos de verre"],
      en: ["Santa Claus Village", "Direct flights", "Glass igloos"],
      de: ["Weihnachtsmanndorf", "Direktfluege", "Glasiglus"],
      nl: ["Kerstman Dorp", "Directe vluchten", "Glazen iglos"],
      es: ["Pueblo de Papa Noel", "Vuelos directos", "Iglus de cristal"],
      it: ["Villaggio di Babbo Natale", "Voli diretti", "Iglu di vetro"],
    },
    description: {
      fr: "La porte d'entree la plus simple de la Laponie finlandaise, sur le cercle polaire arctique, avec vols directs depuis plusieurs capitales europeennes.",
      en: "The easiest gateway into Finnish Lapland, sitting right on the Arctic Circle, with direct flights from several European capitals.",
      de: "Der einfachste Zugang zum finnischen Lappland, direkt am Polarkreis, mit Direktfluegen von mehreren europaeischen Hauptstaedten.",
      nl: "De makkelijkste toegangspoort tot Fins Lapland, direct op de poolcirkel, met directe vluchten vanuit meerdere Europese hoofdsteden.",
      es: "La puerta de entrada mas sencilla a la Laponia finlandesa, justo en el circulo polar artico, con vuelos directos desde varias capitales europeas.",
      it: "La porta d'accesso piu semplice alla Lapponia finlandese, proprio sul circolo polare artico, con voli diretti da diverse capitali europee.",
    },
    whyVisit: {
      fr: "Rovaniemi combine acces facile (aeroport a 10 minutes du centre) et forte densite d'hebergements aurores : igloos de verre, cabanes vitrees et hotels de neige se trouvent tous a moins de 20 minutes du centre-ville. C'est la meilleure base pour un premier sejour en Laponie, surtout si vous voyagez avec des enfants ou voulez combiner Village du Pere Noel et chasse aux aurores.",
      en: "Rovaniemi pairs easy access (the airport is 10 minutes from downtown) with the highest density of aurora-friendly stays in the region: glass igloos, glazed cabins and snow hotels all sit within 20 minutes of the centre. It is the strongest base for a first Lapland trip, especially with kids or if you want to combine Santa Claus Village with aurora hunting.",
      de: "Rovaniemi verbindet einfachen Zugang (der Flughafen liegt 10 Minuten vom Zentrum entfernt) mit der hoechsten Dichte an polarlichtfreundlichen Unterkuenften der Region: Glasiglus, Glashuetten und Schneehotels liegen alle innerhalb von 20 Minuten vom Zentrum. Es ist die beste Basis fuer eine erste Lappland-Reise, besonders mit Kindern oder wenn Sie das Weihnachtsmanndorf mit der Polarlichtjagd kombinieren moechten.",
      nl: "Rovaniemi combineert gemakkelijke bereikbaarheid (de luchthaven ligt 10 minuten van het centrum) met de hoogste dichtheid aan noorderlichtvriendelijke verblijven in de regio: glazen iglos, glazen hutten en sneeuwhotels liggen allemaal binnen 20 minuten van het centrum. Het is de beste uitvalsbasis voor een eerste Lapland-reis, zeker met kinderen of als u het Kerstman Dorp wilt combineren met noorderlicht spotten.",
      es: "Rovaniemi combina un acceso facil (el aeropuerto esta a 10 minutos del centro) con la mayor densidad de alojamientos aptos para auroras de la region: iglus de cristal, cabanas acristaladas y hoteles de nieve, todos a menos de 20 minutos del centro. Es la mejor base para un primer viaje a Laponia, especialmente con ninos o si quieres combinar el Pueblo de Papa Noel con la caza de auroras.",
      it: "Rovaniemi unisce un accesso facile (l'aeroporto e a 10 minuti dal centro) alla piu alta densita di alloggi adatti alle aurore della regione: iglu di vetro, baite vetrate e hotel di neve si trovano tutti entro 20 minuti dal centro. E la base migliore per un primo viaggio in Lapponia, soprattutto con i bambini o se si vuole unire il Villaggio di Babbo Natale alla caccia alle aurore.",
    },
    quickFacts: {
      fr: ["Aeroport a 10 min du centre", "Sur le cercle polaire arctique", "Vols directs depuis Paris, Londres, Bruxelles en saison"],
      en: ["Airport 10 min from the centre", "Sits on the Arctic Circle", "Direct seasonal flights from Paris, London, Brussels"],
      de: ["Flughafen 10 Min vom Zentrum", "Liegt am Polarkreis", "Direkte Saisonfluege ab Paris, London, Bruessel"],
      nl: ["Luchthaven op 10 min van het centrum", "Ligt op de poolcirkel", "Directe seizoensvluchten vanuit Parijs, Londen, Brussel"],
      es: ["Aeropuerto a 10 min del centro", "Situado en el circulo polar artico", "Vuelos directos de temporada desde Paris, Londres, Bruselas"],
      it: ["Aeroporto a 10 min dal centro", "Si trova sul circolo polare artico", "Voli diretti stagionali da Parigi, Londra, Bruxelles"],
    },
    faq: [
      {
        question: {
          fr: "Faut-il louer une voiture a Rovaniemi ?",
          en: "Do I need to rent a car in Rovaniemi?",
          de: "Braucht man in Rovaniemi einen Mietwagen?",
          nl: "Heb ik een huurauto nodig in Rovaniemi?",
          es: "Hace falta alquilar coche en Rovaniemi?",
          it: "Serve noleggiare un'auto a Rovaniemi?",
        },
        answer: {
          fr: "Pas indispensable pour un premier sejour : la plupart des hebergements proposent des navettes depuis l'aeroport et des excursions aurores organisees. Une voiture est utile si vous voulez explorer par vous-meme au-dela du centre.",
          en: "Not essential for a first trip: most stays run airport shuttles and organised aurora tours. A car helps if you want to explore beyond the centre on your own schedule.",
          de: "Nicht unbedingt fuer eine erste Reise: Die meisten Unterkuenfte bieten Flughafentransfers und organisierte Polarlicht-Touren an. Ein Auto ist nuetzlich, wenn Sie selbststaendig ueber das Zentrum hinaus erkunden moechten.",
          nl: "Niet noodzakelijk voor een eerste reis: de meeste verblijven bieden luchthaventransfers en georganiseerde noorderlichttochten aan. Een auto is handig als u zelfstandig verder wilt verkennen buiten het centrum.",
          es: "No es imprescindible para un primer viaje: la mayoria de los alojamientos ofrecen traslados desde el aeropuerto y excursiones organizadas para ver auroras. Un coche resulta util si quieres explorar por tu cuenta mas alla del centro.",
          it: "Non indispensabile per un primo viaggio: la maggior parte degli alloggi offre navette dall'aeroporto ed escursioni organizzate per le aurore. Un'auto e utile se si vuole esplorare autonomamente oltre il centro.",
        },
      },
      {
        question: {
          fr: "Rovaniemi convient-il aux familles ?",
          en: "Is Rovaniemi good for families?",
          de: "Ist Rovaniemi gut fuer Familien geeignet?",
          nl: "Is Rovaniemi geschikt voor gezinnen?",
          es: "Es Rovaniemi adecuado para familias?",
          it: "Rovaniemi e adatta alle famiglie?",
        },
        answer: {
          fr: "Oui, c'est la destination la plus adaptee aux familles de la region grace au Village du Pere Noel et aux activites encadrees a proximite immediate des hebergements.",
          en: "Yes, it is the most family-friendly destination in the region thanks to Santa Claus Village and guided activities right next to most stays.",
          de: "Ja, es ist das familienfreundlichste Reiseziel der Region dank des Weihnachtsmanndorfs und betreuter Aktivitaeten in unmittelbarer Naehe der meisten Unterkuenfte.",
          nl: "Ja, het is de meest gezinsvriendelijke bestemming van de regio dankzij het Kerstman Dorp en begeleide activiteiten vlak bij de meeste verblijven.",
          es: "Si, es el destino mas familiar de la region gracias al Pueblo de Papa Noel y a las actividades guiadas muy cerca de la mayoria de los alojamientos.",
          it: "Si, e la destinazione piu adatta alle famiglie della regione grazie al Villaggio di Babbo Natale e alle attivita guidate proprio accanto alla maggior parte degli alloggi.",
        },
      },
    ],
  },
  {
    slug: "levi",
    address: "Levi, Kittila, Finland",
    lat: 67.8054,
    lng: 24.8017,
    label: {
      fr: "Levi",
      en: "Levi",
      de: "Levi",
      nl: "Levi",
      es: "Levi",
      it: "Levi",
    },
    country: "Finland",
    season: AURORA_SEASON,
    recommendedStay: {
      fr: "3-4 nuits",
      en: "3-4 nights",
      de: "3-4 Naechte",
      nl: "3-4 nachten",
      es: "3-4 noches",
      it: "3-4 notti",
    },
    tags: {
      fr: ["Station de ski", "Vie de village", "Familles et groupes"],
      en: ["Ski resort", "Village life", "Families and groups"],
      de: ["Skigebiet", "Dorfleben", "Familien und Gruppen"],
      nl: ["Skigebied", "Dorpsleven", "Gezinnen en groepen"],
      es: ["Estacion de esqui", "Vida de pueblo", "Familias y grupos"],
      it: ["Stazione sciistica", "Vita di paese", "Famiglie e gruppi"],
    },
    description: {
      fr: "La plus grande station de ski de Finlande, avec un village compact ou pistes, restaurants et igloos de verre se cotoient a pied.",
      en: "Finland's largest ski resort, with a compact village where slopes, restaurants and glass igloos all sit within walking distance.",
      de: "Finnlands groesstes Skigebiet, mit einem kompakten Dorf, in dem Pisten, Restaurants und Glasiglus zu Fuss erreichbar sind.",
      nl: "Het grootste skigebied van Finland, met een compact dorp waar pistes, restaurants en glazen iglos op loopafstand van elkaar liggen.",
      es: "La estacion de esqui mas grande de Finlandia, con un pueblo compacto donde las pistas, restaurantes e iglus de cristal quedan a poca distancia a pie.",
      it: "La piu grande stazione sciistica della Finlandia, con un villaggio compatto dove piste, ristoranti e iglu di vetro si trovano a pochi passi l'uno dall'altro.",
    },
    whyVisit: {
      fr: "Levi convient a ceux qui veulent alterner ski et chasse aux aurores sans changer de base. Le village est dense et pietonnier, avec un vrai choix de restaurants et de bars le soir, ce qui en fait la destination la plus vivante de la region pour les groupes d'amis comme pour les familles qui skient.",
      en: "Levi suits travellers who want to alternate skiing and aurora hunting without switching base. The village is compact and walkable, with a real choice of restaurants and bars in the evening, making it the liveliest destination in the region for groups of friends and skiing families alike.",
      de: "Levi eignet sich fuer alle, die Skifahren und Polarlichtjagd abwechseln moechten, ohne die Basis zu wechseln. Das Dorf ist kompakt und fussgaengerfreundlich, mit einer echten Auswahl an Restaurants und Bars am Abend, was es zum lebendigsten Reiseziel der Region fuer Freundesgruppen und Skifamilien gleichermassen macht.",
      nl: "Levi is geschikt voor wie skien en noorderlicht spotten wil afwisselen zonder van uitvalsbasis te wisselen. Het dorp is compact en voetgangersvriendelijk, met een echte keuze aan restaurants en bars in de avond, wat het de levendigste bestemming van de regio maakt voor groepen vrienden en skiende gezinnen.",
      es: "Levi es ideal para quienes quieren alternar esqui y caza de auroras sin cambiar de base. El pueblo es compacto y peatonal, con una autentica variedad de restaurantes y bares por la noche, lo que lo convierte en el destino mas animado de la region tanto para grupos de amigos como para familias que esquian.",
      it: "Levi e adatta a chi vuole alternare sci e caccia alle aurore senza cambiare base. Il villaggio e compatto e pedonale, con una vera scelta di ristoranti e bar la sera, il che lo rende la destinazione piu vivace della regione sia per gruppi di amici sia per famiglie che sciano.",
    },
    quickFacts: {
      fr: ["Plus grande station de ski de Finlande", "Village pietonnier compact", "Aeroport de Kittila a 15 min"],
      en: ["Finland's largest ski resort", "Compact, walkable village", "Kittila airport 15 min away"],
      de: ["Finnlands groesstes Skigebiet", "Kompaktes, fussgaengerfreundliches Dorf", "Flughafen Kittilae 15 Min entfernt"],
      nl: ["Grootste skigebied van Finland", "Compact, voetgangersvriendelijk dorp", "Luchthaven Kittila op 15 min"],
      es: ["La estacion de esqui mas grande de Finlandia", "Pueblo compacto y peatonal", "Aeropuerto de Kittila a 15 min"],
      it: ["La piu grande stazione sciistica della Finlandia", "Villaggio compatto e pedonale", "Aeroporto di Kittila a 15 min"],
    },
    faq: [
      {
        question: {
          fr: "Peut-on skier et voir des aurores le meme sejour a Levi ?",
          en: "Can I ski and see the northern lights on the same trip in Levi?",
          de: "Kann man in Levi im selben Urlaub Ski fahren und Polarlichter sehen?",
          nl: "Kan ik in Levi skien en noorderlicht zien tijdens dezelfde reis?",
          es: "Se puede esquiar y ver auroras en el mismo viaje en Levi?",
          it: "Si puo sciare e vedere le aurore nello stesso viaggio a Levi?",
        },
        answer: {
          fr: "Oui, c'est l'atout principal de Levi : les domaines skiables ferment en fin d'apres-midi, ce qui laisse la soiree libre pour les excursions ou l'observation depuis un igloo de verre.",
          en: "Yes, that is Levi's main draw: the slopes close in the late afternoon, leaving the evening free for tours or watching from a glass igloo.",
          de: "Ja, das ist der grosse Vorteil von Levi: Die Skigebiete schliessen am spaeten Nachmittag, sodass der Abend frei bleibt fuer Touren oder Beobachtungen aus einem Glasiglu.",
          nl: "Ja, dat is het grote voordeel van Levi: de skigebieden sluiten laat in de middag, waardoor de avond vrij blijft voor tochten of om vanuit een glazen iglo te kijken.",
          es: "Si, esa es la gran baza de Levi: las pistas cierran a ultima hora de la tarde, lo que deja la noche libre para excursiones u observar desde un iglu de cristal.",
          it: "Si, e questo il punto di forza di Levi: le piste chiudono nel tardo pomeriggio, lasciando la serata libera per escursioni o per l'osservazione da un iglu di vetro.",
        },
      },
      {
        question: {
          fr: "Quand est-ce que la saison de ski et la saison des aurores se chevauchent ?",
          en: "When do ski season and aurora season overlap?",
          de: "Wann ueberschneiden sich Skisaison und Polarlichtsaison?",
          nl: "Wanneer overlappen het skiseizoen en het noorderlichtseizoen?",
          es: "Cuando se solapan la temporada de esqui y la de auroras?",
          it: "Quando si sovrappongono la stagione sciistica e quella delle aurore?",
        },
        answer: {
          fr: "De novembre a avril, avec un pic de conditions (neige garantie, nuits longues) entre janvier et mars.",
          en: "From November to April, with peak conditions (guaranteed snow, long dark nights) between January and March.",
          de: "Von November bis April, mit den besten Bedingungen (garantierter Schnee, lange dunkle Naechte) zwischen Januar und Maerz.",
          nl: "Van november tot april, met de beste omstandigheden (gegarandeerde sneeuw, lange donkere nachten) tussen januari en maart.",
          es: "De noviembre a abril, con las mejores condiciones (nieve garantizada, noches largas) entre enero y marzo.",
          it: "Da novembre ad aprile, con le condizioni migliori (neve garantita, notti lunghe e buie) tra gennaio e marzo.",
        },
      },
    ],
  },
  {
    slug: "saariselka",
    address: "Saariselka, Inari, Finland",
    lat: 68.4189,
    lng: 27.4197,
    label: {
      fr: "Saariselka",
      en: "Saariselka",
      de: "Saariselka",
      nl: "Saariselka",
      es: "Saariselka",
      it: "Saariselka",
    },
    country: "Finland",
    season: AURORA_SEASON,
    recommendedStay: {
      fr: "3-4 nuits",
      en: "3-4 nights",
      de: "3-4 Naechte",
      nl: "3-4 nachten",
      es: "3-4 noches",
      it: "3-4 notti",
    },
    tags: {
      fr: ["Parc national", "Le plus au nord", "Igloos de verre"],
      en: ["National park", "Furthest north", "Glass igloos"],
      de: ["Nationalpark", "Am weitesten noerdlich", "Glasiglus"],
      nl: ["Nationaal park", "Meest noordelijk", "Glazen iglos"],
      es: ["Parque nacional", "Lo mas al norte", "Iglus de cristal"],
      it: ["Parco nazionale", "Il piu a nord", "Iglu di vetro"],
    },
    description: {
      fr: "Le village le plus au nord de la Laponie finlandaise accessible facilement, aux portes du parc national d'Urho Kekkonen.",
      en: "The furthest-north easily reachable village in Finnish Lapland, right on the edge of Urho Kekkonen National Park.",
      de: "Das am weitesten noerdlich gelegene, gut erreichbare Dorf im finnischen Lappland, direkt am Rand des Urho-Kekkonen-Nationalparks.",
      nl: "Het meest noordelijke, goed bereikbare dorp in Fins Lapland, aan de rand van het Urho Kekkonen Nationaal Park.",
      es: "El pueblo de facil acceso mas septentrional de la Laponia finlandesa, justo en el borde del Parque Nacional de Urho Kekkonen.",
      it: "Il villaggio piu a nord facilmente raggiungibile della Lapponia finlandese, proprio ai margini del Parco Nazionale di Urho Kekkonen.",
    },
    whyVisit: {
      fr: "Plus on monte au nord, plus les nuits sont sombres et longues en hiver, ce qui joue en faveur de Saariselka pour l'observation des aurores. C'est aussi la ou l'on trouve le plus fort choix d'igloos de verre et de cabanes vitrees de toute la Laponie, avec un acces direct a un vrai parc national pour la randonnee en raquettes.",
      en: "The further north you go, the darker and longer winter nights get, which works in Saariselka's favour for aurora watching. It also has the widest concentration of glass igloos and glazed cabins in all of Lapland, with direct access to a genuine national park for snowshoe hikes.",
      de: "Je weiter man nach Norden kommt, desto dunkler und laenger werden die Winternaechte, was Saariselka bei der Polarlichtbeobachtung zugutekommt. Hier findet sich auch die groesste Auswahl an Glasiglus und Glashuetten in ganz Lappland, mit direktem Zugang zu einem echten Nationalpark fuer Schneeschuhwanderungen.",
      nl: "Hoe verder je naar het noorden gaat, hoe donkerder en langer de winternachten worden, wat in het voordeel van Saariselka speelt voor het spotten van noorderlicht. Het heeft ook de hoogste concentratie glazen iglos en glazen hutten van heel Lapland, met directe toegang tot een echt nationaal park voor sneeuwschoentochten.",
      es: "Cuanto mas al norte se va, mas oscuras y largas son las noches de invierno, lo que favorece a Saariselka para la observacion de auroras. Ademas cuenta con la mayor concentracion de iglus de cristal y cabanas acristaladas de toda Laponia, con acceso directo a un autentico parque nacional para hacer rutas con raquetas de nieve.",
      it: "Piu si sale verso nord, piu le notti invernali diventano buie e lunghe, il che gioca a favore di Saariselka per l'osservazione delle aurore. Qui si trova anche la maggiore concentrazione di iglu di vetro e baite vetrate di tutta la Lapponia, con accesso diretto a un vero parco nazionale per escursioni con le racchette da neve.",
    },
    quickFacts: {
      fr: ["Aux portes d'un parc national", "Plus forte densite d'igloos de verre", "Aeroport d'Ivalo a 30 min"],
      en: ["On the edge of a national park", "Highest concentration of glass igloos", "Ivalo airport 30 min away"],
      de: ["Am Rand eines Nationalparks", "Hoechste Dichte an Glasiglus", "Flughafen Ivalo 30 Min entfernt"],
      nl: ["Aan de rand van een nationaal park", "Hoogste concentratie glazen iglos", "Luchthaven Ivalo op 30 min"],
      es: ["En el borde de un parque nacional", "Mayor concentracion de iglus de cristal", "Aeropuerto de Ivalo a 30 min"],
      it: ["Ai margini di un parco nazionale", "Massima concentrazione di iglu di vetro", "Aeroporto di Ivalo a 30 min"],
    },
    faq: [
      {
        question: {
          fr: "Saariselka est-il plus loin a rejoindre que Rovaniemi ?",
          en: "Is Saariselka harder to reach than Rovaniemi?",
          de: "Ist Saariselka schwerer zu erreichen als Rovaniemi?",
          nl: "Is Saariselka moeilijker te bereiken dan Rovaniemi?",
          es: "Es Saariselka mas dificil de alcanzar que Rovaniemi?",
          it: "Saariselka e piu difficile da raggiungere rispetto a Rovaniemi?",
        },
        answer: {
          fr: "Un peu : on y arrive par l'aeroport d'Ivalo (30 min de route) plutot que directement depuis l'Europe. En echange, les nuits y sont plus sombres et le paysage plus sauvage.",
          en: "Slightly: you arrive via Ivalo airport (a 30-minute drive) rather than direct from Europe. In exchange, nights are darker and the landscape wilder.",
          de: "Etwas: Man kommt ueber den Flughafen Ivalo an (30 Minuten Fahrt) statt direkt aus Europa. Dafuer sind die Naechte dunkler und die Landschaft wilder.",
          nl: "Een beetje: u komt aan via luchthaven Ivalo (30 minuten rijden) in plaats van rechtstreeks vanuit Europa. Daar staat tegenover dat de nachten donkerder en het landschap ruiger is.",
          es: "Un poco: se llega a traves del aeropuerto de Ivalo (30 minutos en coche) en lugar de directamente desde Europa. A cambio, las noches son mas oscuras y el paisaje mas salvaje.",
          it: "Un po': si arriva tramite l'aeroporto di Ivalo (30 minuti di auto) anziche direttamente dall'Europa. In cambio, le notti sono piu buie e il paesaggio piu selvaggio.",
        },
      },
      {
        question: {
          fr: "Y a-t-il des activites hors observation des aurores ?",
          en: "Are there things to do besides aurora watching?",
          de: "Gibt es Aktivitaeten ausser Polarlichtbeobachtung?",
          nl: "Zijn er activiteiten naast noorderlicht spotten?",
          es: "Hay actividades ademas de ver auroras?",
          it: "Ci sono attivita oltre all'osservazione delle aurore?",
        },
        answer: {
          fr: "Oui : raquettes et ski de fond dans le parc national d'Urho Kekkonen, safaris en traineau a chiens et rennes, et sauna en pleine nature.",
          en: "Yes: snowshoeing and cross-country skiing in Urho Kekkonen National Park, husky and reindeer sled safaris, and wilderness sauna sessions.",
          de: "Ja: Schneeschuhwandern und Langlauf im Urho-Kekkonen-Nationalpark, Husky- und Rentierschlittensafaris sowie Sauna in freier Natur.",
          nl: "Ja: sneeuwschoenwandelen en langlaufen in het Urho Kekkonen Nationaal Park, husky- en rendiersledesafari's, en saunasessies in de wildernis.",
          es: "Si: raquetas de nieve y esqui de fondo en el Parque Nacional de Urho Kekkonen, safaris en trineo tirado por huskies y renos, y sesiones de sauna en plena naturaleza.",
          it: "Si: escursioni con le racchette da neve e sci di fondo nel Parco Nazionale di Urho Kekkonen, safari in slitta trainata da husky e renne, e sessioni di sauna nella natura selvaggia.",
        },
      },
    ],
  },
  {
    slug: "kiruna-abisko",
    address: "Abisko, Kiruna, Sweden",
    lat: 68.3557,
    lng: 18.7906,
    label: {
      fr: "Kiruna & Abisko",
      en: "Kiruna & Abisko",
      de: "Kiruna & Abisko",
      nl: "Kiruna & Abisko",
      es: "Kiruna y Abisko",
      it: "Kiruna e Abisko",
    },
    country: "Sweden",
    season: AURORA_SEASON,
    recommendedStay: {
      fr: "3-4 nuits",
      en: "3-4 nights",
      de: "3-4 Naechte",
      nl: "3-4 nachten",
      es: "3-4 noches",
      it: "3-4 notti",
    },
    tags: {
      fr: ["Hotel de glace original", "Ciel le plus clair", "Laponie suedoise"],
      en: ["The original ice hotel", "Clearest skies", "Swedish Lapland"],
      de: ["Original-Eishotel", "Klarster Himmel", "Schwedisch Lappland"],
      nl: ["Origineel ijshotel", "Helderste luchten", "Zweeds Lapland"],
      es: ["Hotel de hielo original", "Cielos mas despejados", "Laponia sueca"],
      it: ["Hotel di ghiaccio originale", "Cieli piu limpidi", "Lapponia svedese"],
    },
    description: {
      fr: "L'Icehotel original a Kiruna, et a une heure de route, l'Aurora Sky Station d'Abisko, reputee pour l'un des ciels les plus clairs de Scandinavie.",
      en: "The original Icehotel in Kiruna, and an hour away, Abisko's Aurora Sky Station, known for some of Scandinavia's clearest skies.",
      de: "Das originale Icehotel in Kiruna und, eine Stunde entfernt, die Aurora Sky Station in Abisko, bekannt fuer einen der klarsten Himmel Skandinaviens.",
      nl: "Het originele Icehotel in Kiruna, en een uur verderop, het Aurora Sky Station van Abisko, bekend om een van de helderste luchten van Scandinavie.",
      es: "El Icehotel original en Kiruna y, a una hora en coche, la Aurora Sky Station de Abisko, conocida por tener uno de los cielos mas despejados de Escandinavia.",
      it: "L'Icehotel originale a Kiruna e, a un'ora di distanza, l'Aurora Sky Station di Abisko, nota per uno dei cieli piu limpidi della Scandinavia.",
    },
    whyVisit: {
      fr: "Abisko beneficie d'un microclimat qui degage souvent le ciel meme quand il neige partout ailleurs dans la region, ce qui en fait une reference scientifique pour la probabilite d'observation. Kiruna, a une heure de route, ajoute l'Icehotel, refait chaque annee par des artistes, une experience a part entiere meme sans aurores.",
      en: "Abisko has a microclimate that often keeps the sky clear even when it is snowing everywhere else in the region, making it a scientific reference point for aurora visibility odds. Kiruna, an hour away, adds the Icehotel, rebuilt by artists every year, an experience in its own right even without the lights.",
      de: "Abisko profitiert von einem Mikroklima, das den Himmel oft aufklart, selbst wenn es ueberall sonst in der Region schneit, was es zu einer wissenschaftlichen Referenz fuer die Sichtungswahrscheinlichkeit macht. Kiruna, eine Stunde entfernt, ergaenzt das Icehotel, jedes Jahr neu von Kuenstlern gestaltet, ein eigenstaendiges Erlebnis auch ohne Polarlichter.",
      nl: "Abisko profiteert van een microklimaat dat de lucht vaak opklaart, zelfs als het overal elders in de regio sneeuwt, wat het een wetenschappelijk referentiepunt maakt voor de kans op waarnemingen. Kiruna, een uur verderop, voegt het Icehotel toe, elk jaar opnieuw gebouwd door kunstenaars, een ervaring op zich zelfs zonder noorderlicht.",
      es: "Abisko se beneficia de un microclima que suele despejar el cielo incluso cuando nieva en el resto de la region, lo que lo convierte en una referencia cientifica para la probabilidad de observacion. Kiruna, a una hora, anade el Icehotel, reconstruido cada ano por artistas, una experiencia en si misma incluso sin auroras.",
      it: "Abisko beneficia di un microclima che spesso rasserena il cielo anche quando altrove nella regione nevica, il che la rende un punto di riferimento scientifico per la probabilita di osservazione. Kiruna, a un'ora di distanza, aggiunge l'Icehotel, ricostruito ogni anno da artisti, un'esperienza a se stante anche senza aurore.",
    },
    quickFacts: {
      fr: ["Microclimat reputee pour un ciel degage", "Aurora Sky Station a Abisko", "Icehotel original a Kiruna"],
      en: ["Microclimate known for clear skies", "Aurora Sky Station in Abisko", "The original Icehotel in Kiruna"],
      de: ["Mikroklima bekannt fuer klaren Himmel", "Aurora Sky Station in Abisko", "Original-Icehotel in Kiruna"],
      nl: ["Microklimaat bekend om heldere luchten", "Aurora Sky Station in Abisko", "Origineel Icehotel in Kiruna"],
      es: ["Microclima conocido por sus cielos despejados", "Aurora Sky Station en Abisko", "Icehotel original en Kiruna"],
      it: ["Microclima noto per i cieli limpidi", "Aurora Sky Station ad Abisko", "Icehotel originale a Kiruna"],
    },
    faq: [
      {
        question: {
          fr: "Faut-il choisir entre Kiruna et Abisko ?",
          en: "Do I need to choose between Kiruna and Abisko?",
          de: "Muss man sich zwischen Kiruna und Abisko entscheiden?",
          nl: "Moet ik kiezen tussen Kiruna en Abisko?",
          es: "Hay que elegir entre Kiruna y Abisko?",
          it: "Bisogna scegliere tra Kiruna e Abisko?",
        },
        answer: {
          fr: "Non, les deux sont a environ une heure de route ou de train l'un de l'autre : beaucoup de voyageurs dorment a Kiruna et font une excursion a l'Aurora Sky Station d'Abisko, ou l'inverse.",
          en: "No, the two are about an hour apart by road or train: many travellers base themselves in Kiruna and day-trip to Abisko's Aurora Sky Station, or the other way round.",
          de: "Nein, beide liegen etwa eine Stunde per Auto oder Zug voneinander entfernt: Viele Reisende uebernachten in Kiruna und machen einen Ausflug zur Aurora Sky Station in Abisko, oder umgekehrt.",
          nl: "Nee, ze liggen ongeveer een uur van elkaar met de auto of trein: veel reizigers verblijven in Kiruna en maken een dagtrip naar het Aurora Sky Station in Abisko, of andersom.",
          es: "No, ambos estan a una hora de distancia por carretera o tren: muchos viajeros se alojan en Kiruna y hacen una excursion de un dia a la Aurora Sky Station de Abisko, o al reves.",
          it: "No, le due localita distano circa un'ora di auto o treno l'una dall'altra: molti viaggiatori soggiornano a Kiruna e fanno un'escursione all'Aurora Sky Station di Abisko, o viceversa.",
        },
      },
      {
        question: {
          fr: "L'Icehotel est-il ouvert toute l'annee ?",
          en: "Is the Icehotel open year-round?",
          de: "Ist das Icehotel das ganze Jahr geoeffnet?",
          nl: "Is het Icehotel het hele jaar open?",
          es: "Esta el Icehotel abierto todo el ano?",
          it: "L'Icehotel e aperto tutto l'anno?",
        },
        answer: {
          fr: "L'aile permanente climatisee est ouverte toute l'annee, mais l'hotel de glace complet n'existe que de decembre a avril, reconstruit chaque hiver.",
          en: "The permanently chilled wing is open year-round, but the full ice hotel only exists from December to April, rebuilt each winter.",
          de: "Der permanent gekuehlte Fluegel ist das ganze Jahr geoeffnet, aber das komplette Eishotel gibt es nur von Dezember bis April, jeden Winter neu errichtet.",
          nl: "De permanent gekoelde vleugel is het hele jaar open, maar het volledige ijshotel bestaat alleen van december tot april en wordt elke winter opnieuw opgebouwd.",
          es: "El ala refrigerada permanente esta abierta todo el ano, pero el hotel de hielo completo solo existe de diciembre a abril, reconstruido cada invierno.",
          it: "L'ala permanente refrigerata e aperta tutto l'anno, ma l'hotel di ghiaccio completo esiste solo da dicembre ad aprile, ricostruito ogni inverno.",
        },
      },
    ],
  },
  {
    slug: "tromso",
    address: "Tromso, Norway",
    lat: 69.6492,
    lng: 18.9553,
    label: {
      fr: "Tromso",
      en: "Tromso",
      de: "Tromso",
      nl: "Tromso",
      es: "Tromso",
      it: "Tromso",
    },
    country: "Norway",
    season: AURORA_SEASON,
    recommendedStay: {
      fr: "3-4 nuits",
      en: "3-4 nights",
      de: "3-4 Naechte",
      nl: "3-4 nachten",
      es: "3-4 noches",
      it: "3-4 notti",
    },
    tags: {
      fr: ["Fjords", "Vraie ville", "Excursions bateau"],
      en: ["Fjords", "Real city", "Boat excursions"],
      de: ["Fjorde", "Echte Stadt", "Bootsausfluege"],
      nl: ["Fjorden", "Echte stad", "Boottochten"],
      es: ["Fiordos", "Ciudad de verdad", "Excursiones en barco"],
      it: ["Fiordi", "Vera citta", "Escursioni in barca"],
    },
    description: {
      fr: "La grande ville du Grand Nord norvegien, entre fjords et montagnes, avec la plus forte offre d'excursions aurores organisees en bateau ou en minibus.",
      en: "The big city of Norway's far north, set between fjords and mountains, with the widest choice of organised boat and minibus aurora chases.",
      de: "Die grosse Stadt des norwegischen hohen Nordens, zwischen Fjorden und Bergen gelegen, mit dem groessten Angebot an organisierten Polarlicht-Ausfluegen per Boot oder Kleinbus.",
      nl: "De grote stad van het Noorse hoge noorden, gelegen tussen fjorden en bergen, met het grootste aanbod aan georganiseerde noorderlichttochten per boot of minibus.",
      es: "La gran ciudad del extremo norte noruego, situada entre fiordos y montanas, con la mayor oferta de excursiones organizadas para ver auroras en barco o minibus.",
      it: "La grande citta dell'estremo nord norvegese, tra fiordi e montagne, con la piu ampia offerta di escursioni organizzate per le aurore in barca o minibus.",
    },
    whyVisit: {
      fr: "Tromso est la seule destination de cette liste qui est une vraie ville : restaurants, bars, musees et vie nocturne, en plus des aurores. La chasse aux aurores s'y organise surtout en minibus ou en bateau pour s'echapper des lumieres urbaines, ce qui rassure les voyageurs qui preferent une excursion guidee a l'attente dans un igloo isole.",
      en: "Tromso is the only destination on this list that is a real city: restaurants, bars, museums and nightlife, on top of the lights. Aurora hunting here is mostly organised via minibus or boat chases that drive away from city lights, which suits travellers who prefer a guided tour over waiting it out in a remote igloo.",
      de: "Tromso ist das einzige Reiseziel auf dieser Liste, das eine echte Stadt ist: Restaurants, Bars, Museen und Nachtleben, zusaetzlich zu den Polarlichtern. Die Polarlichtjagd wird hier meist per Kleinbus oder Boot organisiert, um den Stadtlichtern zu entkommen, was Reisende beruhigt, die eine gefuehrte Tour dem Warten in einem abgelegenen Iglu vorziehen.",
      nl: "Tromso is de enige bestemming op deze lijst die een echte stad is: restaurants, bars, musea en nachtleven, naast het noorderlicht. De jacht op noorderlicht wordt hier vooral georganiseerd per minibus of boot om aan het stadslicht te ontsnappen, wat geruststellend is voor reizigers die een begeleide tocht verkiezen boven wachten in een afgelegen iglo.",
      es: "Tromso es el unico destino de esta lista que es una ciudad de verdad: restaurantes, bares, museos y vida nocturna, ademas de las auroras. La caza de auroras aqui se organiza sobre todo en minibus o barco para alejarse de las luces urbanas, lo que tranquiliza a los viajeros que prefieren una excursion guiada antes que esperar en un iglu aislado.",
      it: "Tromso e l'unica destinazione di questo elenco che e davvero una citta: ristoranti, bar, musei e vita notturna, oltre alle aurore. La caccia alle aurore qui viene organizzata soprattutto in minibus o in barca per allontanarsi dalle luci cittadine, il che rassicura i viaggiatori che preferiscono un'escursione guidata all'attesa in un iglu isolato.",
    },
    quickFacts: {
      fr: ["Vraie vie urbaine (restaurants, bars, musees)", "Excursions aurores en bateau et minibus", "Vols directs depuis Oslo toute l'annee"],
      en: ["Real city life (restaurants, bars, museums)", "Boat and minibus aurora chases", "Year-round direct flights from Oslo"],
      de: ["Echtes Stadtleben (Restaurants, Bars, Museen)", "Polarlicht-Ausfluege per Boot und Kleinbus", "Ganzjaehrige Direktfluege ab Oslo"],
      nl: ["Echt stadsleven (restaurants, bars, musea)", "Noorderlichttochten per boot en minibus", "Het hele jaar directe vluchten vanuit Oslo"],
      es: ["Vida urbana real (restaurantes, bares, museos)", "Excursiones de auroras en barco y minibus", "Vuelos directos desde Oslo todo el ano"],
      it: ["Vera vita cittadina (ristoranti, bar, musei)", "Escursioni per le aurore in barca e minibus", "Voli diretti da Oslo tutto l'anno"],
    },
    faq: [
      {
        question: {
          fr: "Tromso est-il plus cher que la Laponie finlandaise ?",
          en: "Is Tromso more expensive than Finnish Lapland?",
          de: "Ist Tromso teurer als das finnische Lappland?",
          nl: "Is Tromso duurder dan Fins Lapland?",
          es: "Es Tromso mas caro que la Laponia finlandesa?",
          it: "Tromso e piu cara della Lapponia finlandese?",
        },
        answer: {
          fr: "En general oui, le cout de la vie norvegien est plus eleve. En echange, la ville offre plus d'options de restauration et de sorties independantes des hotels.",
          en: "Generally yes, the Norwegian cost of living runs higher. In exchange, the city offers far more dining and nightlife options independent of the hotels.",
          de: "Im Allgemeinen ja, die norwegischen Lebenshaltungskosten sind hoeher. Dafuer bietet die Stadt weit mehr Restaurant- und Ausgehmoeglichkeiten unabhaengig von den Hotels.",
          nl: "Over het algemeen wel, de Noorse kosten van levensonderhoud liggen hoger. Daar staat tegenover dat de stad veel meer eet- en uitgaansmogelijkheden biedt los van de hotels.",
          es: "En general si, el coste de vida noruego es mas alto. A cambio, la ciudad ofrece muchas mas opciones de restauracion y ocio independientes de los hoteles.",
          it: "In generale si, il costo della vita norvegese e piu alto. In cambio, la citta offre molte piu opzioni di ristorazione e svago indipendenti dagli hotel.",
        },
      },
      {
        question: {
          fr: "A-t-on besoin d'une excursion pour voir les aurores depuis Tromso ?",
          en: "Do I need a tour to see the lights from Tromso?",
          de: "Braucht man eine Tour, um die Polarlichter von Tromso aus zu sehen?",
          nl: "Heb ik een tour nodig om het noorderlicht vanuit Tromso te zien?",
          es: "Hace falta una excursion para ver las auroras desde Tromso?",
          it: "Serve un'escursione per vedere le aurore da Tromso?",
        },
        answer: {
          fr: "Fortement conseille : les lumieres de la ville genent l'observation directe, donc la plupart des visiteurs reservent une excursion en bateau ou en minibus qui s'eloigne du centre.",
          en: "Strongly recommended: city lights get in the way of direct viewing, so most visitors book a boat or minibus tour that drives away from downtown.",
          de: "Sehr empfohlen: Die Stadtlichter stoeren die direkte Beobachtung, daher buchen die meisten Besucher eine Boots- oder Kleinbustour, die vom Zentrum wegfaehrt.",
          nl: "Sterk aanbevolen: het stadslicht bemoeilijkt directe waarneming, dus de meeste bezoekers boeken een boot- of minibustocht die wegrijdt van het centrum.",
          es: "Muy recomendable: las luces de la ciudad dificultan la observacion directa, por lo que la mayoria de los visitantes reserva una excursion en barco o minibus que se aleja del centro.",
          it: "Fortemente consigliata: le luci della citta ostacolano l'osservazione diretta, quindi la maggior parte dei visitatori prenota un'escursione in barca o minibus che si allontana dal centro.",
        },
      },
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}
