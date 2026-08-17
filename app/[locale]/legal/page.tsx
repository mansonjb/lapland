import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { LOCALES, isLocale, getDict, localeHref, fill, type Locale } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDict(locale as Locale);
  return { title: t.legal.title };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const lang = locale as Locale;
  const t = getDict(lang);

  return (
    <main>
      <nav className="mx-auto max-w-3xl px-6 pt-6 text-sm text-ink-soft">
        <Link href={localeHref(lang)} className="hover:text-copper">
          {t.city.breadcrumbHome}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{t.legal.title}</span>
      </nav>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="font-display text-4xl text-ink">{t.legal.title}</h1>
        <p className="mt-2 text-sm text-ink-soft">{t.legal.updated}</p>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-ink">{t.legal.publisherHeading}</h2>
            <ul className="mt-3 space-y-1 text-sm leading-relaxed text-ink-soft">
              {t.legal.publisherLines.map((line) => (
                <li key={line}>{fill(line, { email: CONTACT_EMAIL })}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">{t.legal.directorHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.legal.directorText}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">{t.legal.hostHeading}</h2>
            <ul className="mt-3 space-y-1 text-sm leading-relaxed text-ink-soft">
              {t.legal.hostLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">{t.legal.ipHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.legal.ipText}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">{t.legal.liabilityHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.legal.liabilityText}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
