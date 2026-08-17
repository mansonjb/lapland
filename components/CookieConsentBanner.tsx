"use client";

import { getDict, localeHref, type Locale } from "@/lib/i18n";
import { useCookieConsent } from "@/lib/cookie-consent";

export function CookieConsentBanner({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const { status, ready, accept, decline } = useCookieConsent();

  if (!ready || status !== "unset") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface/95 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur">
      <div className="mx-auto flex max-w-(--spacing-maxw) flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-ink-soft">
          {t.cookieConsent.message}{" "}
          <a
            href={localeHref(locale, "privacy")}
            className="font-medium text-copper hover:text-copper-dark"
          >
            {t.cookieConsent.learnMore}
          </a>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={decline}
            className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition hover:bg-paper-2"
          >
            {t.cookieConsent.decline}
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-full bg-copper px-4 py-2 text-sm font-medium text-white transition hover:bg-copper-dark"
          >
            {t.cookieConsent.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsentBanner;
