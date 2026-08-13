import Link from "next/link";
import { getDict, localeHref, type Locale } from "@/lib/i18n";
import { DESTINATIONS } from "@/data/destinations";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDict(locale);

  return (
    <footer className="bg-midnight text-frost">
      <div className="mx-auto max-w-(--spacing-maxw) px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span aria-hidden className="brand-mark h-6 w-6 rounded-full" />
              <span className="font-display text-xl text-frost">{t.site.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-frost/70">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wide text-frost/50">
              {t.footer.columnDestinations}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {DESTINATIONS.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={localeHref(locale, d.slug)}
                    className="text-frost/80 hover:text-frost"
                  >
                    {d.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wide text-frost/50">
              {t.footer.columnGuide}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#intro" className="text-frost/80 hover:text-frost">
                  {t.footer.guideHow}
                </a>
              </li>
              <li>
                <a href="#carte" className="text-frost/80 hover:text-frost">
                  {t.footer.guideMap}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-frost/80 hover:text-frost">
                  {t.footer.guideFaq}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-frost/15 pt-8">
          <h3 className="text-sm font-medium text-frost/70">
            {t.footer.disclosureHeading}
          </h3>
          <p className="mt-2 max-w-3xl text-xs leading-relaxed text-frost/50">
            {t.footer.disclosure}
          </p>
          <p className="mt-6 text-xs text-frost/40">
            {t.site.name} &copy; {new Date().getFullYear()}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
