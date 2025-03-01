import { NextRequest, NextResponse } from 'next/server';
import { decrypt, updateSession } from '@/auth/stateless-session';
import { cookies } from 'next/headers';

// 1. Specify protected and public routes
const protectedRoutes = ['/create', '/messages', '/settings', '/settings/edit_profile'];
const publicRoutes = ['/catalog', '/'];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie);

  // 4. Redirect logic
  if (isProtectedRoute && !session?.userId) {
    // Save the current URL to redirect back after login
    const redirectUrl = req.nextUrl.pathname;
    return NextResponse.redirect(new URL(`/catalog?redirect_url=${encodeURIComponent(redirectUrl)}`, req.nextUrl));
  }

  if (isPublicRoute && session?.userId && !req.nextUrl.pathname.startsWith('/catalog')) {
    return NextResponse.redirect(new URL('/catalog', req.nextUrl));
  }

  // 5. Update session
  const response = await updateSession(req);

  if (response) {
    return response;
  }

  return response;
}
