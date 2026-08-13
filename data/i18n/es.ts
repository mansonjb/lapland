import type { Dict } from "./ui";

export const UI_ES: Dict = {
  site: {
    name: "Lapland Stays",
    tagline: "Ver la aurora boreal en Laponia: donde dormir, cuando viajar.",
  },
  nav: {
    destinations: "Destinos",
    hotels: "Alojamientos",
    map: "Mapa",
    faq: "Preguntas frecuentes",
  },
  header: {
    ctaButton: "Ver alojamientos",
    langFr: "FR",
    langEn: "EN",
    langDe: "DE",
    langNl: "NL",
    langEs: "ES",
    langIt: "IT",
  },
  hero: {
    badgeBrand: "Lapland Stays",
    badgeKp: "Indice KP en vivo",
    titlePre: "Donde dormir para ver la",
    titleHighlight: "aurora boreal",
    titlePost: "en Laponia",
    lede: "Una guia independiente para elegir el pueblo adecuado, la fecha adecuada y el alojamiento adecuado, iglu de cristal, hotel de hielo o cabana acristalada, entre septiembre y marzo.",
    ctaPrimary: "Comparar alojamientos",
    ctaSecondary: "Ver los 5 destinos",
    trust: [
      "Seleccion independiente, ninguna comision cambia nuestras recomendaciones",
      "Fotos reales de cada alojamiento, sin bancos de imagenes genericos",
      "Actualizado para la temporada de auroras 2026-2027",
    ],
    stats: [
      { value: "5", label: "destinos cubiertos" },
      { value: "60+", label: "alojamientos listados" },
      { value: "100%", label: "independiente" },
    ],
    imageAlt: "Cabana acristalada bajo la aurora boreal en Rovaniemi, Laponia",
  },
  planning: {
    heading: "Encuentra tu alojamiento",
    cityLabel: "Ciudad",
    cityAll: "Todos los destinos",
    typeLabel: "Tipo de alojamiento",
    typeAll: "Todos los tipos",
    searchButton: "Buscar",
  },
  manifesto: {
    quote: "No vendemos viajes. Te ayudamos a elegir donde dormir para maximizar tus posibilidades de ver la aurora, y luego te dirigimos a nuestros socios de reserva.",
    attribution: "La promesa de Lapland Stays",
  },
  intro: {
    heading: "Laponia no es un solo lugar",
    paragraphLeft: "Rovaniemi, Levi, Saariselka, Kiruna, Abisko, Tromso: cinco bases muy diferentes que se agrupan bajo 'ver la aurora boreal'. Cada una tiene su propio clima, acceso, ambiente y tipo de alojamiento dominante. Elegir el destino correcto importa tanto como elegir las fechas correctas.",
    paragraphRight: "Esta guia compara destinos y alojamientos sin intentar venderte el paquete mas caro. Cada ficha enlaza con nuestros socios de reserva (Stay22, Booking, Airbnb, GetYourGuide) solo cuando la oferta realmente coincide con lo que buscas.",
    linkLabel: "Ver nuestro metodo",
  },
  destinationsSection: {
    heading: "Los 5 destinos",
    subheading: "Cada ciudad tiene un perfil distinto: acceso, densidad de iglus de cristal, ambiente. Compara antes de reservar.",
    ctaLabel: "Ver alojamientos",
  },
  mapSection: {
    heading: "Laponia en el mapa",
    subheading: "Todos los destinos cubiertos por esta guia, con alojamientos cercanos disponibles para reservar.",
  },
  hotelsSection: {
    heading: "Nuestra seleccion de alojamientos",
    subheading: "Iglus de cristal, hoteles de hielo y cabanas acristaladas elegidos por su ubicacion y potencial para ver auroras.",
    availabilityLabel: "Disponibilidad variable",
    ctaLabel: "Comprobar disponibilidad",
  },
  faqSection: {
    heading: "Preguntas frecuentes",
    subheading: "Lo que mas nos preguntan antes de un viaje para ver auroras.",
    items: [
      {
        q: "Con cuanta antelacion debo reservar?",
        a: "Para los iglus de cristal y hoteles de hielo mas demandados, reserva de 6 a 10 meses antes, especialmente para fechas de diciembre-enero y vacaciones escolares europeas. Los hoteles estandar se pueden reservar mas tarde, con 2 a 3 meses suele bastar.",
      },
      {
        q: "Cual es la mejor epoca para ver la aurora boreal?",
        a: "La temporada va de septiembre a abril, con mayores probabilidades en octubre y de nuevo en febrero-marzo, cuando el cielo suele estar mas despejado que en pleno invierno. Diciembre-enero trae las noches mas largas pero tambien mas nubosidad segun el destino.",
      },
      {
        q: "Un iglu de cristal garantiza ver la aurora?",
        a: "No. Ningun alojamiento, por bien ubicado que este, puede garantizar una observacion: depende de la actividad solar y la nubosidad, dos factores que nadie controla. Un iglu de cristal simplemente maximiza tus posibilidades al dejarte observar el cielo desde la cama en lugar de estar fuera con frio.",
      },
      {
        q: "Que presupuesto debo prever?",
        a: "Un hotel estandar bien situado suele costar entre 100 y 200 EUR la noche en temporada. Un iglu de cristal o un hotel de hielo ronda entre 250 y 600 EUR la noche segun el destino y el nivel de confort. Prevee un presupuesto aparte para excursiones guiadas si no conduces tu mismo.",
      },
    ],
  },
  footer: {
    tagline: "Una guia independiente de alojamientos para ver la aurora boreal en Laponia y el extremo norte escandinavo.",
    columnDestinations: "Destinos",
    columnGuide: "Guia",
    guideHow: "Como funciona",
    guideFaq: "Preguntas frecuentes",
    guideMap: "Mapa de destinos",
    columnAbout: "Acerca de",
    disclosureHeading: "Transparencia",
    disclosure: "Lapland Stays es un sitio independiente financiado por enlaces de afiliacion. Podemos ganar una comision si reservas a traves de nuestros socios Stay22, Booking.com, Airbnb o GetYourGuide, sin coste adicional para ti. Estas asociaciones nunca influyen en nuestras recomendaciones.",
    rights: "Todos los derechos reservados.",
  },
  city: {
    breadcrumbHome: "Inicio",
    quickFactsHeading: "De un vistazo",
    whyHeading: "Por que elegir este destino",
    hotelsHeading: "Donde dormir",
    hotelsEmpty: "Estamos actualizando nuestra seleccion para este destino.",
    faqHeading: "Preguntas frecuentes",
    mapHeading: "Alojamientos en el mapa",
    backToDestinations: "Todos los destinos",
    seasonLabel: "Temporada de auroras: {start} - {end}",
  },
  stay22: {
    sponsored: "Reserva con socio",
    browse: "Ver alojamientos en {name}",
  },
};
