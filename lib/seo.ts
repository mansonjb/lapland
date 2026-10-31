import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { DEFAULT_LOCALE, LOCALES, OG_LOCALE, localeHref, type Locale } from "@/lib/i18n";

/** URL absolue d'un chemin localise. */
export function absUrl(locale: Locale, path = ""): string {
  return `${SITE_URL}${localeHref(locale, path)}`;
}

/** Canonical + hreflang (toutes langues + x-default) + OpenGraph pour une page. */
export function pageMetadata(opts: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const { locale, path = "", title, description, image } = opts;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = absUrl(l, path);
  languages["x-default"] = absUrl(DEFAULT_LOCALE, path);
  return {
    title,
    description,
    alternates: { canonical: absUrl(locale, path), languages },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url: absUrl(locale, path),
      locale: OG_LOCALE[locale],
      ...(image ? { images: [{ url: image }] } : {}),
    },
  };
}
