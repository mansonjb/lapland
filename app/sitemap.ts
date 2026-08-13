import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { LOCALES, DEFAULT_LOCALE, localeHref } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url:
      locale === DEFAULT_LOCALE
        ? SITE_URL
        : `${SITE_URL}${localeHref(locale)}`,
    lastModified: new Date(),
  }));
}
