import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export const proxy = createMiddleware(routing);

export const config = {
  // Skip Next.js internals, API routes and files with an extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
