import { notFound } from "next/navigation";
import { LOCALES, isLocale, getDict, fill, type Locale } from "@/lib/i18n";
import { DESTINATIONS } from "@/data/destinations";
import { Stay22Map } from "@/components/Stay22Map";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const lang = locale as Locale;
  const t = getDict(lang);
  const featured = DESTINATIONS[0]; // Rovaniemi

  const aid = process.env.NEXT_PUBLIC_STAY22_AID ?? "PLACEHOLDER_AID";

  return (
    <main className="mx-auto max-w-(--spacing-maxw) px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-ink">
        {t.home.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {t.home.intro}
      </p>

      <section className="mt-10">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-ink-soft">
          {t.home.destinationsHeading}
        </h2>
        <ul className="flex flex-wrap gap-3">
          {DESTINATIONS.map((d) => (
            <li
              key={d.slug}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink"
            >
              {d.label[lang]}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-ink-soft">
          {fill(t.home.mapHeading, { name: featured.label[lang] })}
        </h2>
        <Stay22Map
          aid={aid}
          address={featured.address}
          lat={featured.lat}
          lng={featured.lng}
          mode="accommodation"
          campaign="home"
          lang={lang}
        />
      </section>
    </main>
  );
}
