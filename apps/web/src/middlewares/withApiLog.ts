import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { match } from "path-to-regexp";
import pino from "pino";

import type { MiddlewareFactory } from "./stackMiddlewares";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: { colorize: true },
  },
  level: process.env.LOG_LEVEL ?? "info",
});

export const withApiLog: MiddlewareFactory = (next) => {
  const loggingPaths = ["/api"];
  const excludeLoggingPaths = ["/api/trpc"];

  const loggingPathPatterns = loggingPaths.map((pattern) =>
    match(pattern, { end: false }),
  );

  const excludeLoggingPathPatterns = excludeLoggingPaths.map((pattern) =>
    match(pattern, { end: false }),
  );

  return async (req: NextRequest, ev: NextFetchEvent) => {
    const {
      nextUrl: { pathname },
    } = req;

    const shouldLog =
      loggingPathPatterns.some((matcher) => matcher(pathname)) &&
      !excludeLoggingPathPatterns.some((matcher) => matcher(pathname)) &&
      logger.isLevelEnabled("info");

    if (shouldLog) {
      // Log the request details
      logger.info({
        type: "Request",
        path: pathname,
        method: req.method,
        headers: Object.fromEntries(req.headers.entries()),
        query: req.nextUrl.searchParams.toString(),
      });

      // Intercept the response using a custom handler
      const originalResponse = NextResponse.next();
      const cloneResponse = originalResponse.clone();

      // Log the response details
      logger.info({
        type: "Response",
        path: pathname,
        status: cloneResponse.status,
        headers: Object.fromEntries(cloneResponse.headers.entries()),
      });

      // Return the response with the original body
      return originalResponse;
    }

    return next(req, ev);
  };
};
