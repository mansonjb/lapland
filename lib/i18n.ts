import type { Dict } from "@/data/i18n/ui";
import { UI_FR } from "@/data/i18n/fr";
import { UI_EN } from "@/data/i18n/en";
import { UI_DE } from "@/data/i18n/de";
import { UI_NL } from "@/data/i18n/nl";
import { UI_ES } from "@/data/i18n/es";
import { UI_IT } from "@/data/i18n/it";

export const LOCALES = ["fr", "en", "de", "nl", "es", "it"] as const;
export type Locale = (typeof LOCALES)[number];

// FR est la langue par defaut : elle vit a la racine (`/`). Les autres sont prefixees (`/en`, `/de`, `/nl`, `/es`, `/it`).
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
  de: "de_DE",
  nl: "nl_NL",
  es: "es_ES",
  it: "it_IT",
};

export const HTML_LANG: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-GB",
  de: "de-DE",
  nl: "nl-NL",
  es: "es-ES",
  it: "it-IT",
};

const DICTS: Record<Locale, Dict> = {
  fr: UI_FR,
  en: UI_EN,
  de: UI_DE,
  nl: UI_NL,
  es: UI_ES,
  it: UI_IT,
};

export function getDict(locale: Locale): Dict {
  return DICTS[locale] ?? DICTS.fr;
}

/** Remplit un gabarit `{name}` (libelles UI). */
export function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);
}
