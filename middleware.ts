// // middleware.ts
// import { NextRequest, NextResponse } from 'next/server';

// const PUBLIC_FILE = /\.(.*)$/;
// const SUPPORTED_LOCALES = ['en', 'ar'];
// const DEFAULT_LOCALE = 'en';

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Ignore API routes, _next, public files, or already localized paths
//   if (
//     pathname.startsWith('/api') ||
//     pathname.startsWith('/_next') ||
//     PUBLIC_FILE.test(pathname) ||
//     SUPPORTED_LOCALES.some((locale) => pathname.startsWith(`/${locale}`))
//   ) {
//     return NextResponse.next();
//   }

//   // Detect user preferred language from headers
//   const acceptLang = request.headers.get('accept-language');
//   const preferredLang = acceptLang?.split(',')?.[0]?.split('-')?.[0] || DEFAULT_LOCALE;

//   const detectedLocale = SUPPORTED_LOCALES.includes(preferredLang)
//     ? preferredLang
//     : DEFAULT_LOCALE;

//   // Redirect to detected language route
//   const url = request.nextUrl.clone();
//   url.pathname = `/${detectedLocale}${pathname}`;
//   return NextResponse.redirect(url);
// }



// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const SUPPORTED_LOCALES = ['en', 'ar'];
const DEFAULT_LOCALE = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal/public files or already localized routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname) ||
    SUPPORTED_LOCALES.some((locale) => pathname.startsWith(`/${locale}`))
  ) {
    return NextResponse.next();
  }

  // Detect language
  const langHeader = request.headers.get('accept-language');
  const preferredLang = langHeader?.split(',')?.[0]?.split('-')[0] || DEFAULT_LOCALE;

  const locale = SUPPORTED_LOCALES.includes(preferredLang) ? preferredLang : DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}
