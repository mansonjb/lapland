import { notFound } from "next/navigation";
import { HTML_LANG, LOCALES, isLocale, type Locale } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsentProvider } from "@/lib/cookie-consent";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { Stay22Script } from "@/components/Stay22Script";

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
        <CookieConsentProvider>
          <Header locale={lang} />
          {children}
          <Footer locale={lang} />
          <Stay22Script />
          <CookieConsentBanner locale={lang} />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
