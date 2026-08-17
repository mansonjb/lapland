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
    ja: string;
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
    ja: string;
  };
  tags: {
    fr: string[];
    en: string[];
    de: string[];
    nl: string[];
    es: string[];
    it: string[];
    ja: string[];
  };
  description: {
    fr: string;
    en: string;
    de: string;
    nl: string;
    es: string;
    it: string;
    ja: string;
  };
  whyVisit: {
    fr: string;
    en: string;
    de: string;
    nl: string;
    es: string;
    it: string;
    ja: string;
  };
  quickFacts: {
    fr: string[];
    en: string[];
    de: string[];
    nl: string[];
    es: string[];
    it: string[];
    ja: string[];
  };
  faq: {
    question: { fr: string; en: string; de: string; nl: string; es: string; it: string; ja: string };
    answer: { fr: string; en: string; de: string; nl: string; es: string; it: string; ja: string };
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
      ja: "ロヴァニエミ",
    },
    country: "Finland",
    season: AURORA_SEASON,
    recommendedStay: {
      fr: "2-3 nuits",
      en: "2-3 nights",
      de: "2-3 Nächte",
      nl: "2-3 nachten",
      es: "2-3 noches",
      it: "2-3 notti",
      ja: "2〜3泊",
    },
    tags: {
      fr: ["Village du Père Noël", "Vols directs", "Igloos de verre"],
      en: ["Santa Claus Village", "Direct flights", "Glass igloos"],
      de: ["Weihnachtsmanndorf", "Direktflüge", "Glasiglus"],
      nl: ["Kerstman Dorp", "Directe vluchten", "Glazen iglos"],
      es: ["Pueblo de Papá Noel", "Vuelos directos", "Iglus de cristal"],
      it: ["Villaggio di Babbo Natale", "Voli diretti", "Iglu di vetro"],
      ja: ["サンタクロース村", "直行便あり", "ガラスイグルー"],
    },
    description: {
      fr: "La porte d'entrée la plus simple de la Laponie finlandaise, sur le cercle polaire arctique, avec vols directs depuis plusieurs capitales européennes.",
      en: "The easiest gateway into Finnish Lapland, sitting right on the Arctic Circle, with direct flights from several European capitals.",
      de: "Der einfachste Zugang zum finnischen Lappland, direkt am Polarkreis, mit Direktflügen von mehreren europäischen Hauptstädten.",
      nl: "De makkelijkste toegangspoort tot Fins Lapland, direct op de poolcirkel, met directe vluchten vanuit meerdere Europese hoofdsteden.",
      es: "La puerta de entrada más sencilla a la Laponia finlandesa, justo en el círculo polar ártico, con vuelos directos desde varias capitales europeas.",
      it: "La porta d'accesso più semplice alla Lapponia finlandese, proprio sul circolo polare artico, con voli diretti da diverse capitali europee.",
      ja: "フィンランド領ラップランドへの最も簡単な玄関口で、北極線上に位置し、欧州各都市からの直行便があります。",
    },
    whyVisit: {
      fr: "Rovaniemi combine accès facile (aéroport à 10 minutes du centre) et forte densité d'hébergements aurores : igloos de verre, cabanes vitrées et hôtels de neige se trouvent tous à moins de 20 minutes du centre-ville. C'est la meilleure base pour un premier séjour en Laponie, surtout si vous voyagez avec des enfants ou voulez combiner Village du Père Noël et chasse aux aurores.",
      en: "Rovaniemi pairs easy access (the airport is 10 minutes from downtown) with the highest density of aurora-friendly stays in the region: glass igloos, glazed cabins and snow hotels all sit within 20 minutes of the centre. It is the strongest base for a first Lapland trip, especially with kids or if you want to combine Santa Claus Village with aurora hunting.",
      de: "Rovaniemi verbindet einfachen Zugang (der Flughafen liegt 10 Minuten vom Zentrum entfernt) mit der höchsten Dichte an polarlichtfreundlichen Unterkünften der Region: Glasiglus, Glashütten und Schneehotels liegen alle innerhalb von 20 Minuten vom Zentrum. Es ist die beste Basis für eine erste Lappland-Reise, besonders mit Kindern oder wenn Sie das Weihnachtsmanndorf mit der Polarlichtjagd kombinieren möchten.",
      nl: "Rovaniemi combineert gemakkelijke bereikbaarheid (de luchthaven ligt 10 minuten van het centrum) met de hoogste dichtheid aan noorderlichtvriendelijke verblijven in de regio: glazen iglos, glazen hutten en sneeuwhotels liggen allemaal binnen 20 minuten van het centrum. Het is de beste uitvalsbasis voor een eerste Lapland-reis, zeker met kinderen of als u het Kerstman Dorp wilt combineren met noorderlicht spotten.",
      es: "Rovaniemi combina un acceso fácil (el aeropuerto está a 10 minutos del centro) con la mayor densidad de alojamientos aptos para auroras de la región: iglus de cristal, cabañas acristaladas y hoteles de nieve, todos a menos de 20 minutos del centro. Es la mejor base para un primer viaje a Laponia, especialmente con niños o si quieres combinar el Pueblo de Papá Noel con la caza de auroras.",
      it: "Rovaniemi unisce un accesso facile (l'aeroporto è a 10 minuti dal centro) alla più alta densità di alloggi adatti alle aurore della regione: iglu di vetro, baite vetrate e hotel di neve si trovano tutti entro 20 minuti dal centro. È la base migliore per un primo viaggio in Lapponia, soprattutto con i bambini o se si vuole unire il Villaggio di Babbo Natale alla caccia alle aurore.",
      ja: "ロヴァニエミは、アクセスの良さ（空港は市街中心部から10分）と、地域随一のオーロラ観賞向け宿泊施設の密度の高さを兼ね備えています。ガラスイグルー、ガラス張りキャビン、スノーホテルはいずれも中心部から20分以内。初めてのラップランド旅行、特に子供連れの場合やサンタクロース村とオーロラ観賞を組み合わせたい場合に最適な拠点です。",
    },
    quickFacts: {
      fr: ["Aéroport à 10 min du centre", "Sur le cercle polaire arctique", "Vols directs depuis Paris, Londres, Bruxelles en saison"],
      en: ["Airport 10 min from the centre", "Sits on the Arctic Circle", "Direct seasonal flights from Paris, London, Brussels"],
      de: ["Flughafen 10 Min vom Zentrum", "Liegt am Polarkreis", "Direkte Saisonflüge ab Paris, London, Brüssel"],
      nl: ["Luchthaven op 10 min van het centrum", "Ligt op de poolcirkel", "Directe seizoensvluchten vanuit Parijs, Londen, Brussel"],
      es: ["Aeropuerto a 10 min del centro", "Situado en el círculo polar ártico", "Vuelos directos de temporada desde París, Londres, Bruselas"],
      it: ["Aeroporto a 10 min dal centro", "Si trova sul circolo polare artico", "Voli diretti stagionali da Parigi, Londra, Bruxelles"],
      ja: ["空港は中心部から10分", "北極線上に位置", "パリ・ロンドン・ブリュッセルからの季節直行便"],
    },
    faq: [
      {
        question: {
          fr: "Faut-il louer une voiture à Rovaniemi ?",
          en: "Do I need to rent a car in Rovaniemi?",
          de: "Braucht man in Rovaniemi einen Mietwagen?",
          nl: "Heb ik een huurauto nodig in Rovaniemi?",
          es: "¿Hace falta alquilar coche en Rovaniemi?",
          it: "Serve noleggiare un'auto a Rovaniemi?",
          ja: "ロヴァニエミではレンタカーが必要ですか？",
        },
        answer: {
          fr: "Pas indispensable pour un premier séjour : la plupart des hébergements proposent des navettes depuis l'aéroport et des excursions aurores organisées. Une voiture est utile si vous voulez explorer par vous-même au-delà du centre.",
          en: "Not essential for a first trip: most stays run airport shuttles and organised aurora tours. A car helps if you want to explore beyond the centre on your own schedule.",
          de: "Nicht unbedingt für eine erste Reise: Die meisten Unterkünfte bieten Flughafentransfers und organisierte Polarlicht-Touren an. Ein Auto ist nützlich, wenn Sie selbstständig über das Zentrum hinaus erkunden möchten.",
          nl: "Niet noodzakelijk voor een eerste reis: de meeste verblijven bieden luchthaventransfers en georganiseerde noorderlichttochten aan. Een auto is handig als u zelfstandig verder wilt verkennen buiten het centrum.",
          es: "No es imprescindible para un primer viaje: la mayoría de los alojamientos ofrecen traslados desde el aeropuerto y excursiones organizadas para ver auroras. Un coche resulta útil si quieres explorar por tu cuenta más allá del centro.",
          it: "Non indispensabile per un primo viaggio: la maggior parte degli alloggi offre navette dall'aeroporto ed escursioni organizzate per le aurore. Un'auto è utile se si vuole esplorare autonomamente oltre il centro.",
          ja: "初めての旅行では必須ではありません。ほとんどの宿泊施設は空港シャトルや催行のオーロラツアーを提供しています。自分のペースで中心部の外まで探索したい場合には車があると便利です。",
        },
      },
      {
        question: {
          fr: "Rovaniemi convient-il aux familles ?",
          en: "Is Rovaniemi good for families?",
          de: "Ist Rovaniemi gut für Familien geeignet?",
          nl: "Is Rovaniemi geschikt voor gezinnen?",
          es: "¿Es Rovaniemi adecuado para familias?",
          it: "Rovaniemi è adatta alle famiglie?",
          ja: "ロヴァニエミは家族連れに向いていますか？",
        },
        answer: {
          fr: "Oui, c'est la destination la plus adaptée aux familles de la région grâce au Village du Père Noël et aux activités encadrées à proximité immédiate des hébergements.",
          en: "Yes, it is the most family-friendly destination in the region thanks to Santa Claus Village and guided activities right next to most stays.",
          de: "Ja, es ist das familienfreundlichste Reiseziel der Region dank des Weihnachtsmanndorfs und betreuter Aktivitäten in unmittelbarer Nähe der meisten Unterkünfte.",
          nl: "Ja, het is de meest gezinsvriendelijke bestemming van de regio dankzij het Kerstman Dorp en begeleide activiteiten vlak bij de meeste verblijven.",
          es: "Sí, es el destino más familiar de la región gracias al Pueblo de Papá Noel y a las actividades guiadas muy cerca de la mayoría de los alojamientos.",
          it: "Sì, è la destinazione più adatta alle famiglie della regione grazie al Villaggio di Babbo Natale e alle attività guidate proprio accanto alla maggior parte degli alloggi.",
          ja: "はい、サンタクロース村や、ほとんどの宿泊施設のすぐそばで楽しめるガイド付きアクティビティのおかげで、この地域で最も家族向けの目的地です。",
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
      ja: "レヴィ",
    },
    country: "Finland",
    season: AURORA_SEASON,
    recommendedStay: {
      fr: "3-4 nuits",
      en: "3-4 nights",
      de: "3-4 Nächte",
      nl: "3-4 nachten",
      es: "3-4 noches",
      it: "3-4 notti",
      ja: "3〜4泊",
    },
    tags: {
      fr: ["Station de ski", "Vie de village", "Familles et groupes"],
      en: ["Ski resort", "Village life", "Families and groups"],
      de: ["Skigebiet", "Dorfleben", "Familien und Gruppen"],
      nl: ["Skigebied", "Dorpsleven", "Gezinnen en groepen"],
      es: ["Estación de esquí", "Vida de pueblo", "Familias y grupos"],
      it: ["Stazione sciistica", "Vita di paese", "Famiglie e gruppi"],
      ja: ["スキーリゾート", "村の暮らし", "家族・グループ向け"],
    },
    description: {
      fr: "La plus grande station de ski de Finlande, avec un village compact où pistes, restaurants et igloos de verre se côtoient à pied.",
      en: "Finland's largest ski resort, with a compact village where slopes, restaurants and glass igloos all sit within walking distance.",
      de: "Finnlands größtes Skigebiet, mit einem kompakten Dorf, in dem Pisten, Restaurants und Glasiglus zu Fuß erreichbar sind.",
      nl: "Het grootste skigebied van Finland, met een compact dorp waar pistes, restaurants en glazen iglos op loopafstand van elkaar liggen.",
      es: "La estación de esquí más grande de Finlandia, con un pueblo compacto donde las pistas, restaurantes e iglus de cristal quedan a poca distancia a pie.",
      it: "La più grande stazione sciistica della Finlandia, con un villaggio compatto dove piste, ristoranti e iglu di vetro si trovano a pochi passi l'uno dall'altro.",
      ja: "フィンランド最大のスキーリゾートで、ゲレンデ、レストラン、ガラスイグルーがすべて徒歩圏内にコンパクトにまとまった村です。",
    },
    whyVisit: {
      fr: "Levi convient à ceux qui veulent alterner ski et chasse aux aurores sans changer de base. Le village est dense et piétonnier, avec un vrai choix de restaurants et de bars le soir, ce qui en fait la destination la plus vivante de la région pour les groupes d'amis comme pour les familles qui skient.",
      en: "Levi suits travellers who want to alternate skiing and aurora hunting without switching base. The village is compact and walkable, with a real choice of restaurants and bars in the evening, making it the liveliest destination in the region for groups of friends and skiing families alike.",
      de: "Levi eignet sich für alle, die Skifahren und Polarlichtjagd abwechseln möchten, ohne die Basis zu wechseln. Das Dorf ist kompakt und fußgängerfreundlich, mit einer echten Auswahl an Restaurants und Bars am Abend, was es zum lebendigsten Reiseziel der Region für Freundesgruppen und Skifamilien gleichermaßen macht.",
      nl: "Levi is geschikt voor wie skien en noorderlicht spotten wil afwisselen zonder van uitvalsbasis te wisselen. Het dorp is compact en voetgangersvriendelijk, met een echte keuze aan restaurants en bars in de avond, wat het de levendigste bestemming van de regio maakt voor groepen vrienden en skiende gezinnen.",
      es: "Levi es ideal para quienes quieren alternar esquí y caza de auroras sin cambiar de base. El pueblo es compacto y peatonal, con una auténtica variedad de restaurantes y bares por la noche, lo que lo convierte en el destino más animado de la región tanto para grupos de amigos como para familias que esquían.",
      it: "Levi è adatta a chi vuole alternare sci e caccia alle aurore senza cambiare base. Il villaggio è compatto e pedonale, con una vera scelta di ristoranti e bar la sera, il che lo rende la destinazione più vivace della regione sia per gruppi di amici sia per famiglie che sciano.",
      ja: "レヴィは、拠点を変えずにスキーとオーロラ観賞を交互に楽しみたい旅行者に向いています。村はコンパクトで徒歩移動が可能、夜にはレストランやバーの選択肢も豊富で、友人グループにもスキー好きの家族にも、この地域で最も活気ある目的地となっています。",
    },
    quickFacts: {
      fr: ["Plus grande station de ski de Finlande", "Village piétonnier compact", "Aéroport de Kittilä à 15 min"],
      en: ["Finland's largest ski resort", "Compact, walkable village", "Kittilä airport 15 min away"],
      de: ["Finnlands größtes Skigebiet", "Kompaktes, fußgängerfreundliches Dorf", "Flughafen Kittilä 15 Min entfernt"],
      nl: ["Grootste skigebied van Finland", "Compact, voetgangersvriendelijk dorp", "Luchthaven Kittilä op 15 min"],
      es: ["La estación de esquí más grande de Finlandia", "Pueblo compacto y peatonal", "Aeropuerto de Kittilä a 15 min"],
      it: ["La più grande stazione sciistica della Finlandia", "Villaggio compatto e pedonale", "Aeroporto di Kittilä a 15 min"],
      ja: ["フィンランド最大のスキーリゾート", "コンパクトで歩きやすい村", "キッティラ空港まで15分"],
    },
    faq: [
      {
        question: {
          fr: "Peut-on skier et voir des aurores le même séjour à Levi ?",
          en: "Can I ski and see the northern lights on the same trip in Levi?",
          de: "Kann man in Levi im selben Urlaub Ski fahren und Polarlichter sehen?",
          nl: "Kan ik in Levi skien en noorderlicht zien tijdens dezelfde reis?",
          es: "¿Se puede esquiar y ver auroras en el mismo viaje en Levi?",
          it: "Si può sciare e vedere le aurore nello stesso viaggio a Levi?",
          ja: "レヴィでは同じ旅行でスキーとオーロラ観賞の両方を楽しめますか？",
        },
        answer: {
          fr: "Oui, c'est l'atout principal de Levi : les domaines skiables ferment en fin d'après-midi, ce qui laisse la soirée libre pour les excursions ou l'observation depuis un igloo de verre.",
          en: "Yes, that is Levi's main draw: the slopes close in the late afternoon, leaving the evening free for tours or watching from a glass igloo.",
          de: "Ja, das ist der große Vorteil von Levi: Die Skigebiete schließen am späten Nachmittag, sodass der Abend frei bleibt für Touren oder Beobachtungen aus einem Glasiglu.",
          nl: "Ja, dat is het grote voordeel van Levi: de skigebieden sluiten laat in de middag, waardoor de avond vrij blijft voor tochten of om vanuit een glazen iglo te kijken.",
          es: "Sí, esa es la gran baza de Levi: las pistas cierran a última hora de la tarde, lo que deja la noche libre para excursiones u observar desde un iglu de cristal.",
          it: "Sì, è questo il punto di forza di Levi: le piste chiudono nel tardo pomeriggio, lasciando la serata libera per escursioni o per l'osservazione da un iglu di vetro.",
          ja: "はい、それがレヴィの一番の魅力です。ゲレンデは夕方早くに閉まるため、夜はツアーやガラスイグルーからの観賞に充てられます。",
        },
      },
      {
        question: {
          fr: "Quand est-ce que la saison de ski et la saison des aurores se chevauchent ?",
          en: "When do ski season and aurora season overlap?",
          de: "Wann überschneiden sich Skisaison und Polarlichtsaison?",
          nl: "Wanneer overlappen het skiseizoen en het noorderlichtseizoen?",
          es: "¿Cuándo se solapan la temporada de esquí y la de auroras?",
          it: "Quando si sovrappongono la stagione sciistica e quella delle aurore?",
          ja: "スキーシーズンとオーロラシーズンはいつ重なりますか？",
        },
        answer: {
          fr: "De novembre à avril, avec un pic de conditions (neige garantie, nuits longues) entre janvier et mars.",
          en: "From November to April, with peak conditions (guaranteed snow, long dark nights) between January and March.",
          de: "Von November bis April, mit den besten Bedingungen (garantierter Schnee, lange dunkle Nächte) zwischen Januar und März.",
          nl: "Van november tot april, met de beste omstandigheden (gegarandeerde sneeuw, lange donkere nachten) tussen januari en maart.",
          es: "De noviembre a abril, con las mejores condiciones (nieve garantizada, noches largas) entre enero y marzo.",
          it: "Da novembre ad aprile, con le condizioni migliori (neve garantita, notti lunghe e buie) tra gennaio e marzo.",
          ja: "11月から4月まで重なり、1月から3月にかけて（雪が確実にあり、夜が長く暗い）最も条件の良い時期を迎えます。",
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
      fr: "Saariselkä",
      en: "Saariselkä",
      de: "Saariselkä",
      nl: "Saariselkä",
      es: "Saariselkä",
      it: "Saariselkä",
      ja: "サーリセルカ",
    },
    country: "Finland",
    season: AURORA_SEASON,
    recommendedStay: {
      fr: "3-4 nuits",
      en: "3-4 nights",
      de: "3-4 Nächte",
      nl: "3-4 nachten",
      es: "3-4 noches",
      it: "3-4 notti",
      ja: "3〜4泊",
    },
    tags: {
      fr: ["Parc national", "Le plus au nord", "Igloos de verre"],
      en: ["National park", "Furthest north", "Glass igloos"],
      de: ["Nationalpark", "Am weitesten nördlich", "Glasiglus"],
      nl: ["Nationaal park", "Meest noordelijk", "Glazen iglos"],
      es: ["Parque nacional", "Lo más al norte", "Iglus de cristal"],
      it: ["Parco nazionale", "Il più a nord", "Iglu di vetro"],
      ja: ["国立公園", "最北の拠点", "ガラスイグルー"],
    },
    description: {
      fr: "Le village le plus au nord de la Laponie finlandaise accessible facilement, aux portes du parc national d'Urho Kekkonen.",
      en: "The furthest-north easily reachable village in Finnish Lapland, right on the edge of Urho Kekkonen National Park.",
      de: "Das am weitesten nördlich gelegene, gut erreichbare Dorf im finnischen Lappland, direkt am Rand des Urho-Kekkonen-Nationalparks.",
      nl: "Het meest noordelijke, goed bereikbare dorp in Fins Lapland, aan de rand van het Urho Kekkonen Nationaal Park.",
      es: "El pueblo de fácil acceso más septentrional de la Laponia finlandesa, justo en el borde del Parque Nacional de Urho Kekkonen.",
      it: "Il villaggio più a nord facilmente raggiungibile della Lapponia finlandese, proprio ai margini del Parco Nazionale di Urho Kekkonen.",
      ja: "フィンランド領ラップランドで容易にアクセスできる村としては最も北に位置し、ウルホ・ケッコネン国立公園のすぐそばにあります。",
    },
    whyVisit: {
      fr: "Plus on monte au nord, plus les nuits sont sombres et longues en hiver, ce qui joue en faveur de Saariselkä pour l'observation des aurores. C'est aussi là où l'on trouve le plus fort choix d'igloos de verre et de cabanes vitrées de toute la Laponie, avec un accès direct à un vrai parc national pour la randonnée en raquettes.",
      en: "The further north you go, the darker and longer winter nights get, which works in Saariselka's favour for aurora watching. It also has the widest concentration of glass igloos and glazed cabins in all of Lapland, with direct access to a genuine national park for snowshoe hikes.",
      de: "Je weiter man nach Norden kommt, desto dunkler und länger werden die Winternächte, was Saariselkä bei der Polarlichtbeobachtung zugutekommt. Hier findet sich auch die größte Auswahl an Glasiglus und Glashütten in ganz Lappland, mit direktem Zugang zu einem echten Nationalpark für Schneeschuhwanderungen.",
      nl: "Hoe verder je naar het noorden gaat, hoe donkerder en langer de winternachten worden, wat in het voordeel van Saariselkä speelt voor het spotten van noorderlicht. Het heeft ook de hoogste concentratie glazen iglos en glazen hutten van heel Lapland, met directe toegang tot een echt nationaal park voor sneeuwschoentochten.",
      es: "Cuanto más al norte se va, más oscuras y largas son las noches de invierno, lo que favorece a Saariselkä para la observación de auroras. Además cuenta con la mayor concentración de iglus de cristal y cabañas acristaladas de toda Laponia, con acceso directo a un auténtico parque nacional para hacer rutas con raquetas de nieve.",
      it: "Più si sale verso nord, più le notti invernali diventano buie e lunghe, il che gioca a favore di Saariselkä per l'osservazione delle aurore. Qui si trova anche la maggiore concentrazione di iglu di vetro e baite vetrate di tutta la Lapponia, con accesso diretto a un vero parco nazionale per escursioni con le racchette da neve.",
      ja: "北に行くほど冬の夜は暗く長くなり、これがオーロラ観賞においてサーリセルカに有利に働きます。またラップランド全域の中でもガラスイグルーとガラス張りキャビンの集積度が最も高く、本格的な国立公園でのスノーシューハイキングにも直接アクセスできます。",
    },
    quickFacts: {
      fr: ["Aux portes d'un parc national", "Plus forte densité d'igloos de verre", "Aéroport d'Ivalo à 30 min"],
      en: ["On the edge of a national park", "Highest concentration of glass igloos", "Ivalo airport 30 min away"],
      de: ["Am Rand eines Nationalparks", "Höchste Dichte an Glasiglus", "Flughafen Ivalo 30 Min entfernt"],
      nl: ["Aan de rand van een nationaal park", "Hoogste concentratie glazen iglos", "Luchthaven Ivalo op 30 min"],
      es: ["En el borde de un parque nacional", "Mayor concentración de iglus de cristal", "Aeropuerto de Ivalo a 30 min"],
      it: ["Ai margini di un parco nazionale", "Massima concentrazione di iglu di vetro", "Aeroporto di Ivalo a 30 min"],
      ja: ["国立公園のそばに位置", "ガラスイグルーの集積度が最も高い", "イヴァロ空港まで30分"],
    },
    faq: [
      {
        question: {
          fr: "Saariselkä est-il plus loin à rejoindre que Rovaniemi ?",
          en: "Is Saariselka harder to reach than Rovaniemi?",
          de: "Ist Saariselkä schwerer zu erreichen als Rovaniemi?",
          nl: "Is Saariselkä moeilijker te bereiken dan Rovaniemi?",
          es: "¿Es Saariselkä más difícil de alcanzar que Rovaniemi?",
          it: "Saariselkä è più difficile da raggiungere rispetto a Rovaniemi?",
          ja: "サーリセルカはロヴァニエミよりアクセスしにくいですか？",
        },
        answer: {
          fr: "Un peu : on y arrive par l'aéroport d'Ivalo (30 min de route) plutôt que directement depuis l'Europe. En échange, les nuits y sont plus sombres et le paysage plus sauvage.",
          en: "Slightly: you arrive via Ivalo airport (a 30-minute drive) rather than direct from Europe. In exchange, nights are darker and the landscape wilder.",
          de: "Etwas: Man kommt über den Flughafen Ivalo an (30 Minuten Fahrt) statt direkt aus Europa. Dafür sind die Nächte dunkler und die Landschaft wilder.",
          nl: "Een beetje: u komt aan via luchthaven Ivalo (30 minuten rijden) in plaats van rechtstreeks vanuit Europa. Daar staat tegenover dat de nachten donkerder en het landschap ruiger is.",
          es: "Un poco: se llega a través del aeropuerto de Ivalo (30 minutos en coche) en lugar de directamente desde Europa. A cambio, las noches son más oscuras y el paisaje más salvaje.",
          it: "Un po': si arriva tramite l'aeroporto di Ivalo (30 minuti di auto) anziché direttamente dall'Europa. In cambio, le notti sono più buie e il paesaggio più selvaggio.",
          ja: "やや不便です。ヨーロッパから直接ではなく、イヴァロ空港経由（車で30分）でのアクセスとなります。その代わり、夜はより暗く、景観もより野性的です。",
        },
      },
      {
        question: {
          fr: "Y a-t-il des activités hors observation des aurores ?",
          en: "Are there things to do besides aurora watching?",
          de: "Gibt es Aktivitäten außer Polarlichtbeobachtung?",
          nl: "Zijn er activiteiten naast noorderlicht spotten?",
          es: "¿Hay actividades además de ver auroras?",
          it: "Ci sono attività oltre all'osservazione delle aurore?",
          ja: "オーロラ観賞以外にできることはありますか？",
        },
        answer: {
          fr: "Oui : raquettes et ski de fond dans le parc national d'Urho Kekkonen, safaris en traîneau à chiens et rennes, et sauna en pleine nature.",
          en: "Yes: snowshoeing and cross-country skiing in Urho Kekkonen National Park, husky and reindeer sled safaris, and wilderness sauna sessions.",
          de: "Ja: Schneeschuhwandern und Langlauf im Urho-Kekkonen-Nationalpark, Husky- und Rentierschlittensafaris sowie Sauna in freier Natur.",
          nl: "Ja: sneeuwschoenwandelen en langlaufen in het Urho Kekkonen Nationaal Park, husky- en rendiersledesafari's, en saunasessies in de wildernis.",
          es: "Sí: raquetas de nieve y esquí de fondo en el Parque Nacional de Urho Kekkonen, safaris en trineo tirado por huskies y renos, y sesiones de sauna en plena naturaleza.",
          it: "Sì: escursioni con le racchette da neve e sci di fondo nel Parco Nazionale di Urho Kekkonen, safari in slitta trainata da husky e renne, e sessioni di sauna nella natura selvaggia.",
          ja: "はい。ウルホ・ケッコネン国立公園でのスノーシューやクロスカントリースキー、ハスキー犬・トナカイのそり体験、大自然の中でのサウナなどが楽しめます。",
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
      ja: "キルナ＆アビスコ",
    },
    country: "Sweden",
    season: AURORA_SEASON,
    recommendedStay: {
      fr: "3-4 nuits",
      en: "3-4 nights",
      de: "3-4 Nächte",
      nl: "3-4 nachten",
      es: "3-4 noches",
      it: "3-4 notti",
      ja: "3〜4泊",
    },
    tags: {
      fr: ["Hôtel de glace original", "Ciel le plus clair", "Laponie suédoise"],
      en: ["The original ice hotel", "Clearest skies", "Swedish Lapland"],
      de: ["Original-Eishotel", "Klarster Himmel", "Schwedisch Lappland"],
      nl: ["Origineel ijshotel", "Helderste luchten", "Zweeds Lapland"],
      es: ["Hotel de hielo original", "Cielos más despejados", "Laponia sueca"],
      it: ["Hotel di ghiaccio originale", "Cieli più limpidi", "Lapponia svedese"],
      ja: ["元祖アイスホテル", "最も晴天率の高い空", "スウェーデン領ラップランド"],
    },
    description: {
      fr: "L'Icehotel original à Kiruna, et à une heure de route, l'Aurora Sky Station d'Abisko, réputée pour l'un des ciels les plus clairs de Scandinavie.",
      en: "The original Icehotel in Kiruna, and an hour away, Abisko's Aurora Sky Station, known for some of Scandinavia's clearest skies.",
      de: "Das originale Icehotel in Kiruna und, eine Stunde entfernt, die Aurora Sky Station in Abisko, bekannt für einen der klarsten Himmel Skandinaviens.",
      nl: "Het originele Icehotel in Kiruna, en een uur verderop, het Aurora Sky Station van Abisko, bekend om een van de helderste luchten van Scandinavië.",
      es: "El Icehotel original en Kiruna y, a una hora en coche, la Aurora Sky Station de Abisko, conocida por tener uno de los cielos más despejados de Escandinavia.",
      it: "L'Icehotel originale a Kiruna e, a un'ora di distanza, l'Aurora Sky Station di Abisko, nota per uno dei cieli più limpidi della Scandinavia.",
      ja: "キルナには元祖アイスホテルがあり、そこから1時間の距離には、北欧屈指の晴天率で知られるアビスコのオーロラスカイステーションがあります。",
    },
    whyVisit: {
      fr: "Abisko bénéficie d'un microclimat qui dégage souvent le ciel même quand il neige partout ailleurs dans la région, ce qui en fait une référence scientifique pour la probabilité d'observation. Kiruna, à une heure de route, ajoute l'Icehotel, refait chaque année par des artistes, une expérience à part entière même sans aurores.",
      en: "Abisko has a microclimate that often keeps the sky clear even when it is snowing everywhere else in the region, making it a scientific reference point for aurora visibility odds. Kiruna, an hour away, adds the Icehotel, rebuilt by artists every year, an experience in its own right even without the lights.",
      de: "Abisko profitiert von einem Mikroklima, das den Himmel oft aufklärt, selbst wenn es überall sonst in der Region schneit, was es zu einer wissenschaftlichen Referenz für die Sichtungswahrscheinlichkeit macht. Kiruna, eine Stunde entfernt, ergänzt das Icehotel, jedes Jahr neu von Künstlern gestaltet, ein eigenständiges Erlebnis auch ohne Polarlichter.",
      nl: "Abisko profiteert van een microklimaat dat de lucht vaak opklaart, zelfs als het overal elders in de regio sneeuwt, wat het een wetenschappelijk referentiepunt maakt voor de kans op waarnemingen. Kiruna, een uur verderop, voegt het Icehotel toe, elk jaar opnieuw gebouwd door kunstenaars, een ervaring op zich zelfs zonder noorderlicht.",
      es: "Abisko se beneficia de un microclima que suele despejar el cielo incluso cuando nieva en el resto de la región, lo que lo convierte en una referencia científica para la probabilidad de observación. Kiruna, a una hora, añade el Icehotel, reconstruido cada año por artistas, una experiencia en sí misma incluso sin auroras.",
      it: "Abisko beneficia di un microclima che spesso rasserena il cielo anche quando altrove nella regione nevica, il che la rende un punto di riferimento scientifico per la probabilità di osservazione. Kiruna, a un'ora di distanza, aggiunge l'Icehotel, ricostruito ogni anno da artisti, un'esperienza a sé stante anche senza aurore.",
      ja: "アビスコには特有の微気候があり、地域の他の場所で雪が降っていても空が晴れることが多いため、オーロラ観測確率における科学的な基準地点となっています。1時間離れたキルナには、毎年アーティストの手で作り直されるアイスホテルもあり、オーロラが見られなくてもそれ自体が独立した体験となります。",
    },
    quickFacts: {
      fr: ["Microclimat réputé pour un ciel dégagé", "Aurora Sky Station à Abisko", "Icehotel original à Kiruna"],
      en: ["Microclimate known for clear skies", "Aurora Sky Station in Abisko", "The original Icehotel in Kiruna"],
      de: ["Mikroklima bekannt für klaren Himmel", "Aurora Sky Station in Abisko", "Original-Icehotel in Kiruna"],
      nl: ["Microklimaat bekend om heldere luchten", "Aurora Sky Station in Abisko", "Origineel Icehotel in Kiruna"],
      es: ["Microclima conocido por sus cielos despejados", "Aurora Sky Station en Abisko", "Icehotel original en Kiruna"],
      it: ["Microclima noto per i cieli limpidi", "Aurora Sky Station ad Abisko", "Icehotel originale a Kiruna"],
      ja: ["晴天率の高さで知られる微気候", "アビスコのオーロラスカイステーション", "キルナの元祖アイスホテル"],
    },
    faq: [
      {
        question: {
          fr: "Faut-il choisir entre Kiruna et Abisko ?",
          en: "Do I need to choose between Kiruna and Abisko?",
          de: "Muss man sich zwischen Kiruna und Abisko entscheiden?",
          nl: "Moet ik kiezen tussen Kiruna en Abisko?",
          es: "¿Hay que elegir entre Kiruna y Abisko?",
          it: "Bisogna scegliere tra Kiruna e Abisko?",
          ja: "キルナとアビスコのどちらかを選ぶ必要がありますか？",
        },
        answer: {
          fr: "Non, les deux sont à environ une heure de route ou de train l'un de l'autre : beaucoup de voyageurs dorment à Kiruna et font une excursion à l'Aurora Sky Station d'Abisko, ou l'inverse.",
          en: "No, the two are about an hour apart by road or train: many travellers base themselves in Kiruna and day-trip to Abisko's Aurora Sky Station, or the other way round.",
          de: "Nein, beide liegen etwa eine Stunde per Auto oder Zug voneinander entfernt: Viele Reisende übernachten in Kiruna und machen einen Ausflug zur Aurora Sky Station in Abisko, oder umgekehrt.",
          nl: "Nee, ze liggen ongeveer een uur van elkaar met de auto of trein: veel reizigers verblijven in Kiruna en maken een dagtrip naar het Aurora Sky Station in Abisko, of andersom.",
          es: "No, ambos están a una hora de distancia por carretera o tren: muchos viajeros se alojan en Kiruna y hacen una excursión de un día a la Aurora Sky Station de Abisko, o al revés.",
          it: "No, le due località distano circa un'ora di auto o treno l'una dall'altra: molti viaggiatori soggiornano a Kiruna e fanno un'escursione all'Aurora Sky Station di Abisko, o viceversa.",
          ja: "いいえ、両者は車や列車で約1時間の距離です。多くの旅行者はキルナを拠点にアビスコのオーロラスカイステーションへ日帰りで訪れる、あるいはその逆のパターンを選んでいます。",
        },
      },
      {
        question: {
          fr: "L'Icehotel est-il ouvert toute l'année ?",
          en: "Is the Icehotel open year-round?",
          de: "Ist das Icehotel das ganze Jahr geöffnet?",
          nl: "Is het Icehotel het hele jaar open?",
          es: "¿Está el Icehotel abierto todo el año?",
          it: "L'Icehotel è aperto tutto l'anno?",
          ja: "アイスホテルは年間を通じて営業していますか？",
        },
        answer: {
          fr: "L'aile permanente climatisée est ouverte toute l'année, mais l'hôtel de glace complet n'existe que de décembre à avril, reconstruit chaque hiver.",
          en: "The permanently chilled wing is open year-round, but the full ice hotel only exists from December to April, rebuilt each winter.",
          de: "Der permanent gekühlte Flügel ist das ganze Jahr geöffnet, aber das komplette Eishotel gibt es nur von Dezember bis April, jeden Winter neu errichtet.",
          nl: "De permanent gekoelde vleugel is het hele jaar open, maar het volledige ijshotel bestaat alleen van december tot april en wordt elke winter opnieuw opgebouwd.",
          es: "El ala refrigerada permanente está abierta todo el año, pero el hotel de hielo completo solo existe de diciembre a abril, reconstruido cada invierno.",
          it: "L'ala permanente refrigerata è aperta tutto l'anno, ma l'hotel di ghiaccio completo esiste solo da dicembre ad aprile, ricostruito ogni inverno.",
          ja: "常時冷却された棟は年間を通じて営業していますが、完全な形の氷のホテルは毎冬作り直され、12月から4月までのみ存在します。",
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
      fr: "Tromsø",
      en: "Tromsø",
      de: "Tromsø",
      nl: "Tromsø",
      es: "Tromsø",
      it: "Tromsø",
      ja: "トロムソ",
    },
    country: "Norway",
    season: AURORA_SEASON,
    recommendedStay: {
      fr: "3-4 nuits",
      en: "3-4 nights",
      de: "3-4 Nächte",
      nl: "3-4 nachten",
      es: "3-4 noches",
      it: "3-4 notti",
      ja: "3〜4泊",
    },
    tags: {
      fr: ["Fjords", "Vraie ville", "Excursions bateau"],
      en: ["Fjords", "Real city", "Boat excursions"],
      de: ["Fjorde", "Echte Stadt", "Bootsausflüge"],
      nl: ["Fjorden", "Echte stad", "Boottochten"],
      es: ["Fiordos", "Ciudad de verdad", "Excursiones en barco"],
      it: ["Fiordi", "Vera città", "Escursioni in barca"],
      ja: ["フィヨルド", "本格的な街", "ボートツアー"],
    },
    description: {
      fr: "La grande ville du Grand Nord norvégien, entre fjords et montagnes, avec la plus forte offre d'excursions aurores organisées en bateau ou en minibus.",
      en: "The big city of Norway's far north, set between fjords and mountains, with the widest choice of organised boat and minibus aurora chases.",
      de: "Die große Stadt des norwegischen hohen Nordens, zwischen Fjorden und Bergen gelegen, mit dem größten Angebot an organisierten Polarlicht-Ausflügen per Boot oder Kleinbus.",
      nl: "De grote stad van het Noorse hoge noorden, gelegen tussen fjorden en bergen, met het grootste aanbod aan georganiseerde noorderlichttochten per boot of minibus.",
      es: "La gran ciudad del extremo norte noruego, situada entre fiordos y montañas, con la mayor oferta de excursiones organizadas para ver auroras en barco o minibús.",
      it: "La grande città dell'estremo nord norvegese, tra fiordi e montagne, con la più ampia offerta di escursioni organizzate per le aurore in barca o minibus.",
      ja: "フィヨルドと山々に囲まれたノルウェー極北の大都市で、ボートやミニバスによる催行オーロラツアーの選択肢が最も豊富です。",
    },
    whyVisit: {
      fr: "Tromsø est la seule destination de cette liste qui est une vraie ville : restaurants, bars, musées et vie nocturne, en plus des aurores. La chasse aux aurores s'y organise surtout en minibus ou en bateau pour s'échapper des lumières urbaines, ce qui rassure les voyageurs qui préfèrent une excursion guidée à l'attente dans un igloo isolé.",
      en: "Tromso is the only destination on this list that is a real city: restaurants, bars, museums and nightlife, on top of the lights. Aurora hunting here is mostly organised via minibus or boat chases that drive away from city lights, which suits travellers who prefer a guided tour over waiting it out in a remote igloo.",
      de: "Tromsø ist das einzige Reiseziel auf dieser Liste, das eine echte Stadt ist: Restaurants, Bars, Museen und Nachtleben, zusätzlich zu den Polarlichtern. Die Polarlichtjagd wird hier meist per Kleinbus oder Boot organisiert, um den Stadtlichtern zu entkommen, was Reisende beruhigt, die eine geführte Tour dem Warten in einem abgelegenen Iglu vorziehen.",
      nl: "Tromsø is de enige bestemming op deze lijst die een echte stad is: restaurants, bars, musea en nachtleven, naast het noorderlicht. De jacht op noorderlicht wordt hier vooral georganiseerd per minibus of boot om aan het stadslicht te ontsnappen, wat geruststellend is voor reizigers die een begeleide tocht verkiezen boven wachten in een afgelegen iglo.",
      es: "Tromsø es el único destino de esta lista que es una ciudad de verdad: restaurantes, bares, museos y vida nocturna, además de las auroras. La caza de auroras aquí se organiza sobre todo en minibús o barco para alejarse de las luces urbanas, lo que tranquiliza a los viajeros que prefieren una excursión guiada antes que esperar en un iglú aislado.",
      it: "Tromsø è l'unica destinazione di questo elenco che è davvero una città: ristoranti, bar, musei e vita notturna, oltre alle aurore. La caccia alle aurore qui viene organizzata soprattutto in minibus o in barca per allontanarsi dalle luci cittadine, il che rassicura i viaggiatori che preferiscono un'escursione guidata all'attesa in un iglu isolato.",
      ja: "トロムソはこのリスト唯一の本格的な都市で、オーロラに加えてレストラン、バー、美術館、ナイトライフも楽しめます。ここでのオーロラ観賞は主にミニバスやボートで市街の光から離れる形で催行され、人里離れたイグルーで待つよりガイド付きツアーを好む旅行者に向いています。",
    },
    quickFacts: {
      fr: ["Vraie vie urbaine (restaurants, bars, musées)", "Excursions aurores en bateau et minibus", "Vols directs depuis Oslo toute l'année"],
      en: ["Real city life (restaurants, bars, museums)", "Boat and minibus aurora chases", "Year-round direct flights from Oslo"],
      de: ["Echtes Stadtleben (Restaurants, Bars, Museen)", "Polarlicht-Ausflüge per Boot und Kleinbus", "Ganzjährige Direktflüge ab Oslo"],
      nl: ["Echt stadsleven (restaurants, bars, musea)", "Noorderlichttochten per boot en minibus", "Het hele jaar directe vluchten vanuit Oslo"],
      es: ["Vida urbana real (restaurantes, bares, museos)", "Excursiones de auroras en barco y minibús", "Vuelos directos desde Oslo todo el año"],
      it: ["Vera vita cittadina (ristoranti, bar, musei)", "Escursioni per le aurore in barca e minibus", "Voli diretti da Oslo tutto l'anno"],
      ja: ["本格的な都市生活（レストラン・バー・美術館）", "ボートとミニバスによるオーロラツアー", "オスロからの通年直行便"],
    },
    faq: [
      {
        question: {
          fr: "Tromsø est-il plus cher que la Laponie finlandaise ?",
          en: "Is Tromso more expensive than Finnish Lapland?",
          de: "Ist Tromsø teurer als das finnische Lappland?",
          nl: "Is Tromsø duurder dan Fins Lapland?",
          es: "¿Es Tromsø más caro que la Laponia finlandesa?",
          it: "Tromsø è più cara della Lapponia finlandese?",
          ja: "トロムソはフィンランド領ラップランドより物価が高いですか？",
        },
        answer: {
          fr: "En général oui, le coût de la vie norvégien est plus élevé. En échange, la ville offre plus d'options de restauration et de sorties indépendantes des hôtels.",
          en: "Generally yes, the Norwegian cost of living runs higher. In exchange, the city offers far more dining and nightlife options independent of the hotels.",
          de: "Im Allgemeinen ja, die norwegischen Lebenshaltungskosten sind höher. Dafür bietet die Stadt weit mehr Restaurant- und Ausgehmöglichkeiten unabhängig von den Hotels.",
          nl: "Over het algemeen wel, de Noorse kosten van levensonderhoud liggen hoger. Daar staat tegenover dat de stad veel meer eet- en uitgaansmogelijkheden biedt los van de hotels.",
          es: "En general sí, el coste de vida noruego es más alto. A cambio, la ciudad ofrece muchas más opciones de restauración y ocio independientes de los hoteles.",
          it: "In generale sì, il costo della vita norvegese è più alto. In cambio, la città offre molte più opzioni di ristorazione e svago indipendenti dagli hotel.",
          ja: "概して高めです。ノルウェーの生活費は高い傾向にあります。その代わり、街にはホテルに頼らない食事やナイトライフの選択肢が格段に豊富です。",
        },
      },
      {
        question: {
          fr: "A-t-on besoin d'une excursion pour voir les aurores depuis Tromsø ?",
          en: "Do I need a tour to see the lights from Tromso?",
          de: "Braucht man eine Tour, um die Polarlichter von Tromsø aus zu sehen?",
          nl: "Heb ik een tour nodig om het noorderlicht vanuit Tromsø te zien?",
          es: "¿Hace falta una excursión para ver las auroras desde Tromsø?",
          it: "Serve un'escursione per vedere le aurore da Tromsø?",
          ja: "トロムソからオーロラを見るにはツアーが必要ですか？",
        },
        answer: {
          fr: "Fortement conseillé : les lumières de la ville gênent l'observation directe, donc la plupart des visiteurs réservent une excursion en bateau ou en minibus qui s'éloigne du centre.",
          en: "Strongly recommended: city lights get in the way of direct viewing, so most visitors book a boat or minibus tour that drives away from downtown.",
          de: "Sehr empfohlen: Die Stadtlichter stören die direkte Beobachtung, daher buchen die meisten Besucher eine Boots- oder Kleinbustour, die vom Zentrum wegfährt.",
          nl: "Sterk aanbevolen: het stadslicht bemoeilijkt directe waarneming, dus de meeste bezoekers boeken een boot- of minibustocht die wegrijdt van het centrum.",
          es: "Muy recomendable: las luces de la ciudad dificultan la observación directa, por lo que la mayoría de los visitantes reserva una excursión en barco o minibús que se aleja del centro.",
          it: "Fortemente consigliata: le luci della città ostacolano l'osservazione diretta, quindi la maggior parte dei visitatori prenota un'escursione in barca o minibus che si allontana dal centro.",
          ja: "強くお勧めします。市街の光が直接観賞の妨げになるため、ほとんどの訪問者は中心部から離れるボートやミニバスのツアーを予約しています。",
        },
      },
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}
