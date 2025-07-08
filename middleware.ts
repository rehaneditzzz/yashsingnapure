import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { clerkClient } from '@clerk/clerk-sdk-node'; // ✅ Correct Clerk SDK import

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) return;

  const { sessionClaims, userId } = await auth(); // ✅ Await auth() properly

  // ✅ Role-based check for /admin
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const user = await clerkClient.users.getUser(userId!);
    const role = user.publicMetadata?.role;

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
