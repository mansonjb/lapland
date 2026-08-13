import type { Dict } from "@/data/i18n/ui";
import { UI_FR } from "@/data/i18n/fr";
import { UI_EN } from "@/data/i18n/en";

export const LOCALES = ["fr", "en"] as const;
export type Locale = (typeof LOCALES)[number];

// FR est la langue par defaut : elle vit a la racine (`/`). EN est prefixee (`/en`).
export const DEFAULT_LOCALE: Locale = "fr";

export function isLocale(x: string | undefined): x is Locale {
  return !!x && (LOCALES as readonly string[]).includes(x);
}

/** Prefixe d'URL d'une langue. Vide pour la langue par defaut. */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

/** Construit un href interne a partir d'un chemin localise (sans locale). */
export function localeHref(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  const base = localePrefix(locale);
  const full = clean ? `${base}/${clean}` : base;
  return full === "" ? "/" : full;
}

export const OG_LOCALE: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_GB",
};

export const HTML_LANG: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-GB",
};

const DICTS: Record<Locale, Dict> = { fr: UI_FR, en: UI_EN };

export function getDict(locale: Locale): Dict {
  return DICTS[locale] ?? DICTS.fr;
}

/** Remplit un gabarit `{name}` (libelles UI). */
export function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);
}
