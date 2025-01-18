import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// Protected routes that require authentication
const protectedRoutes = [
  '/account',
  '/orders',
  '/checkout',
];

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip middleware for API routes and public assets
  if (pathname.startsWith('/api') || pathname.startsWith('/_next') || pathname.includes('.')) {
    return NextResponse.next();
  }

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  // Get the token from cookies
  const token = request.cookies.get('token');

  if (!token) {
    console.log('No token found, redirecting to login');
    // Redirect to login if no token is found
    const loginUrl = new URL('/auth/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    // Verify the token using jose (since we can't use the auth.js functions in middleware)
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key');
    await jwtVerify(token.value, secret);
    console.log('Token verified, allowing access to protected route');
    return NextResponse.next();
  } catch (error) {
    console.error('Token verification failed:', error);
    // If token is invalid, clear it and redirect to login
    const response = NextResponse.redirect(new URL('/auth/login', request.url));
    response.cookies.delete('token');
    return response;
  }
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
