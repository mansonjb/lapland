import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

// Root layout is a pass-through: <html>/<body> live in app/[locale]/layout.tsx
// since every real route sits under the [locale] segment. Middleware maps
// every path to a locale before it ever reaches that layout.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
