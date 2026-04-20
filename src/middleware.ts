import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, isValidLocale } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Strip /en/ prefix — 301 redirect to preserve existing indexed URLs.
  //    /services/seo must continue to serve 200 with NO redirect.
  //    Any /en/* request gets stripped to /* permanently.
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const stripped = pathname === '/en' ? '/' : pathname.slice(3);
    const url = request.nextUrl.clone();
    url.pathname = stripped || '/';
    return NextResponse.redirect(url, { status: 301 });
  }

  // 2. Accept-Language rewrite — homepage only.
  //    If a user's browser prefers a non-EN locale we support, silently rewrite
  //    / to /{lang}. Uses NextResponse.rewrite (not redirect) so the URL stays
  //    / for bots — clean for SEO crawl, personalised for humans.
  if (pathname === '/') {
    const preferred = (request.headers.get('accept-language') ?? '')
      .split(',')[0]
      .split('-')[0]
      .toLowerCase()
      .trim();
    if (isValidLocale(preferred) && preferred !== defaultLocale) {
      const url = request.nextUrl.clone();
      url.pathname = `/${preferred}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Exclude Next.js internals and static files from middleware
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};
