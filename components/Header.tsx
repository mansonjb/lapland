"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDict, localeHref, LOCALES, type Locale } from "@/lib/i18n";
import type { Dict } from "@/data/i18n/ui";

// `usePathname()` returns the post-rewrite internal path (proxy.ts always
// rewrites "/" to "/fr" server-side before the [locale] route matches), so
// every locale prefix needs stripping here, not just the current one,
// otherwise the language switcher builds URLs like "/en/fr".
const LOCALE_PREFIX_RE = new RegExp(`^/(${LOCALES.join("|")})(/.*)?$`);

function stripLocalePrefix(pathname: string): string {
  const match = pathname.match(LOCALE_PREFIX_RE);
  if (match) return match[2] ?? "/";
  return pathname;
}

const LANG_LABEL_KEY: Record<Locale, keyof Dict["header"]> = {
  fr: "langFr",
  en: "langEn",
  de: "langDe",
  nl: "langNl",
  es: "langEs",
  it: "langIt",
  ja: "langJa",
};

export function Header({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const pathname = usePathname();
  const path = stripLocalePrefix(pathname);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-(--spacing-maxw) items-center justify-between gap-6 px-6 py-4">
        <Link href={localeHref(locale)} className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="brand-mark h-6 w-6 rounded-full"
          />
          <span className="font-display text-xl text-ink">{t.site.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-ink-soft md:flex">
          <a href="#destinations" className="hover:text-ink">
            {t.nav.destinations}
          </a>
          <a href="#hebergements" className="hover:text-ink">
            {t.nav.hotels}
          </a>
          <a href="#carte" className="hover:text-ink">
            {t.nav.map}
          </a>
          <a href="#faq" className="hover:text-ink">
            {t.nav.faq}
          </a>
          <Link href={localeHref(locale, "getting-around")} className="hover:text-ink">
            {t.nav.gettingAround}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center overflow-hidden rounded-full border border-line text-xs font-medium">
            {LOCALES.map((l) => (
              <Link
                key={l}
                href={localeHref(l, path)}
                className={`px-2.5 py-1.5 ${locale === l ? "bg-ink text-surface" : "text-ink-soft hover:bg-paper-2"}`}
              >
                {t.header[LANG_LABEL_KEY[l]]}
              </Link>
            ))}
          </div>
          <a
            href="#hebergements"
            className="hidden rounded-full border border-copper px-4 py-2 text-sm font-medium text-copper transition hover:bg-copper hover:text-surface sm:inline-block"
          >
            {t.header.ctaButton}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
