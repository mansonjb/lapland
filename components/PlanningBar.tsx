"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { DESTINATIONS } from "@/data/destinations";
import { HOTEL_TYPE_LABEL, HOTEL_TYPES } from "@/data/hotels";
import { localeHref, type Locale } from "@/lib/i18n";

export function PlanningBar({
  locale,
  heading,
  cityLabel,
  cityAll,
  typeLabel,
  typeAll,
  searchButton,
}: {
  locale: Locale;
  heading: string;
  cityLabel: string;
  cityAll: string;
  typeLabel: string;
  typeAll: string;
  searchButton: string;
}) {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [type, setType] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (city && type) {
      // Ville + type : page ville filtree sur ce type.
      router.push(`${localeHref(locale, city)}?type=${type}#hebergements`);
    } else if (city) {
      // Ville seule : page ville, tous types.
      router.push(`${localeHref(locale, city)}#hebergements`);
    } else if (type) {
      // Type seul, pas de ville : page hub du type, toutes villes confondues.
      router.push(localeHref(locale, `hebergements/${type}`));
    } else {
      // Ni ville ni type : section hebergements de la home.
      router.push(`${localeHref(locale)}#hebergements`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 mx-auto -mb-16 flex w-full max-w-4xl flex-col gap-4 rounded-3xl border border-line bg-surface p-5 shadow-xl sm:flex-row sm:items-end sm:gap-3"
    >
      <span className="sr-only">{heading}</span>

      <label className="flex flex-1 flex-col gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wide text-ink-soft">
          {cityLabel}
        </span>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="rounded-xl border border-line bg-paper px-3 py-2.5 text-sm text-ink"
        >
          <option value="">{cityAll}</option>
          {DESTINATIONS.map((d) => (
            <option key={d.slug} value={d.slug}>
              {d.label[locale]}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-1 flex-col gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wide text-ink-soft">
          {typeLabel}
        </span>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded-xl border border-line bg-paper px-3 py-2.5 text-sm text-ink"
        >
          <option value="">{typeAll}</option>
          {HOTEL_TYPES.map((t) => (
            <option key={t} value={t}>
              {HOTEL_TYPE_LABEL[t][locale]}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="rounded-xl bg-copper px-6 py-2.5 text-sm font-medium text-white transition hover:bg-copper-dark"
      >
        {searchButton}
      </button>
    </form>
  );
}

export default PlanningBar;
