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
  return { title: t.affiliate.title };
}

export default async function AffiliateDisclosurePage({
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
        <span className="text-ink">{t.affiliate.title}</span>
      </nav>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="font-display text-4xl text-ink">{t.affiliate.title}</h1>
        <p className="mt-2 text-sm text-ink-soft">{t.affiliate.updated}</p>
        <p className="mt-6 text-sm leading-relaxed text-ink-soft">{t.affiliate.intro}</p>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-ink">{t.affiliate.howHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.affiliate.howText}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">{t.affiliate.editorialHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {t.affiliate.editorialText}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">{t.affiliate.partnersHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {t.affiliate.partnersText}
            </p>
          </div>

          <div>
            <p className="text-sm leading-relaxed text-ink-soft">
              {fill(t.affiliate.contactText, { email: CONTACT_EMAIL })}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
