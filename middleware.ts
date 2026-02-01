import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'; // Zmieniono z next/request na next/server

export function middleware(request: NextRequest) {
  // Sprawdzamy ciastko sesji
  const adminSession = request.cookies.get('admin_session');
  const { pathname } = request.nextUrl;

  // Logika ochrony ścieżek /admin
  if (pathname.startsWith('/admin')) {
    // Pozwól wejść na stronę logowania, żeby uniknąć pętli przekierowań
    if (pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Jeśli brak sesji, wyrzuć użytkownika do logowania
    if (!adminSession) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};