import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: locale === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`,
    lastModified: new Date(),
  }));
}
