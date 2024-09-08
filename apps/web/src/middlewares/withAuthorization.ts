import { getToken } from "next-auth/jwt";
import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { match } from "path-to-regexp";

import { PATH_SIGNIN } from "~/constants";
import type { MiddlewareFactory } from "./stackMiddlewares";

export const withAuthorization: MiddlewareFactory = (next) => {
  // Define path patterns and convert them to RegExp using path-to-regexp
  const exactMatchPaths = ["/"];
  const prefixMatchPaths = [
    "/all",
    "/bank",
    "/benefit",
    "/notification",
    "/pay",
    "/stock",
  ];

  const exactPathPatterns = exactMatchPaths.map((pattern) => match(pattern));

  const prefixMatchPatterns = prefixMatchPaths.map((pattern) =>
    match(pattern, { end: false }),
  );

  const allPathPatterns = [...exactPathPatterns, ...prefixMatchPatterns];

  return async (req: NextRequest, _next: NextFetchEvent) => {
    const {
      nextUrl: { pathname },
    } = req;

    if (allPathPatterns.some((matcher) => matcher(pathname))) {
      const token = await getToken({ req });
      if (!token) {
        const nextUrl = new URL(PATH_SIGNIN, req.url);
        nextUrl.searchParams.set("callbackUrl", pathname.toString());
        return NextResponse.redirect(nextUrl);
      }
    }

    return next(req, _next);
  };
};
