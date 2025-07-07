import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
]);

export default clerkMiddleware((auth, req) => {
  // Allow public routes
  if (isPublicRoute(req)) return;

  // Protect all private routes
  auth().protect();

  // Role-based access for /admin
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const { sessionClaims } = auth();
    const role = (sessionClaims?.publicMetadata as { role?: string })?.role;

    if (role !== 'admin') {
      return new Response('Unauthorized', { status: 403 });
    }
  }
});

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};
