import {NextRequest, NextResponse} from 'next/server';

export default function middleware(request: NextRequest) {
  const cookieValue = request.cookies.get('locale')?.value;
  const searchValue = request.nextUrl.searchParams.get('locale');
  const defaultLocale = 'en';

  const locale = searchValue || cookieValue || defaultLocale;

  const response = NextResponse.rewrite(
    new URL(`/${locale}${request.nextUrl.pathname}`, request.url)
  );

  if (cookieValue !== locale) {
    response.cookies.set('locale', locale);
  }

  return response;
}

export const config = {
  matcher: ['/', '/a']
};
