import { notFound } from "next/navigation";
import { HTML_LANG, LOCALES, isLocale, type Locale } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { absUrl } from "@/lib/seo";
import { Stay22Script } from "@/components/Stay22Script";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { TravelpayoutsDriveScript } from "@/components/TravelpayoutsDriveScript";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const lang = locale as Locale;

  return (
    <html lang={HTML_LANG[locale]}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: SITE_NAME,
              url: SITE_URL,
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              name: SITE_NAME,
              url: absUrl(lang),
              inLanguage: HTML_LANG[lang],
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
          ]}
        />
        <Header locale={lang} />
        {children}
        <Footer locale={lang} />
        <Stay22Script />
        <AnalyticsScripts />
        <TravelpayoutsDriveScript />
      </body>
    </html>
  );
}
