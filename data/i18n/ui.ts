// Forme du dictionnaire UI (libelles d'interface).

export type Dict = {
  site: {
    name: string;
    tagline: string;
  };
  home: {
    title: string;
    intro: string;
    mapHeading: string; // gabarit avec {name}
    destinationsHeading: string;
  };
  stay22: {
    sponsored: string;
    browse: string; // gabarit avec {name}
  };
};
