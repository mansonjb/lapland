import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { DESTINATIONS } from "@/data/destinations";
import { Stay22Map } from "@/components/Stay22Map";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home" });
  const lang = locale as AppLocale;
  const featured = DESTINATIONS[0]; // Rovaniemi

  const aid = process.env.NEXT_PUBLIC_STAY22_AID ?? "PLACEHOLDER_AID";

  return (
    <main className="mx-auto max-w-(--spacing-maxw) px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-ink">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {t("intro")}
      </p>

      <section className="mt-10">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-ink-soft">
          {t("destinationsHeading")}
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
          {t("mapHeading", { name: featured.label[lang] })}
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
