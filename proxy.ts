import { NextResponse, type NextRequest } from "next/server";

// i18n (convention "proxy" de Next 16, ex-middleware) :
// FR (langue par defaut) a la racine, EN prefixe par /en.
//  - /en/...  : laisse passer (rendu par [locale]=en)
//  - /fr/...  : redirige vers /... (le prefixe par defaut ne doit pas etre expose)
//  - /...     : reecrit en interne vers /fr/... (rendu par [locale]=fr)
const DEFAULT_LOCALE = "fr";
const PREFIXED = ["en"];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
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
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
