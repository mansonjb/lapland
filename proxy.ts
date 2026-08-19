import { NextResponse, type NextRequest } from "next/server";

// i18n (convention "proxy" de Next 16, ex-middleware) :
// FR (langue par defaut) a la racine, les autres locales prefixees (/en, /de, /nl, /es, /it, /ja).
//  - /en/...  : laisse passer (rendu par [locale]=en), idem /de, /nl, /es, /it, /ja
//  - /fr/...  : redirige vers /... (le prefixe par defaut ne doit pas etre expose)
//  - /...     : reecrit en interne vers /fr/... (rendu par [locale]=fr)
const DEFAULT_LOCALE = "fr";
const PREFIXED = ["en", "de", "nl", "es", "it", "ja"];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/icon" ||
    pathname === "/apple-icon" ||
    /\.\w+$/.test(pathname)
  ) {
    return;
  }

  const segs = pathname.split("/").filter(Boolean);
  const first = segs[0];

  if (first && PREFIXED.includes(first)) return;

  if (first === DEFAULT_LOCALE) {
    const url = req.nextUrl.clone();
    url.pathname = "/" + segs.slice(1).join("/");
    return NextResponse.redirect(url, 308);
  }

  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|icon$|apple-icon$|.*\\..*).*)"],
};
