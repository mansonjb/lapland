"use client";

import Script from "next/script";

/**
 * Loads the Stay22 "Let Me Allez" script site-wide.
 */
export function Stay22Script() {
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
