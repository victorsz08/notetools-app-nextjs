import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('nextauth.token')?.value;

  // Se o token não existir e o usuário não estiver na página de login, redirecione para /auth/login
  if (!token && request.nextUrl.pathname !== '/auth/login') {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Se o token existir e o usuário estiver na página de login, redirecione para a página inicial ou dashboard
  if (token && request.nextUrl.pathname === '/auth/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Permita a continuação da requisição
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/auth/login', '/operacao/:path*'],
};
