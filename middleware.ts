import { authMiddleware } from '@clerk/nextjs/server'

export default authMiddleware({
  publicRoutes: ["/", "/auth/sign-in(.*)", "/auth/sign-up(.*)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};