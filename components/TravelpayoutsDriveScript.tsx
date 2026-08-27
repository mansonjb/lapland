"use client";

import Script from "next/script";

/**
 * Travelpayouts "Drive" script, exact snippet from the Travelpayouts
 * dashboard (Manual installation) for staysinlapland.com. The WordPress
 * cache-bypass attributes (nowprocket, data-noptimize, data-cfasync,
 * data-wpfc-render, seraph-accel-crit, data-no-defer) are no-ops on this
 * Next.js site but kept as-is to match the official snippet exactly.
 */
export function TravelpayoutsDriveScript() {
  return (
    <Script
      id="travelpayouts-drive"
      strategy="afterInteractive"
      {...{
        nowprocket: "",
        "data-noptimize": "1",
        "data-cfasync": "false",
        "data-wpfc-render": "false",
        "seraph-accel-crit": "1",
        "data-no-defer": "1",
        "data-cmp-ab": "2",
      }}
    >
      {`(function () {
    var script = document.createElement("script");
    script.async = 1;
    script.setAttribute("data-cmp-ab","2");
    script.src = 'https://emrldtp.com/NTY0MDM4.js?t=564038';
    document.head.appendChild(script);
})();`}
    </Script>
  );
}

export default TravelpayoutsDriveScript;
