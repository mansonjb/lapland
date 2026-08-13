import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { LOCALES, DEFAULT_LOCALE, localeHref } from "@/lib/i18n";
import { DESTINATIONS } from "@/data/destinations";

function hreflangAlternates(path = ""): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[locale] = `${SITE_URL}${localeHref(locale, path)}`;
  }
  // x-default renvoie vers la racine FR (langue par defaut du site).
  languages["x-default"] = `${SITE_URL}${localeHref(DEFAULT_LOCALE, path)}`;
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const home = LOCALES.map((locale) => ({
    url: `${SITE_URL}${localeHref(locale)}`,
    lastModified: new Date(),
    alternates: { languages: hreflangAlternates() },
  }));

  const cities = LOCALES.flatMap((locale) =>
    DESTINATIONS.map((d) => ({
      url: `${SITE_URL}${localeHref(locale, d.slug)}`,
      lastModified: new Date(),
      alternates: { languages: hreflangAlternates(d.slug) },
    }))
  );

  return [...home, ...cities];
}
