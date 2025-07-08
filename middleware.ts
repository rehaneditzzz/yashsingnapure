import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) return;

  await auth.protect();

  // 👇 Await session
  const { sessionClaims } = await auth();

  // ✅ Type assertion for publicMetadata
  const role = (sessionClaims?.publicMetadata as { role?: string })?.role;

  // ✅ Protect /admin route based on role
  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (role !== 'admin') {
      return new Response('Unauthorized', { status: 403 });
    }
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
