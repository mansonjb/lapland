import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { LOCALES, localeHref } from "@/lib/i18n";
import { DESTINATIONS } from "@/data/destinations";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = LOCALES.map((locale) => ({
    url: `${SITE_URL}${localeHref(locale)}`,
    lastModified: new Date(),
  }));

  const cities = LOCALES.flatMap((locale) =>
    DESTINATIONS.map((d) => ({
      url: `${SITE_URL}${localeHref(locale, d.slug)}`,
      lastModified: new Date(),
    }))
  );

  return [...home, ...cities];
}
