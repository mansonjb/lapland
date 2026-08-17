"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ConsentStatus = "unset" | "accepted" | "declined";

const STORAGE_KEY = "lapland-cookie-consent";
// Mirrors the retention period stated on the privacy page: 6 months.
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 180;

type StoredConsent = { status: "accepted" | "declined"; ts: number };

function readStoredConsent(): ConsentStatus {
  if (typeof window === "undefined") return "unset";
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return "unset";
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    if (
      (parsed.status !== "accepted" && parsed.status !== "declined") ||
      typeof parsed.ts !== "number"
    ) {
      return "unset";
    }
    if (Date.now() - parsed.ts > MAX_AGE_MS) return "unset";
    return parsed.status;
  } catch {
    return "unset";
  }
}

type ConsentContextValue = {
  /** Current choice. "unset" until the visitor answers (or the stored answer expired). */
  status: ConsentStatus;
  /** False during the first client render, before localStorage has been read (avoids hydration flash). */
  ready: boolean;
  accept: () => void;
  decline: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<ConsentStatus>("unset");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setStatus(readStoredConsent());
    setReady(true);
  }, []);

  function persist(next: "accepted" | "declined") {
    setStatus(next);
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ status: next, ts: Date.now() } satisfies StoredConsent)
      );
    } catch {
      // localStorage unavailable (private browsing, storage full, etc.) -
      // the choice still applies for this page load via in-memory state.
    }
  }

  const value: ConsentContextValue = {
    status,
    ready,
    accept: () => persist("accepted"),
    decline: () => persist("declined"),
  };

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useCookieConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return ctx;
}
