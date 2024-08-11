import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
	publicRoutes: ['/'],
});
// export default authMiddleware({});

export const config = {
	matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
