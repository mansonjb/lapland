"use client";

import { useEffect, useRef } from "react";
import { type Locale } from "@/lib/i18n";

// TravelPayouts widget locale codes are a smaller set than our 7 site
// locales; unsupported ones fall back to English rather than 404 silently.
const WIDGET_LOCALE: Record<Locale, string> = {
  fr: "fr",
  en: "en",
  de: "de",
  nl: "en",
  es: "es",
  it: "it",
  ja: "en",
};

function buildWidgetSrc(locale: Locale): string {
  const params = new URLSearchParams({
    trs: "564038",
    shmarker: "730118",
    locale: WIDGET_LOCALE[locale],
    default_pick_up_location: "Rovaniemi Airport",
    default_drop_off_location: "Rovaniemi Airport",
    powered_by: "true",
    border_radius: "22",
    plain: "true",
    show_logo: "true",
    color_background: "#FFB000d9",
    color_button: "#FFFFFFff",
    color_text: "#000000",
    color_input_text: "#000000",
    color_button_text: "#ffffff",
    promo_id: "4480",
    campaign_id: "10",
  });
  return `https://tpwgt.com/content?${params.toString()}`;
}

/**
 * TravelPayouts car rental comparison widget. Loaded as a real <script> node
 * appended inside our own container (not next/script, which relocates the
 * tag to the end of <body> and would break the widget's self-positioning).
 */
export function CarRentalWidget({ locale }: { locale: Locale }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const injectedRef = useRef(false);

  useEffect(() => {
    if (injectedRef.current || !containerRef.current) return;
    injectedRef.current = true;
    const script = document.createElement("script");
    script.async = true;
    script.charset = "utf-8";
    script.src = buildWidgetSrc(locale);
    containerRef.current.appendChild(script);
  }, [locale]);

  return <div ref={containerRef} className="min-h-48 w-full" />;
}

export default CarRentalWidget;
