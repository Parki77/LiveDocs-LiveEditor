import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
<<<<<<< HEAD
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
=======
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
>>>>>>> 8c25921bc852ac713bbc47310cb504002b39defe
};