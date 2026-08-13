import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/data/destinations";
import { localeHref, type Locale } from "@/lib/i18n";

const BADGE_COLORS = ["bg-copper", "bg-spruce", "bg-birch-dark"] as const;

export function DestinationCard({
  destination,
  index,
  locale,
  imageBaseUrl,
  ctaLabel,
}: {
  destination: Destination;
  index: number;
  locale: Locale;
  imageBaseUrl: string;
  ctaLabel: string;
}) {
  const badgeColor = BADGE_COLORS[index % BADGE_COLORS.length];
  const number = String(index + 1).padStart(2, "0");
  const href = localeHref(locale, destination.slug);

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={`${imageBaseUrl}/destinations/${destination.slug}.jpg`}
          alt={destination.label[locale]}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 90vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 flex items-center gap-1.5 rounded-full ${badgeColor} px-2.5 py-1 text-xs font-semibold text-white shadow`}
        >
          {number} &middot; {destination.label[locale]}
        </span>
        <span
          aria-hidden
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-ink"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path
              d="M12 20s-7-4.35-9.5-8.5C.7 8.2 2.3 5 5.6 5c1.9 0 3.3 1 4.4 2.6C11.1 6 12.5 5 14.4 5c3.3 0 4.9 3.2 3.1 6.5C19 15.65 12 20 12 20Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </span>
        <span className="absolute bottom-3 left-3 rounded-full bg-ink/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
          {destination.recommendedStay[locale]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl text-ink">{destination.label[locale]}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {destination.description[locale]}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {destination.tags[locale].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-paper-2 px-2.5 py-1 text-xs text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-copper">
          {ctaLabel} <span aria-hidden>&rarr;</span>
        </span>
      </div>
    </Link>
  );
}

export default DestinationCard;
