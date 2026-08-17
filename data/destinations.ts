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
  whereToStay: {
    fr: string;
    en: string;
    de: string;
    nl: string;
    es: string;
    it: string;
    ja: string;
  };
  whatToDo: {
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
  /** Bloc court label:valeur pour l'orientation pratique (population, aeroport, train, voiture, temperatures). */
  practicalInfo: {
    population: { fr: string; en: string; de: string; nl: string; es: string; it: string; ja: string };
    airport: { fr: string; en: string; de: string; nl: string; es: string; it: string; ja: string };
    train: { fr: string; en: string; de: string; nl: string; es: string; it: string; ja: string };
    carRental: { fr: string; en: string; de: string; nl: string; es: string; it: string; ja: string };
    winterTemp: { fr: string; en: string; de: string; nl: string; es: string; it: string; ja: string };
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
    whereToStay: {
      fr: "Le choix le plus large de la région : igloos de verre dans ou près du Village du Père Noël, hôtels de chaîne en centre-ville, cabanes en forêt à environ 10 minutes. Les prix vont d'environ 90€ à plus de 1000€ la nuit selon le type d'hébergement.",
      en: "The widest choice in the region: glass igloos in or near Santa Claus Village, chain hotels downtown, forest cabins about 10 minutes out. Prices range from around 90 EUR to well over 1000 EUR a night depending on the type of stay.",
      de: "Die größte Auswahl der Region: Glasiglus im oder nahe dem Weihnachtsmanndorf, Kettenhotels im Stadtzentrum, Waldhütten etwa 10 Minuten entfernt. Die Preise reichen von rund 90€ bis über 1000€ pro Nacht, je nach Unterkunftstyp.",
      nl: "De ruimste keuze van de regio: glazen iglos in of bij het Kerstman Dorp, ketenhotels in het centrum, boshutten op ongeveer 10 minuten. Prijzen lopen van circa 90€ tot ruim boven 1000€ per nacht, afhankelijk van het type verblijf.",
      es: "La oferta más amplia de la región: iglus de cristal dentro o cerca del Pueblo de Papá Noel, hoteles de cadena en el centro, cabañas en el bosque a unos 10 minutos. Los precios van desde unos 90€ hasta más de 1000€ la noche según el tipo de alojamiento.",
      it: "La scelta più ampia della regione: iglu di vetro dentro o vicino al Villaggio di Babbo Natale, hotel di catena in centro città, baite nel bosco a circa 10 minuti. I prezzi vanno da circa 90€ a oltre 1000€ a notte a seconda del tipo di alloggio.",
      ja: "この地域で最も選択肢が豊富です。サンタクロース村内または周辺のガラスイグルー、市街中心部のチェーンホテル、中心部から車で約10分の森のキャビンなど。宿泊タイプにより価格は1泊約90ユーロから1000ユーロ超まで幅があります。",
    },
    whatToDo: {
      fr: "Village du Père Noël, balades en traîneau à chiens, musée Arktikum consacré à l'Arctique, excursions en motoneige et visites de fermes de rennes.",
      en: "Santa Claus Village, husky sledding, the Arktikum museum on Arctic life, snowmobile trips and reindeer farm visits.",
      de: "Weihnachtsmanndorf, Husky-Schlittentouren, das Arktikum-Museum zum Leben in der Arktis, Schneemobiltouren und Besuche auf Rentierfarmen.",
      nl: "Kerstman Dorp, husky sleeën, het Arktikum-museum over het leven in het noordpoolgebied, sneeuwscootertochten en bezoeken aan rendierboerderijen.",
      es: "Pueblo de Papá Noel, paseos en trineo de huskies, el museo Arktikum dedicado al Ártico, excursiones en moto de nieve y visitas a granjas de renos.",
      it: "Villaggio di Babbo Natale, giri in slitta trainata da husky, il museo Arktikum dedicato all'Artico, escursioni in motoslitta e visite alle fattorie di renne.",
      ja: "サンタクロース村、ハスキー犬のそり体験、北極圏の暮らしを紹介するアークティクム博物館、スノーモービルツアー、トナカイ牧場訪問などが楽しめます。",
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
    practicalInfo: {
      population: {
        fr: "Environ 66 000 habitants (ville de Rovaniemi)",
        en: "About 66,000 residents (Rovaniemi town)",
        de: "Rund 66.000 Einwohner (Stadt Rovaniemi)",
        nl: "Ongeveer 66.000 inwoners (stad Rovaniemi)",
        es: "Unos 66.000 habitantes (ciudad de Rovaniemi)",
        it: "Circa 66.000 abitanti (città di Rovaniemi)",
        ja: "約66,000人（ロヴァニエミ市）",
      },
      airport: {
        fr: "Aéroport de Rovaniemi (RVN), à 10 min du centre, vols directs saisonniers depuis plus de 20 villes européennes (nov.-mars)",
        en: "Rovaniemi Airport (RVN), 10 min from downtown, direct seasonal flights from 20+ European cities (Nov-Mar)",
        de: "Flughafen Rovaniemi (RVN), 10 Min vom Zentrum, saisonale Direktflüge aus über 20 europäischen Städten (Nov.-März)",
        nl: "Luchthaven Rovaniemi (RVN), 10 min van het centrum, seizoensgebonden directe vluchten vanuit 20+ Europese steden (nov.-mrt.)",
        es: "Aeropuerto de Rovaniemi (RVN), a 10 min del centro, vuelos directos de temporada desde más de 20 ciudades europeas (nov.-mar.)",
        it: "Aeroporto di Rovaniemi (RVN), a 10 min dal centro, voli diretti stagionali da oltre 20 città europee (nov.-mar.)",
        ja: "ロヴァニエミ空港（RVN）、市街中心部から10分、欧州20都市以上から季節直行便あり（11月〜3月）",
      },
      train: {
        fr: "Oui, train de nuit direct depuis Helsinki (Santa Claus Express, environ 12h)",
        en: "Yes, direct night train from Helsinki (Santa Claus Express, about 12h)",
        de: "Ja, direkter Nachtzug ab Helsinki (Santa Claus Express, ca. 12 Std.)",
        nl: "Ja, directe nachttrein vanuit Helsinki (Santa Claus Express, ca. 12 uur)",
        es: "Sí, tren nocturno directo desde Helsinki (Santa Claus Express, unas 12 h)",
        it: "Sì, treno notturno diretto da Helsinki (Santa Claus Express, circa 12 ore)",
        ja: "あり。ヘルシンキから直通の夜行列車（サンタクロース・エクスプレス、所要約12時間）",
      },
      carRental: {
        fr: "Pas indispensable : navettes et excursions organisées couvrent l'essentiel, utile pour explorer au-delà du centre",
        en: "Not essential: shuttles and organised tours cover the basics, useful for exploring beyond the centre",
        de: "Nicht unbedingt nötig: Shuttles und organisierte Touren decken das Wesentliche ab, nützlich für Ausflüge über das Zentrum hinaus",
        nl: "Niet noodzakelijk: shuttles en georganiseerde tochten dekken het meeste, handig om verder dan het centrum te verkennen",
        es: "No imprescindible: los traslados y las excursiones organizadas cubren lo esencial, útil para explorar más allá del centro",
        it: "Non indispensabile: navette ed escursioni organizzate coprono l'essenziale, utile per esplorare oltre il centro",
        ja: "必須ではありません。シャトルバスや催行ツアーで基本はカバーでき、中心部より先を回るなら車が便利です",
      },
      winterTemp: {
        fr: "-15°C à -5°C en moyenne (jusqu'à -20°C possible)",
        en: "-15°C to -5°C on average (down to -20°C possible)",
        de: "-15°C bis -5°C im Durchschnitt (bis zu -20°C möglich)",
        nl: "-15°C tot -5°C gemiddeld (tot -20°C mogelijk)",
        es: "-15°C a -5°C de media (hasta -20°C es posible)",
        it: "Da -15°C a -5°C in media (fino a -20°C possibile)",
        ja: "平均マイナス15度からマイナス5度（マイナス20度まで下がることもあります）",
      },
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
      {
        question: {
          fr: "Peut-on combiner Village du Père Noël et chasse aux aurores dans le même séjour ?",
          en: "Can I combine Santa Claus Village and aurora hunting in the same trip?",
          de: "Kann man das Weihnachtsmanndorf und die Polarlichtjagd in derselben Reise verbinden?",
          nl: "Kan ik het Kerstman Dorp en noorderlicht spotten combineren in dezelfde reis?",
          es: "¿Se pueden combinar el Pueblo de Papá Noel y la caza de auroras en el mismo viaje?",
          it: "Si possono unire il Villaggio di Babbo Natale e la caccia alle aurore nello stesso viaggio?",
          ja: "サンタクロース村とオーロラ観賞を同じ旅行で両方楽しめますか？",
        },
        answer: {
          fr: "Oui, le village est à environ 8 km du centre-ville, largement faisable en une demi-journée, ce qui laisse le reste du séjour pour les sorties aurores.",
          en: "Yes, the village sits about 8 km from downtown, an easy half-day visit, leaving the rest of the trip free for aurora outings.",
          de: "Ja, das Dorf liegt etwa 8 km vom Stadtzentrum entfernt, gut an einem halben Tag zu schaffen, sodass der Rest der Reise für Polarlicht-Ausflüge bleibt.",
          nl: "Ja, het dorp ligt op ongeveer 8 km van het centrum, prima te doen in een halve dag, waardoor de rest van de reis vrij blijft voor noorderlichttochten.",
          es: "Sí, el pueblo está a unos 8 km del centro, se visita cómodamente en medio día, dejando el resto del viaje libre para las salidas en busca de auroras.",
          it: "Sì, il villaggio si trova a circa 8 km dal centro città, visitabile comodamente in mezza giornata, lasciando il resto del soggiorno libero per le uscite alla ricerca delle aurore.",
          ja: "はい、村は市街中心部から約8kmの距離にあり、半日あれば十分に見学できます。残りの滞在時間はオーロラ観賞に充てられます。",
        },
      },
      {
        question: {
          fr: "Rovaniemi est-il adapté aux familles avec enfants ?",
          en: "Is Rovaniemi suitable for families with children?",
          de: "Ist Rovaniemi für Familien mit Kindern geeignet?",
          nl: "Is Rovaniemi geschikt voor gezinnen met kinderen?",
          es: "¿Es Rovaniemi adecuado para familias con niños?",
          it: "Rovaniemi è adatta alle famiglie con bambini?",
          ja: "ロヴァニエミは子供連れの家族に向いていますか？",
        },
        answer: {
          fr: "Oui : c'est là que l'infrastructure est la plus complète de toute la région, avec hôpital, aéroport et un vrai choix d'activités pensées pour les enfants.",
          en: "Yes: this is where the infrastructure is most complete in the whole region, with a hospital, an airport and a genuine range of activities built for children.",
          de: "Ja: Hier ist die Infrastruktur in der gesamten Region am vollständigsten, mit Krankenhaus, Flughafen und einer echten Auswahl an kindgerechten Aktivitäten.",
          nl: "Ja: hier is de infrastructuur het meest compleet van de hele regio, met een ziekenhuis, een luchthaven en een echte keuze aan activiteiten voor kinderen.",
          es: "Sí: aquí es donde la infraestructura es más completa de toda la región, con hospital, aeropuerto y una auténtica variedad de actividades pensadas para niños.",
          it: "Sì: qui l'infrastruttura è la più completa di tutta la regione, con ospedale, aeroporto e una vera scelta di attività pensate per i bambini.",
          ja: "はい。この地域で最もインフラが整っており、病院や空港があるほか、子供向けアクティビティの選択肢も豊富です。",
        },
      },
      {
        question: {
          fr: "Le centre-ville permet-il de voir les aurores ou faut-il s'éloigner ?",
          en: "Can I see the lights from downtown, or do I need to head out of town?",
          de: "Kann man die Polarlichter im Stadtzentrum sehen oder muss man rausfahren?",
          nl: "Kan ik het noorderlicht vanuit het centrum zien of moet ik de stad uit?",
          es: "¿Se pueden ver las auroras desde el centro o hay que alejarse?",
          it: "Si possono vedere le aurore dal centro città o bisogna allontanarsi?",
          ja: "市街中心部からオーロラを見られますか、それとも郊外に出る必要がありますか？",
        },
        answer: {
          fr: "La pollution lumineuse gêne l'observation en ville : mieux vaut s'éloigner de 10 à 15 minutes ou choisir un hébergement excentré pour de meilleures chances.",
          en: "Light pollution gets in the way downtown: it is worth driving 10 to 15 minutes out, or choosing a stay outside the centre, for better odds.",
          de: "Lichtverschmutzung stört die Beobachtung in der Stadt: Für bessere Chancen lohnt es sich, 10 bis 15 Minuten rauszufahren oder eine Unterkunft außerhalb des Zentrums zu wählen.",
          nl: "Lichtvervuiling hindert de waarneming in de stad: het loont om 10 tot 15 minuten weg te rijden of een verblijf buiten het centrum te kiezen voor betere kansen.",
          es: "La contaminación lumínica dificulta la observación en la ciudad: conviene alejarse entre 10 y 15 minutos o elegir un alojamiento a las afueras para tener mejores probabilidades.",
          it: "L'inquinamento luminoso ostacola l'osservazione in città: conviene allontanarsi di 10-15 minuti o scegliere un alloggio fuori dal centro per avere maggiori probabilità.",
          ja: "市街地では光害が観測の妨げになります。10〜15分ほど郊外に出るか、中心部から離れた宿泊施設を選ぶと観測のチャンスが高まります。",
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
    whereToStay: {
      fr: "Station compacte où tout se fait à pied : hôtels avec spa, appartements en self-catering, et quelques igloos de verre sur la colline au-dessus du village.",
      en: "A compact resort where everything is walkable: hotels with spas, self-catering apartments, and a handful of glass igloos on the hillside above the village.",
      de: "Ein kompakter Ferienort, in dem alles fußläufig erreichbar ist: Hotels mit Spa, Selbstversorger-Apartments und einige Glasiglus am Hang über dem Dorf.",
      nl: "Een compact skidorp waar alles op loopafstand ligt: hotels met spa, appartementen met eigen keuken, en enkele glazen iglos op de heuvel boven het dorp.",
      es: "Una estación compacta donde todo queda a pie: hoteles con spa, apartamentos con cocina propia y algunos iglus de cristal en la colina sobre el pueblo.",
      it: "Una stazione compatta dove tutto è raggiungibile a piedi: hotel con spa, appartamenti self-catering e qualche iglu di vetro sulla collina sopra il villaggio.",
      ja: "すべてが徒歩圏内にまとまったコンパクトなリゾートです。スパ付きホテル、自炊可能なアパートメント、村を見下ろす丘の上にはガラスイグルーも点在します。",
    },
    whatToDo: {
      fr: "Ski et snowboard (plus grande station de Finlande), Spa Water World, traîneaux à chiens et excursions en motoneige.",
      en: "Skiing and snowboarding (Finland's largest resort), Spa Water World, husky sledding and snowmobile trips.",
      de: "Ski- und Snowboardfahren (Finnlands größtes Skigebiet), Spa Water World, Husky-Schlittentouren und Schneemobilausflüge.",
      nl: "Skiën en snowboarden (grootste skigebied van Finland), Spa Water World, husky sleeën en sneeuwscootertochten.",
      es: "Esquí y snowboard (la estación más grande de Finlandia), Spa Water World, trineo de huskies y excursiones en moto de nieve.",
      it: "Sci e snowboard (la più grande stazione della Finlandia), Spa Water World, giri in slitta trainata da husky ed escursioni in motoslitta.",
      ja: "スキー・スノーボード（フィンランド最大のリゾート）、スパ・ウォーターワールド、ハスキー犬のそり体験、スノーモービルツアーが楽しめます。",
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
    practicalInfo: {
      population: {
        fr: "Environ 7 000 habitants (municipalité de Kittilä, Levi n'est pas une ville en soi)",
        en: "About 7,000 residents (Kittilä municipality, Levi itself is not a town)",
        de: "Rund 7.000 Einwohner (Gemeinde Kittilä, Levi selbst ist keine Stadt)",
        nl: "Ongeveer 7.000 inwoners (gemeente Kittilä, Levi zelf is geen stad)",
        es: "Unos 7.000 habitantes (municipio de Kittilä, Levi en sí no es una ciudad)",
        it: "Circa 7.000 abitanti (comune di Kittilä, Levi in sé non è una città)",
        ja: "約7,000人（キッティラ自治体、レヴィ自体は市ではありません）",
      },
      airport: {
        fr: "Aéroport de Kittilä (KTT), à 15 km de Levi, vols directs saisonniers depuis Londres, Vienne et les pays baltes (déc.-mars)",
        en: "Kittilä Airport (KTT), 15 km from Levi, direct seasonal flights from London, Vienna and the Baltics (Dec-Mar)",
        de: "Flughafen Kittilä (KTT), 15 km von Levi entfernt, saisonale Direktflüge aus London, Wien und dem Baltikum (Dez.-März)",
        nl: "Luchthaven Kittilä (KTT), 15 km van Levi, seizoensgebonden directe vluchten vanuit Londen, Wenen en de Baltische staten (dec.-mrt.)",
        es: "Aeropuerto de Kittilä (KTT), a 15 km de Levi, vuelos directos de temporada desde Londres, Viena y los países bálticos (dic.-mar.)",
        it: "Aeroporto di Kittilä (KTT), a 15 km da Levi, voli diretti stagionali da Londra, Vienna e Paesi baltici (dic.-mar.)",
        ja: "キッティラ空港（KTT）、レヴィから15km、ロンドン・ウィーン・バルト諸国から季節直行便あり（12月〜3月）",
      },
      train: {
        fr: "Oui mais indirect : la gare de Kolari est à environ 80 km, puis navette d'environ 1h15",
        en: "Yes but indirect: Kolari station is about 80 km away, then a shuttle of roughly 1h15",
        de: "Ja, aber indirekt: Bahnhof Kolari liegt etwa 80 km entfernt, danach ein Shuttle von rund 1 Std. 15 Min.",
        nl: "Ja maar indirect: station Kolari ligt op ongeveer 80 km, daarna een shuttle van circa 1 uur 15",
        es: "Sí pero indirecto: la estación de Kolari está a unos 80 km, seguida de un traslado de aproximadamente 1h15",
        it: "Sì ma indiretto: la stazione di Kolari è a circa 80 km, seguita da una navetta di circa 1h15",
        ja: "ありますが乗り継ぎが必要です。コラリ駅から約80km、そこからシャトルバスで約1時間15分",
      },
      carRental: {
        fr: "Pas nécessaire sur place : station piétonne, navettes vers l'aéroport et la gare de Kolari",
        en: "Not needed on site: walkable resort, shuttles run to the airport and Kolari station",
        de: "Vor Ort nicht nötig: fußgängerfreundlicher Ort, Shuttles zum Flughafen und zum Bahnhof Kolari",
        nl: "Ter plaatse niet nodig: voetgangersvriendelijk dorp, shuttles naar de luchthaven en station Kolari",
        es: "No hace falta en el propio destino: estación peatonal, con traslados al aeropuerto y a la estación de Kolari",
        it: "Non necessaria sul posto: villaggio pedonale, navette verso l'aeroporto e la stazione di Kolari",
        ja: "現地では不要です。徒歩移動可能な村で、空港とコラリ駅へのシャトルバスがあります",
      },
      winterTemp: {
        fr: "-20°C à -7°C en moyenne, nuits parfois sous -20°C",
        en: "-20°C to -7°C on average, nights sometimes below -20°C",
        de: "-20°C bis -7°C im Durchschnitt, nachts teils unter -20°C",
        nl: "-20°C tot -7°C gemiddeld, 's nachts soms onder de -20°C",
        es: "-20°C a -7°C de media, por la noche a veces por debajo de -20°C",
        it: "Da -20°C a -7°C in media, di notte a volte sotto i -20°C",
        ja: "平均マイナス20度からマイナス7度、夜間はマイナス20度を下回ることもあります",
      },
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
      {
        question: {
          fr: "Levi convient-il aux débutants en ski ?",
          en: "Is Levi good for beginner skiers?",
          de: "Ist Levi für Ski-Anfänger geeignet?",
          nl: "Is Levi geschikt voor beginnende skiërs?",
          es: "¿Es Levi adecuado para esquiadores principiantes?",
          it: "Levi è adatta agli sciatori principianti?",
          ja: "レヴィはスキー初心者にも向いていますか？",
        },
        answer: {
          fr: "Oui, c'est une station familiale avec des pistes variées et des écoles de ski sur place pour tous les niveaux, débutants compris.",
          en: "Yes, it is a family-friendly resort with varied slopes and on-site ski schools catering to every level, including beginners.",
          de: "Ja, es ist ein familienfreundliches Skigebiet mit vielfältigen Pisten und Skischulen vor Ort für alle Niveaus, auch für Anfänger.",
          nl: "Ja, het is een gezinsvriendelijk skigebied met gevarieerde pistes en skischolen ter plaatse voor elk niveau, ook voor beginners.",
          es: "Sí, es una estación familiar con pistas variadas y escuelas de esquí en el propio lugar para todos los niveles, incluidos los principiantes.",
          it: "Sì, è una stazione a misura di famiglia con piste variegate e scuole di sci in loco per tutti i livelli, principianti inclusi.",
          ja: "はい、レヴィはファミリー向けのリゾートで、多様なゲレンデと現地のスキースクールがあり、初心者を含むあらゆるレベルに対応しています。",
        },
      },
      {
        question: {
          fr: "Y a-t-il des activités hors ski et aurores ?",
          en: "Are there activities beyond skiing and the northern lights?",
          de: "Gibt es Aktivitäten außer Skifahren und Polarlichtern?",
          nl: "Zijn er activiteiten naast skiën en noorderlicht?",
          es: "¿Hay actividades además del esquí y las auroras?",
          it: "Ci sono attività oltre allo sci e alle aurore?",
          ja: "スキーとオーロラ以外にもアクティビティはありますか？",
        },
        answer: {
          fr: "Oui : le Spa Water World, les traîneaux à chiens et les excursions en motoneige complètent bien un séjour à Levi.",
          en: "Yes: Spa Water World, husky sledding and snowmobile trips round out a stay in Levi nicely.",
          de: "Ja: Das Spa Water World, Husky-Schlittentouren und Schneemobilausflüge runden einen Aufenthalt in Levi gut ab.",
          nl: "Ja: Spa Water World, husky sleeën en sneeuwscootertochten maken een verblijf in Levi mooi compleet.",
          es: "Sí: el Spa Water World, los trineos de huskies y las excursiones en moto de nieve completan bien una estancia en Levi.",
          it: "Sì: lo Spa Water World, le slitte trainate da husky e le escursioni in motoslitta completano bene un soggiorno a Levi.",
          ja: "はい。スパ・ウォーターワールド、ハスキー犬のそり、スノーモービルツアーなどが、レヴィでの滞在をより充実させてくれます。",
        },
      },
      {
        question: {
          fr: "Faut-il apporter son propre équipement de ski ?",
          en: "Do I need to bring my own ski equipment?",
          de: "Muss man seine eigene Skiausrüstung mitbringen?",
          nl: "Moet ik mijn eigen ski-uitrusting meenemen?",
          es: "¿Hace falta traer el propio equipo de esquí?",
          it: "Bisogna portare il proprio equipaggiamento da sci?",
          ja: "自分のスキー用品を持参する必要がありますか？",
        },
        answer: {
          fr: "Non, la plupart des visiteurs louent sur place : les magasins de location au pied des pistes couvrent skis, snowboards et vêtements techniques.",
          en: "No, most visitors rent locally: shops at the foot of the slopes cover skis, snowboards and technical clothing.",
          de: "Nein, die meisten Besucher leihen sich alles vor Ort: Verleihgeschäfte am Pistenfuß bieten Ski, Snowboards und technische Kleidung.",
          nl: "Nee, de meeste bezoekers huren ter plaatse: verhuurwinkels aan de voet van de pistes bieden ski's, snowboards en technische kleding.",
          es: "No, la mayoría de los visitantes alquila allí mismo: las tiendas de alquiler al pie de las pistas ofrecen esquís, snowboards y ropa técnica.",
          it: "No, la maggior parte dei visitatori noleggia sul posto: i negozi ai piedi delle piste offrono sci, snowboard e abbigliamento tecnico.",
          ja: "いいえ、ほとんどの旅行者は現地でレンタルします。ゲレンデ麓のレンタルショップでスキー、スノーボード、機能的なウェアまで揃います。",
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
    whereToStay: {
      fr: "Hôtels au centre du village, cabanes forestières avec sauna privé, et Kakslauttanen à proximité pour les igloos de verre et les huttes en glace.",
      en: "Hotels in the village centre, forest cabins with a private sauna, and Kakslauttanen nearby for glass igloos and ice huts.",
      de: "Hotels im Dorfzentrum, Waldhütten mit privater Sauna und Kakslauttanen in der Nähe für Glasiglus und Eishütten.",
      nl: "Hotels in het dorpscentrum, boshutten met eigen sauna, en Kakslauttanen vlakbij voor glazen iglos en ijshutten.",
      es: "Hoteles en el centro del pueblo, cabañas en el bosque con sauna privada, y Kakslauttanen cerca para iglus de cristal y cabañas de hielo.",
      it: "Hotel nel centro del villaggio, baite nel bosco con sauna privata, e Kakslauttanen nelle vicinanze per iglu di vetro e capanne di ghiaccio.",
      ja: "村の中心部のホテル、専用サウナ付きの森のキャビン、そして近くにはガラスイグルーやアイスハットで知られるカクスラウッタネンもあります。",
    },
    whatToDo: {
      fr: "Randonnée et raquettes dans le parc national d'Urho Kekkonen, traîneaux à chiens, et un ciel presque sans pollution lumineuse pour l'observation.",
      en: "Hiking and snowshoeing in Urho Kekkonen National Park, husky sledding, and near-zero light pollution for aurora watching.",
      de: "Wandern und Schneeschuhwandern im Urho-Kekkonen-Nationalpark, Husky-Schlittentouren und ein Himmel mit fast keiner Lichtverschmutzung zur Beobachtung.",
      nl: "Wandelen en sneeuwschoenwandelen in het Urho Kekkonen Nationaal Park, husky sleeën, en vrijwel geen lichtvervuiling om het noorderlicht te zien.",
      es: "Senderismo y raquetas de nieve en el Parque Nacional de Urho Kekkonen, trineo de huskies, y un cielo casi sin contaminación lumínica para observar.",
      it: "Escursioni e racchette da neve nel Parco Nazionale di Urho Kekkonen, slitte trainate da husky, e un cielo quasi privo di inquinamento luminoso per l'osservazione.",
      ja: "ウルホ・ケッコネン国立公園でのハイキングやスノーシュー、ハスキー犬のそり体験、そしてオーロラ観賞に理想的な光害のほとんどない空が魅力です。",
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
    practicalInfo: {
      population: {
        fr: "Environ 7 200 habitants (municipalité d'Inari, très étendue et peu peuplée)",
        en: "About 7,200 residents (Inari municipality, vast and sparsely populated)",
        de: "Rund 7.200 Einwohner (Gemeinde Inari, sehr groß und dünn besiedelt)",
        nl: "Ongeveer 7.200 inwoners (gemeente Inari, zeer uitgestrekt en dunbevolkt)",
        es: "Unos 7.200 habitantes (municipio de Inari, muy extenso y poco poblado)",
        it: "Circa 7.200 abitanti (comune di Inari, molto vasto e poco popolato)",
        ja: "約7,200人（イナリ自治体、面積が広く人口密度は低い）",
      },
      airport: {
        fr: "Aéroport d'Ivalo (IVL), à 30 min de route, vols directs saisonniers depuis Londres, Paris, Francfort, Amsterdam, Zurich (déc.-mars)",
        en: "Ivalo Airport (IVL), 30 min by road, direct seasonal flights from London, Paris, Frankfurt, Amsterdam, Zurich (Dec-Mar)",
        de: "Flughafen Ivalo (IVL), 30 Min. Fahrt entfernt, saisonale Direktflüge aus London, Paris, Frankfurt, Amsterdam, Zürich (Dez.-März)",
        nl: "Luchthaven Ivalo (IVL), 30 min rijden, seizoensgebonden directe vluchten vanuit Londen, Parijs, Frankfurt, Amsterdam, Zürich (dec.-mrt.)",
        es: "Aeropuerto de Ivalo (IVL), a 30 min en coche, vuelos directos de temporada desde Londres, París, Fráncfort, Ámsterdam, Zúrich (dic.-mar.)",
        it: "Aeroporto di Ivalo (IVL), a 30 min di auto, voli diretti stagionali da Londra, Parigi, Francoforte, Amsterdam, Zurigo (dic.-mar.)",
        ja: "イヴァロ空港（IVL）、車で30分、ロンドン・パリ・フランクフルト・アムステルダム・チューリッヒから季節直行便あり（12月〜3月）",
      },
      train: {
        fr: "Non : pas de gare sur place, la plus proche est à Rovaniemi (environ 3-4h de route/bus)",
        en: "No: no station on site, the nearest is Rovaniemi (about 3-4h by road/bus)",
        de: "Nein: kein Bahnhof vor Ort, der nächste liegt in Rovaniemi (ca. 3-4 Std. mit Auto/Bus)",
        nl: "Nee: geen station ter plaatse, het dichtstbijzijnde is Rovaniemi (ca. 3-4 uur met auto/bus)",
        es: "No: no hay estación en el lugar, la más cercana está en Rovaniemi (unas 3-4 h en coche/autobús)",
        it: "No: nessuna stazione sul posto, la più vicina è a Rovaniemi (circa 3-4 ore di auto/bus)",
        ja: "ありません。現地に駅はなく、最寄りはロヴァニエミ（車・バスで約3〜4時間）です",
      },
      carRental: {
        fr: "Utile mais pas obligatoire : navettes depuis l'aéroport et excursions organisées existent, une voiture facilite l'exploration du parc national",
        en: "Useful but not mandatory: airport shuttles and organised tours exist, a car helps explore the national park",
        de: "Nützlich, aber nicht zwingend: Flughafen-Shuttles und organisierte Touren gibt es, ein Auto erleichtert die Erkundung des Nationalparks",
        nl: "Handig maar niet verplicht: luchthavenshuttles en georganiseerde tochten bestaan, een auto maakt het verkennen van het nationaal park makkelijker",
        es: "Útil pero no obligatorio: existen traslados desde el aeropuerto y excursiones organizadas, un coche facilita explorar el parque nacional",
        it: "Utile ma non obbligatoria: esistono navette dall'aeroporto ed escursioni organizzate, un'auto facilita l'esplorazione del parco nazionale",
        ja: "必須ではありませんが便利です。空港シャトルや催行ツアーはありますが、国立公園を回るなら車があると自由が利きます",
      },
      winterTemp: {
        fr: "-20°C à -8°C en moyenne, parmi les plus froides de la sélection",
        en: "-20°C to -8°C on average, among the coldest in this selection",
        de: "-20°C bis -8°C im Durchschnitt, mit die kältesten Werte dieser Auswahl",
        nl: "-20°C tot -8°C gemiddeld, een van de koudste in deze selectie",
        es: "-20°C a -8°C de media, de las más frías de esta selección",
        it: "Da -20°C a -8°C in media, tra le più fredde di questa selezione",
        ja: "平均マイナス20度からマイナス8度、このリストの中でも特に寒い部類です",
      },
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
      {
        question: {
          fr: "Pourquoi le ciel est-il réputé plus dégagé à Saariselkä qu'à Rovaniemi ?",
          en: "Why is the sky said to be clearer in Saariselka than in Rovaniemi?",
          de: "Warum gilt der Himmel in Saariselkä als klarer als in Rovaniemi?",
          nl: "Waarom heet de lucht in Saariselkä helderder dan in Rovaniemi?",
          es: "¿Por qué se dice que el cielo está más despejado en Saariselkä que en Rovaniemi?",
          it: "Perché il cielo è considerato più limpido a Saariselkä rispetto a Rovaniemi?",
          ja: "サーリセルカの空はロヴァニエミより晴れやすいと言われるのはなぜですか？",
        },
        answer: {
          fr: "Le village est nettement plus petit et plus au nord, avec beaucoup moins de pollution lumineuse qu'une ville comme Rovaniemi.",
          en: "The village is much smaller and further north, with far less light pollution than a town the size of Rovaniemi.",
          de: "Das Dorf ist deutlich kleiner und liegt weiter nördlich, mit viel weniger Lichtverschmutzung als eine Stadt wie Rovaniemi.",
          nl: "Het dorp is veel kleiner en ligt verder naar het noorden, met veel minder lichtvervuiling dan een stad als Rovaniemi.",
          es: "El pueblo es mucho más pequeño y está más al norte, con mucha menos contaminación lumínica que una ciudad como Rovaniemi.",
          it: "Il villaggio è molto più piccolo e più a nord, con molto meno inquinamento luminoso rispetto a una città come Rovaniemi.",
          ja: "村はロヴァニエミよりもかなり小さく、より北に位置しており、光害がはるかに少ないためです。",
        },
      },
      {
        question: {
          fr: "Le parc national d'Urho Kekkonen est-il accessible sans voiture ?",
          en: "Is Urho Kekkonen National Park reachable without a car?",
          de: "Ist der Urho-Kekkonen-Nationalpark ohne Auto erreichbar?",
          nl: "Is het Urho Kekkonen Nationaal Park bereikbaar zonder auto?",
          es: "¿Se puede llegar al Parque Nacional de Urho Kekkonen sin coche?",
          it: "Il Parco Nazionale di Urho Kekkonen è raggiungibile senza auto?",
          ja: "ウルホ・ケッコネン国立公園は車なしでも行けますか？",
        },
        answer: {
          fr: "Plusieurs hébergements et navettes locales permettent d'y accéder sans voiture, mais avoir un véhicule donne davantage de liberté pour explorer.",
          en: "Several stays and local shuttles give access without a car, but having your own vehicle gives more freedom to explore.",
          de: "Mehrere Unterkünfte und lokale Shuttles ermöglichen den Zugang ohne Auto, ein eigenes Fahrzeug gibt jedoch mehr Freiheit beim Erkunden.",
          nl: "Verschillende verblijven en lokale shuttles bieden toegang zonder auto, maar een eigen voertuig geeft meer vrijheid om te verkennen.",
          es: "Varios alojamientos y lanzaderas locales permiten acceder sin coche, aunque tener vehículo propio da más libertad para explorar.",
          it: "Diversi alloggi e navette locali permettono di accedervi senza auto, ma avere un proprio veicolo dà più libertà di esplorazione.",
          ja: "宿泊施設や地元のシャトルを利用すれば車なしでもアクセス可能ですが、自分の車があればより自由に探索できます。",
        },
      },
      {
        question: {
          fr: "Kakslauttanen est-il à Saariselkä même ?",
          en: "Is Kakslauttanen in Saariselka itself?",
          de: "Liegt Kakslauttanen direkt in Saariselkä?",
          nl: "Ligt Kakslauttanen in Saariselkä zelf?",
          es: "¿Está Kakslauttanen en el propio Saariselkä?",
          it: "Kakslauttanen si trova a Saariselkä stessa?",
          ja: "カクスラウッタネンはサーリセルカ自体にありますか？",
        },
        answer: {
          fr: "Il se trouve dans la même zone, à quelques minutes de route du village, ce qui en fait une excursion ou une option d'hébergement facile à combiner.",
          en: "It sits in the same area, a short drive from the village, making it an easy day trip or lodging option to combine with a Saariselka stay.",
          de: "Es liegt im selben Gebiet, wenige Autominuten vom Dorf entfernt, was es zu einem einfachen Ausflug oder einer leicht kombinierbaren Unterkunftsoption macht.",
          nl: "Het ligt in hetzelfde gebied, een korte rit van het dorp, wat het een makkelijke dagtrip of logeeroptie maakt om te combineren met een verblijf in Saariselkä.",
          es: "Se encuentra en la misma zona, a pocos minutos en coche del pueblo, lo que lo convierte en una excursión o alojamiento fácil de combinar con una estancia en Saariselkä.",
          it: "Si trova nella stessa zona, a pochi minuti di auto dal villaggio, il che lo rende una facile escursione o un'opzione di alloggio da combinare con un soggiorno a Saariselkä.",
          ja: "同じエリア内にあり、村から車で数分の距離です。サーリセルカ滞在と組み合わせやすい日帰り先や宿泊先の一つです。",
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
    whereToStay: {
      fr: "Du choix économique en auberge jusqu'à l'Icehotel lui-même, en passant par des lodges tenus par des familles samies.",
      en: "Everything from budget hostels to the Icehotel itself, plus lodges run by Sami families.",
      de: "Von der günstigen Herberge bis zum Icehotel selbst, dazu Lodges, die von samischen Familien geführt werden.",
      nl: "Van een budgethostel tot het Icehotel zelf, en lodges die worden gerund door Samische families.",
      es: "Desde un albergue económico hasta el propio Icehotel, pasando por lodges gestionados por familias sami.",
      it: "Dall'ostello economico fino all'Icehotel stesso, passando per lodge gestiti da famiglie sami.",
      ja: "格安ホステルからアイスホテルそのものまで幅広く、サーミの家族が営むロッジという選択肢もあります。",
    },
    whatToDo: {
      fr: "Suites d'art de l'Icehotel, découverte de la culture same et de l'élevage de rennes, télésiège de l'Aurora Sky Station à Abisko.",
      en: "The Icehotel's art suites, Sami culture and reindeer herding, and the Aurora Sky Station chairlift in Abisko.",
      de: "Die Kunst-Suiten des Icehotel, samische Kultur und Rentierzucht sowie der Sessellift der Aurora Sky Station in Abisko.",
      nl: "De kunst-suites van het Icehotel, Samische cultuur en rendierhoederij, en de stoeltjeslift van het Aurora Sky Station in Abisko.",
      es: "Las suites de arte del Icehotel, la cultura sami y el pastoreo de renos, y el telesilla de la Aurora Sky Station en Abisko.",
      it: "Le suite d'arte dell'Icehotel, la cultura sami e l'allevamento di renne, e la seggiovia dell'Aurora Sky Station ad Abisko.",
      ja: "アイスホテルのアートスイート、サーミ文化とトナカイ放牧の見学、アビスコにあるオーロラスカイステーションのリフト体験などが楽しめます。",
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
    practicalInfo: {
      population: {
        fr: "Environ 22 000 habitants (commune de Kiruna)",
        en: "About 22,000 residents (Kiruna municipality)",
        de: "Rund 22.000 Einwohner (Gemeinde Kiruna)",
        nl: "Ongeveer 22.000 inwoners (gemeente Kiruna)",
        es: "Unos 22.000 habitantes (municipio de Kiruna)",
        it: "Circa 22.000 abitanti (comune di Kiruna)",
        ja: "約22,000人（キルナ自治体）",
      },
      airport: {
        fr: "Aéroport de Kiruna (KRN), vols directs saisonniers depuis Copenhague (déc.-mars) et Düsseldorf (fév.-mars), liaison quotidienne avec Stockholm",
        en: "Kiruna Airport (KRN), direct seasonal flights from Copenhagen (Dec-Mar) and Düsseldorf (Feb-Mar), daily link to Stockholm",
        de: "Flughafen Kiruna (KRN), saisonale Direktflüge aus Kopenhagen (Dez.-März) und Düsseldorf (Feb.-März), tägliche Verbindung nach Stockholm",
        nl: "Luchthaven Kiruna (KRN), seizoensgebonden directe vluchten vanuit Kopenhagen (dec.-mrt.) en Düsseldorf (feb.-mrt.), dagelijkse verbinding met Stockholm",
        es: "Aeropuerto de Kiruna (KRN), vuelos directos de temporada desde Copenhague (dic.-mar.) y Düsseldorf (feb.-mar.), conexión diaria con Estocolmo",
        it: "Aeroporto di Kiruna (KRN), voli diretti stagionali da Copenaghen (dic.-mar.) e Düsseldorf (feb.-mar.), collegamento giornaliero con Stoccolma",
        ja: "キルナ空港（KRN）、コペンハーゲンから季節直行便あり（12月〜3月）、デュッセルドルフからも運航（2月〜3月）、ストックホルムとは毎日運航",
      },
      train: {
        fr: "Oui : Kiruna et la gare d'Abisko Östra sont toutes deux sur la ligne du train de nuit depuis Stockholm (environ 17h)",
        en: "Yes: Kiruna and Abisko Östra station both sit on the Stockholm night train line (about 17h)",
        de: "Ja: Kiruna und der Bahnhof Abisko Östra liegen beide an der Nachtzuglinie ab Stockholm (ca. 17 Std.)",
        nl: "Ja: Kiruna en station Abisko Östra liggen beide aan de nachttreinlijn vanuit Stockholm (ca. 17 uur)",
        es: "Sí: Kiruna y la estación de Abisko Östra están ambas en la línea del tren nocturno desde Estocolmo (unas 17 h)",
        it: "Sì: Kiruna e la stazione di Abisko Östra si trovano entrambe sulla linea del treno notturno da Stoccolma (circa 17 ore)",
        ja: "あります。キルナとアビスコ・オストラ駅はどちらもストックホルムからの夜行列車の路線上にあります（所要約17時間）",
      },
      carRental: {
        fr: "Pas indispensable entre les deux : train et bus locaux relient Kiruna et Abisko en un peu plus d'une heure",
        en: "Not essential between the two: train and local buses connect Kiruna and Abisko in just over an hour",
        de: "Zwischen beiden Orten nicht unbedingt nötig: Zug und lokale Busse verbinden Kiruna und Abisko in gut einer Stunde",
        nl: "Tussen beide niet noodzakelijk: trein en lokale bussen verbinden Kiruna en Abisko in iets meer dan een uur",
        es: "No imprescindible entre ambos: tren y autobuses locales conectan Kiruna y Abisko en poco más de una hora",
        it: "Non indispensabile tra le due località: treno e autobus locali collegano Kiruna e Abisko in poco più di un'ora",
        ja: "両地点間では必須ではありません。列車と地元バスでキルナとアビスコは1時間強で結ばれています",
      },
      winterTemp: {
        fr: "-20°C à -7°C en moyenne, nuits pouvant descendre sous -25°C",
        en: "-20°C to -7°C on average, nights can drop below -25°C",
        de: "-20°C bis -7°C im Durchschnitt, nachts teils unter -25°C",
        nl: "-20°C tot -7°C gemiddeld, 's nachts soms onder de -25°C",
        es: "-20°C a -7°C de media, por la noche puede bajar de -25°C",
        it: "Da -20°C a -7°C in media, di notte può scendere sotto i -25°C",
        ja: "平均マイナス20度からマイナス7度、夜間はマイナス25度を下回ることもあります",
      },
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
      {
        question: {
          fr: "Pourquoi le ciel d'Abisko est-il considéré comme particulièrement fiable pour les aurores ?",
          en: "Why is Abisko's sky considered particularly reliable for auroras?",
          de: "Warum gilt der Himmel über Abisko als besonders zuverlässig für Polarlichter?",
          nl: "Waarom geldt de lucht boven Abisko als bijzonder betrouwbaar voor noorderlicht?",
          es: "¿Por qué se considera el cielo de Abisko especialmente fiable para las auroras?",
          it: "Perché il cielo di Abisko è considerato particolarmente affidabile per le aurore?",
          ja: "アビスコの空がオーロラ観測において特に信頼できると言われるのはなぜですか？",
        },
        answer: {
          fr: "Abisko bénéficie d'un microclimat sec, surnommé le « Blue Hole », avec généralement moins de nuages que le reste de la Laponie scandinave.",
          en: "Abisko sits in a dry microclimate nicknamed the \"Blue Hole,\" with generally fewer clouds than the rest of Scandinavian Lapland.",
          de: "Abisko liegt in einem trockenen Mikroklima, das als „Blue Hole“ bekannt ist, mit im Allgemeinen weniger Wolken als im übrigen skandinavischen Lappland.",
          nl: "Abisko ligt in een droog microklimaat dat bekendstaat als het 'Blue Hole', met over het algemeen minder bewolking dan de rest van Scandinavisch Lapland.",
          es: "Abisko se beneficia de un microclima seco, apodado el «Blue Hole», con generalmente menos nubes que el resto de la Laponia escandinava.",
          it: "Abisko beneficia di un microclima secco, soprannominato «Blue Hole», con generalmente meno nuvole rispetto al resto della Lapponia scandinava.",
          ja: "アビスコは「ブルーホール」と呼ばれる乾燥した微気候の中にあり、北欧ラップランドの他の地域に比べて雲が少ない傾向があります。",
        },
      },
      {
        question: {
          fr: "Kiruna et Abisko se visitent-ils ensemble ?",
          en: "Can Kiruna and Abisko be visited together?",
          de: "Lassen sich Kiruna und Abisko gemeinsam besuchen?",
          nl: "Zijn Kiruna en Abisko samen te bezoeken?",
          es: "¿Se pueden visitar Kiruna y Abisko juntos?",
          it: "Kiruna e Abisko si possono visitare insieme?",
          ja: "キルナとアビスコは一緒に訪れることができますか？",
        },
        answer: {
          fr: "Oui, ils sont complémentaires et distants d'environ une heure de route : l'Icehotel côté Kiruna, le ciel le plus dégagé côté Abisko.",
          en: "Yes, they complement each other and sit about an hour apart by road: the Icehotel on the Kiruna side, the clearest skies on the Abisko side.",
          de: "Ja, sie ergänzen sich und liegen etwa eine Autostunde voneinander entfernt: das Icehotel auf der Kiruna-Seite, der klarste Himmel auf der Abisko-Seite.",
          nl: "Ja, ze vullen elkaar aan en liggen ongeveer een uur rijden van elkaar: het Icehotel aan de kant van Kiruna, de helderste luchten aan de kant van Abisko.",
          es: "Sí, se complementan y están a aproximadamente una hora en coche: el Icehotel en el lado de Kiruna, los cielos más despejados en el lado de Abisko.",
          it: "Sì, si completano a vicenda e distano circa un'ora di auto: l'Icehotel dal lato di Kiruna, i cieli più limpidi dal lato di Abisko.",
          ja: "はい、両者は補完関係にあり、車で約1時間の距離です。キルナ側にはアイスホテルが、アビスコ側には最も晴天率の高い空があります。",
        },
      },
      {
        question: {
          fr: "Peut-on découvrir la culture same pendant le séjour ?",
          en: "Can I experience Sami culture during the stay?",
          de: "Kann man während des Aufenthalts die samische Kultur erleben?",
          nl: "Kan ik tijdens het verblijf kennismaken met de Samische cultuur?",
          es: "¿Se puede conocer la cultura sami durante la estancia?",
          it: "Si può scoprire la cultura sami durante il soggiorno?",
          ja: "滞在中にサーミ文化に触れることはできますか？",
        },
        answer: {
          fr: "Oui, plusieurs lodges de la région sont tenus par des familles samies et proposent des visites autour de l'élevage de rennes.",
          en: "Yes, several lodges in the region are run by Sami families and offer visits centred on reindeer herding.",
          de: "Ja, mehrere Lodges der Region werden von samischen Familien geführt und bieten Besuche rund um die Rentierzucht an.",
          nl: "Ja, meerdere lodges in de regio worden gerund door Samische families en bieden bezoeken rond rendierhoederij aan.",
          es: "Sí, varios lodges de la región están gestionados por familias sami y ofrecen visitas centradas en el pastoreo de renos.",
          it: "Sì, diversi lodge della regione sono gestiti da famiglie sami e propongono visite incentrate sull'allevamento delle renne.",
          ja: "はい、この地域のロッジの中にはサーミの家族が経営するものがあり、トナカイの放牧を中心とした見学ができます。",
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
    whereToStay: {
      fr: "Une vraie ville nordique : hôtels de chaîne près du port, auberges économiques, et quelques suites avec spa haut de gamme.",
      en: "A real Nordic city: chain hotels near the harbour, budget hostels, and a handful of upscale spa suites.",
      de: "Eine echte nordische Stadt: Kettenhotels nahe dem Hafen, günstige Herbergen und einige hochwertige Spa-Suiten.",
      nl: "Een echte Noordse stad: ketenhotels bij de haven, budgethostels, en enkele luxe spa-suites.",
      es: "Una auténtica ciudad nórdica: hoteles de cadena cerca del puerto, albergues económicos y algunas suites de spa de gama alta.",
      it: "Una vera città nordica: hotel di catena vicino al porto, ostelli economici e alcune suite spa di fascia alta.",
      ja: "本格的な北欧の街です。港の近くのチェーンホテル、格安ホステル、そして高級スパ付きスイートも一部あります。",
    },
    whatToDo: {
      fr: "Sorties bateau à la chasse aux aurores sur le fjord, visite de la cathédrale Arctique et télécabine du Fjellheisen.",
      en: "Boat-based aurora chases out on the fjord, a visit to the Arctic Cathedral, and the Fjellheisen cable car.",
      de: "Boots-Polarlichtjagden auf dem Fjord, ein Besuch der Eismeerkathedrale und die Fjellheisen-Seilbahn.",
      nl: "Noorderlichttochten per boot op de fjord, een bezoek aan de Ishavskatedralen en de Fjellheisen-kabelbaan.",
      es: "Salidas en barco para cazar auroras en el fiordo, visita a la Catedral Ártica y el teleférico de Fjellheisen.",
      it: "Uscite in barca alla caccia delle aurore sul fiordo, visita alla Cattedrale Artica e la funivia Fjellheisen.",
      ja: "フィヨルドでのオーロラ観賞ボートツアー、北極大聖堂の見学、フィエルヘイセンのケーブルカーなどが楽しめます。",
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
    practicalInfo: {
      population: {
        fr: "Environ 59 000 habitants (Tromsø, la plus peuplée de la sélection)",
        en: "About 59,000 residents (Tromsø, the largest in this selection)",
        de: "Rund 59.000 Einwohner (Tromsø, die größte Stadt dieser Auswahl)",
        nl: "Ongeveer 59.000 inwoners (Tromsø, de grootste stad in deze selectie)",
        es: "Unos 59.000 habitantes (Tromsø, la más poblada de esta selección)",
        it: "Circa 59.000 abitanti (Tromsø, la più popolosa di questa selezione)",
        ja: "約59,000人（トロムソ、このリストの中で最も人口が多い）",
      },
      airport: {
        fr: "Aéroport de Tromsø (TOS), vols directs toute l'année depuis Oslo et en saison depuis Londres, Francfort, Amsterdam, Bruxelles, Munich",
        en: "Tromsø Airport (TOS), year-round direct flights from Oslo and seasonal ones from London, Frankfurt, Amsterdam, Brussels, Munich",
        de: "Flughafen Tromsø (TOS), ganzjährige Direktflüge ab Oslo, saisonal auch aus London, Frankfurt, Amsterdam, Brüssel, München",
        nl: "Luchthaven Tromsø (TOS), het hele jaar directe vluchten vanuit Oslo, seizoensgebonden ook vanuit Londen, Frankfurt, Amsterdam, Brussel, München",
        es: "Aeropuerto de Tromsø (TOS), vuelos directos todo el año desde Oslo y de temporada desde Londres, Fráncfort, Ámsterdam, Bruselas, Múnich",
        it: "Aeroporto di Tromsø (TOS), voli diretti tutto l'anno da Oslo e stagionali da Londra, Francoforte, Amsterdam, Bruxelles, Monaco",
        ja: "トロムソ空港（TOS）、オスロとは通年直行便、季節便としてロンドン・フランクフルト・アムステルダム・ブリュッセル・ミュンヘンからも運航",
      },
      train: {
        fr: "Non : le réseau ferré norvégien s'arrête à Bodø, bien plus au sud",
        en: "No: Norway's rail network ends at Bodø, well to the south",
        de: "Nein: Das norwegische Bahnnetz endet in Bodø, deutlich weiter südlich",
        nl: "Nee: het Noorse spoornet eindigt in Bodø, veel verder naar het zuiden",
        es: "No: la red ferroviaria noruega termina en Bodø, bastante más al sur",
        it: "No: la rete ferroviaria norvegese termina a Bodø, molto più a sud",
        ja: "ありません。ノルウェーの鉄道網はずっと南のボードーで終わっています",
      },
      carRental: {
        fr: "Pas nécessaire en ville : tout se fait à pied, une voiture n'apporte pas grand-chose car la chasse aux aurores s'organise en excursion",
        en: "Not needed in town: everything is walkable, a car adds little since aurora hunting runs as organised tours",
        de: "In der Stadt nicht nötig: alles ist zu Fuß erreichbar, ein Auto bringt wenig, da die Polarlichtjagd als organisierte Tour stattfindet",
        nl: "In de stad niet nodig: alles is te voet bereikbaar, een auto heeft weinig nut omdat het noorderlicht spotten als georganiseerde tocht verloopt",
        es: "No hace falta en la ciudad: todo se recorre a pie, un coche aporta poco porque la caza de auroras se organiza como excursión",
        it: "Non necessaria in città: tutto è raggiungibile a piedi, un'auto serve a poco perché la caccia alle aurore si svolge come escursione organizzata",
        ja: "市内では不要です。すべて徒歩圏内で、オーロラ観賞は催行ツアーが中心のため車の出番はあまりありません",
      },
      winterTemp: {
        fr: "-5°C à 0°C en moyenne grâce au Gulf Stream, nettement plus doux que la Laponie finlandaise ou suédoise",
        en: "-5°C to 0°C on average thanks to the Gulf Stream, notably milder than Finnish or Swedish Lapland",
        de: "-5°C bis 0°C im Durchschnitt dank Golfstrom, deutlich milder als finnisch oder schwedisch Lappland",
        nl: "-5°C tot 0°C gemiddeld dankzij de Golfstroom, merkbaar milder dan Fins of Zweeds Lapland",
        es: "-5°C a 0°C de media gracias a la Corriente del Golfo, notablemente más templado que la Laponia finlandesa o sueca",
        it: "Da -5°C a 0°C in media grazie alla Corrente del Golfo, nettamente più mite della Lapponia finlandese o svedese",
        ja: "メキシコ湾流の影響で平均マイナス5度から0度、フィンランドやスウェーデンのラップランドよりかなり温暖です",
      },
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
      {
        question: {
          fr: "Faut-il une voiture à Tromsø ?",
          en: "Do I need a car in Tromso?",
          de: "Braucht man in Tromsø ein Auto?",
          nl: "Heb ik een auto nodig in Tromsø?",
          es: "¿Hace falta coche en Tromsø?",
          it: "Serve un'auto a Tromsø?",
          ja: "トロムソでは車が必要ですか？",
        },
        answer: {
          fr: "Non, c'est une vraie ville praticable à pied, avec des hôtels centraux, contrairement aux autres destinations de ce guide.",
          en: "No, it is a real walkable city with central hotels, unlike the other destinations in this guide.",
          de: "Nein, es ist eine echte, zu Fuß erkundbare Stadt mit zentral gelegenen Hotels, anders als die übrigen Reiseziele dieses Ratgebers.",
          nl: "Nee, het is een echte stad die te voet te doen is, met centrale hotels, in tegenstelling tot de andere bestemmingen in deze gids.",
          es: "No, es una ciudad de verdad, recorrible a pie, con hoteles céntricos, a diferencia de los demás destinos de esta guía.",
          it: "No, è una vera città percorribile a piedi, con hotel centrali, a differenza delle altre destinazioni di questa guida.",
          ja: "いいえ、他のこのガイドの目的地とは異なり、トロムソは徒歩で回れる本格的な街で、中心部にホテルが集まっています。",
        },
      },
      {
        question: {
          fr: "Qu'apportent les sorties aurores en bateau par rapport à une sortie terrestre ?",
          en: "What do boat aurora tours offer compared to a land-based tour?",
          de: "Was bieten Polarlicht-Bootstouren im Vergleich zu einer Tour an Land?",
          nl: "Wat bieden noorderlichttochten per boot in vergelijking met een tocht over land?",
          es: "¿Qué aportan las excursiones de auroras en barco frente a una salida terrestre?",
          it: "Cosa offrono le escursioni per le aurore in barca rispetto a una in terraferma?",
          ja: "ボートによるオーロラツアーは陸上のツアーと比べて何が違いますか？",
        },
        answer: {
          fr: "L'accès à des zones sans pollution lumineuse le long du fjord et un angle de vue différent, mais le résultat dépend toujours de la météo comme pour toute sortie.",
          en: "Access to light-pollution-free spots along the fjord and a different vantage point, though the outcome still depends on the weather like any outing.",
          de: "Zugang zu lichtverschmutzungsfreien Bereichen entlang des Fjords und eine andere Perspektive, wobei das Ergebnis wie bei jedem Ausflug vom Wetter abhängt.",
          nl: "Toegang tot plekken zonder lichtvervuiling langs de fjord en een ander gezichtspunt, al blijft het resultaat zoals bij elke tocht afhankelijk van het weer.",
          es: "Acceso a zonas sin contaminación lumínica a lo largo del fiordo y un ángulo de vista distinto, aunque el resultado sigue dependiendo del tiempo como en cualquier salida.",
          it: "Accesso a zone senza inquinamento luminoso lungo il fiordo e un punto di vista diverso, anche se il risultato dipende comunque dal meteo come per qualsiasi uscita.",
          ja: "フィヨルド沿いの光害のないエリアへのアクセスと、陸上とは異なる視点が得られます。ただし結果は他のツアーと同様、天候次第です。",
        },
      },
      {
        question: {
          fr: "Tromsø est-elle une bonne base si on ne veut pas louer de voiture ?",
          en: "Is Tromso a good base if I don't want to rent a car?",
          de: "Ist Tromsø eine gute Basis, wenn man kein Auto mieten möchte?",
          nl: "Is Tromsø een goede uitvalsbasis als ik geen auto wil huren?",
          es: "¿Es Tromsø una buena base si no quiero alquilar coche?",
          it: "Tromsø è una buona base se non si vuole noleggiare un'auto?",
          ja: "レンタカーを借りたくない場合、トロムソは良い拠点になりますか？",
        },
        answer: {
          fr: "Oui, c'est la seule destination de ce guide où tout est accessible à pied ou en transport en commun.",
          en: "Yes, it is the only destination in this guide where everything is reachable on foot or by public transport.",
          de: "Ja, es ist das einzige Reiseziel in diesem Ratgeber, in dem alles zu Fuß oder mit öffentlichen Verkehrsmitteln erreichbar ist.",
          nl: "Ja, het is de enige bestemming in deze gids waar alles te voet of met het openbaar vervoer te bereiken is.",
          es: "Sí, es el único destino de esta guía donde todo es accesible a pie o en transporte público.",
          it: "Sì, è l'unica destinazione di questa guida dove tutto è raggiungibile a piedi o con i mezzi pubblici.",
          ja: "はい、このガイドの中で徒歩や公共交通機関だけですべて回れる唯一の目的地です。",
        },
      },
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}
