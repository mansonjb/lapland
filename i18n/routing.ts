import { defineRouting } from "next-intl/routing";

// FR est la langue par defaut : elle vit a la racine (`/`).
// EN est prefixee (`/en`). Meme URL shape que les autres sites (ex. "lieder").
export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
});

export type AppLocale = (typeof routing.locales)[number];
