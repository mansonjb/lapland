import Link from "next/link";
import type { Experience } from "@/data/experiences";
import { localeHref, type Locale } from "@/lib/i18n";

export function ExperienceCard({
  experience,
  locale,
  ctaLabel,
}: {
  experience: Experience;
  locale: Locale;
  ctaLabel: string;
}) {
  const href = experience.destinationSlug
    ? localeHref(locale, experience.destinationSlug)
    : experience.anchor ?? "#";

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-3xl border border-line bg-surface p-6 transition hover:shadow-lg"
    >
      <span
        aria-hidden
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-copper/10 text-2xl"
      >
        {experience.icon}
      </span>
      <h3 className="mt-4 font-display text-xl text-ink">
        {experience.title[locale]}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
        {experience.description[locale]}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-copper">
        {ctaLabel} <span aria-hidden>&rarr;</span>
      </span>
    </Link>
  );
}

export default ExperienceCard;
