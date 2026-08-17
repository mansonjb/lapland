"use client";

import Script from "next/script";
import { useCookieConsent } from "@/lib/cookie-consent";

/**
 * Loads the Stay22 "Let Me Allez" script only after cookie consent has been
 * accepted. Before that (unset or declined) nothing is injected.
 */
export function Stay22Script() {
  const { status } = useCookieConsent();

  if (status !== "accepted") return null;

  return (
    <Script id="stay22-lma" strategy="afterInteractive">
      {`(function (s, t, a, y, twenty, two) {
    s.Stay22 = s.Stay22 || {};
    s.Stay22.params = { lmaID: '6a7dfb155ad5565fc46165ff' };
    twenty = t.createElement(a);
    two = t.getElementsByTagName(a)[0];
    twenty.async = 1;
    twenty.src = y;
    two.parentNode.insertBefore(twenty, two);
  })(window, document, 'script', 'https://scripts.stay22.com/letmeallez.js');`}
    </Script>
  );
}

export default Stay22Script;
