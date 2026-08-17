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
  return { title: t.privacy.title };
}

export default async function PrivacyPage({
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
        <span className="text-ink">{t.privacy.title}</span>
      </nav>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="font-display text-4xl text-ink">{t.privacy.title}</h1>
        <p className="mt-2 text-sm text-ink-soft">{t.privacy.updated}</p>
        <p className="mt-6 text-sm leading-relaxed text-ink-soft">{t.privacy.intro}</p>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-ink">{t.privacy.dataHeading}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft">
              {t.privacy.dataItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">{t.privacy.purposesHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.privacy.purposesText}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">{t.privacy.legalBasisHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {t.privacy.legalBasisText}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">{t.privacy.retentionHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {t.privacy.retentionText}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">{t.privacy.sharingHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.privacy.sharingText}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">{t.privacy.rightsHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {fill(t.privacy.rightsText, { email: CONTACT_EMAIL })}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
