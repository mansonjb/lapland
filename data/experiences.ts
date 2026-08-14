type Localized = {
  fr: string;
  en: string;
  de: string;
  nl: string;
  es: string;
  it: string;
};

export type Experience = {
  slug: string;
  /** Simple emoji icon, no external asset needed. */
  icon: string;
  title: Localized;
  description: Localized;
  /** Same-page anchor, e.g. "#hebergements". Set this OR destinationSlug, not both. */
  anchor?: string;
  /** Slug of a destination in data/destinations.ts, resolved with localeHref. */
  destinationSlug?: string;
};

export const EXPERIENCES: Experience[] = [
  {
    slug: "aurores-boreales",
    icon: "🌌",
    anchor: "#hebergements",
    title: {
      fr: "Aurores boréales",
      en: "Northern lights",
      de: "Polarlichter",
      nl: "Noorderlicht",
      es: "Auroras boreales",
      it: "Aurore boreali",
    },
    description: {
      fr: "Le sujet qui a fait notre réputation : où et quand dormir pour maximiser vos chances de voir le ciel s'embraser. Retrouvez notre sélection d'hébergements et de destinations plus bas.",
      en: "The subject that built our reputation: where and when to stay to maximise your chances of seeing the sky light up. Find our selection of stays and destinations further down.",
      de: "Das Thema, das unseren Ruf begründet hat: wo und wann man übernachten sollte, um die besten Chancen auf ein Polarlicht zu haben. Unsere Auswahl an Unterkünften und Reisezielen finden Sie weiter unten.",
      nl: "Het onderwerp waarmee we onze naam hebben opgebouwd: waar en wanneer u moet verblijven om uw kansen op een oplichtende hemel te maximaliseren. Onze selectie van verblijven en bestemmingen vindt u verderop.",
      es: "El tema que ha construido nuestra reputación: dónde y cuándo alojarse para maximizar las posibilidades de ver el cielo encenderse. Encuentra nuestra selección de alojamientos y destinos más abajo.",
      it: "L'argomento che ha costruito la nostra reputazione: dove e quando soggiornare per massimizzare le possibilità di vedere il cielo accendersi. Trovate la nostra selezione di alloggi e destinazioni più in basso.",
    },
  },
  {
    slug: "village-pere-noel",
    icon: "🎅",
    destinationSlug: "rovaniemi",
    title: {
      fr: "Village du Père Noël",
      en: "Santa Claus Village",
      de: "Weihnachtsmanndorf",
      nl: "Kerstman Dorp",
      es: "Pueblo de Papá Noel",
      it: "Villaggio di Babbo Natale",
    },
    description: {
      fr: "À 8 km au nord de Rovaniemi sur la route 4, la ligne du cercle polaire arctique est marquée au sol avec certificat de passage à la clé. Bureau de poste officiel, rencontre du Père Noël toute l'année : le village est ouvert 365 jours par an et accueille plus de 500 000 visiteurs chaque année.",
      en: "8 km north of Rovaniemi on road 4, the Arctic Circle line is marked on the ground, with a crossing certificate to take home. An official Santa Claus post office, year-round meetings with Santa: the village is open 365 days a year and welcomes over 500,000 visitors annually.",
      de: "8 km nördlich von Rovaniemi an der Straße 4 ist die Polarkreislinie am Boden markiert, inklusive Passierzertifikat. Ein offizielles Weihnachtsmann-Postamt, ganzjährige Treffen mit dem Weihnachtsmann: Das Dorf ist 365 Tage im Jahr geöffnet und empfängt über 500.000 Besucher pro Jahr.",
      nl: "8 km ten noorden van Rovaniemi aan weg 4 is de poolcirkellijn op de grond gemarkeerd, met een oversteekcertificaat als aandenken. Een officieel postkantoor van de Kerstman, het hele jaar door ontmoetingen met de Kerstman: het dorp is 365 dagen per jaar geopend en ontvangt jaarlijks meer dan 500.000 bezoekers.",
      es: "A 8 km al norte de Rovaniemi por la carretera 4, la línea del círculo polar ártico está marcada en el suelo, con certificado de cruce incluido. Una oficina de correos oficial de Papá Noel, encuentros con Papá Noel todo el año: el pueblo abre 365 días al año y recibe más de 500.000 visitantes anuales.",
      it: "A 8 km a nord di Rovaniemi sulla strada 4, la linea del circolo polare artico è segnata a terra, con tanto di certificato di attraversamento. Un ufficio postale ufficiale di Babbo Natale, incontri con Babbo Natale tutto l'anno: il villaggio è aperto 365 giorni all'anno e accoglie oltre 500.000 visitatori ogni anno.",
    },
  },
  {
    slug: "traineaux-chiens",
    icon: "🛷",
    anchor: "#destinations",
    title: {
      fr: "Traîneaux à chiens",
      en: "Husky sledding",
      de: "Husky-Schlittenfahrten",
      nl: "Husky sleeën",
      es: "Trineo de huskies",
      it: "Slitta trainata da husky",
    },
    description: {
      fr: "Excursions guidées en husky safari près de Rovaniemi, Levi, Saariselkä ou Ylläs, comptez entre 195 et 240 EUR transport inclus. Des opérateurs reconnus comme Bearhill Husky, Apukka Husky ou Nordic Odyssey, où le bien-être des chiens (jours de repos, retraite) est pris au sérieux.",
      en: "Guided husky safaris near Rovaniemi, Levi, Saariselkä or Ylläs, typically 195 to 240 EUR including transport. Reputable operators such as Bearhill Husky, Apukka Husky and Nordic Odyssey take dog welfare seriously, with rest days and a proper retirement.",
      de: "Geführte Husky-Safaris in der Nähe von Rovaniemi, Levi, Saariselkä oder Ylläs, meist zwischen 195 und 240 EUR inklusive Transport. Anerkannte Anbieter wie Bearhill Husky, Apukka Husky und Nordic Odyssey nehmen das Wohl der Hunde ernst, mit Ruhetagen und einem echten Ruhestand.",
      nl: "Begeleide husky safari's in de buurt van Rovaniemi, Levi, Saariselkä of Ylläs, reken op 195 tot 240 EUR inclusief vervoer. Gerenommeerde aanbieders zoals Bearhill Husky, Apukka Husky en Nordic Odyssey nemen het welzijn van de honden serieus, met rustdagen en een echt pensioen.",
      es: "Excursiones guiadas en trineo de huskies cerca de Rovaniemi, Levi, Saariselkä o Ylläs, cuenta entre 195 y 240 EUR con transporte incluido. Operadores de confianza como Bearhill Husky, Apukka Husky y Nordic Odyssey se toman en serio el bienestar de los perros, con días de descanso y una jubilación real.",
      it: "Escursioni guidate in slitta con gli husky vicino a Rovaniemi, Levi, Saariselkä o Ylläs, contate tra 195 e 240 EUR trasporto incluso. Operatori affidabili come Bearhill Husky, Apukka Husky e Nordic Odyssey prendono sul serio il benessere dei cani, con giorni di riposo e una vera pensione.",
    },
  },
  {
    slug: "hiver-actif",
    icon: "❄️",
    anchor: "#destinations",
    title: {
      fr: "Hiver actif",
      en: "Active winter",
      de: "Aktiver Winter",
      nl: "Actieve winter",
      es: "Invierno activo",
      it: "Inverno attivo",
    },
    description: {
      fr: "Motoneige sur les lacs gelés, raquettes en forêt, rencontre avec des rennes et des éleveurs sami : la Laponie se vit aussi hors observation du ciel. De quoi remplir vos journées avant la nuit tombée.",
      en: "Snowmobiling on frozen lakes, snowshoeing through forests, meeting reindeer and Sami herders: Lapland is worth living beyond the night sky too. Plenty to fill your days before dark falls.",
      de: "Schneemobilfahrten auf zugefrorenen Seen, Schneeschuhwandern im Wald, Begegnungen mit Rentieren und samischen Hirten: Lappland lohnt sich auch abseits des Nachthimmels. Genug, um die Tage vor Einbruch der Dunkelheit zu füllen.",
      nl: "Sneeuwscooteren op bevroren meren, sneeuwschoenwandelen door het bos, een ontmoeting met rendieren en Sami-herders: Lapland is ook de moeite waard buiten de nachtelijke hemel om. Genoeg om uw dagen te vullen voor het donker wordt.",
      es: "Motos de nieve sobre lagos helados, raquetas de nieve en el bosque, encuentros con renos y pastores sami: Laponia también merece la pena más allá del cielo nocturno. Suficiente para llenar tus días antes de que caiga la noche.",
      it: "Motoslitta sui laghi ghiacciati, escursioni con le racchette da neve nel bosco, incontri con renne e allevatori sami: la Lapponia merita anche oltre l'osservazione del cielo notturno. Abbastanza per riempire le giornate prima che cali il buio.",
    },
  },
];
