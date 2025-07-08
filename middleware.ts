import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) return;

  const { sessionClaims } = await auth(); // 👈 Wait for session

  const role = (sessionClaims?.publicMetadata as { role?: string })?.role;

  if (req.nextUrl.pathname.startsWith('/admin')) {
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
