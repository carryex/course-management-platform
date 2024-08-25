// middleware.ts
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ROUTES } from './app/constants/routes';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  if (token && pathname === '/') {
    return NextResponse.redirect(new URL(ROUTES.LEARN.path, req.url)); 
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
