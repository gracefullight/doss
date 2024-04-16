import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { pathToRegexp } from "path-to-regexp";
import pino from "pino";
import type { MiddlewareFactory } from "./stackMiddlewares";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: { colorize: true },
  },
  level: process.env.LOG_LEVEL || "info",
});

export const withApiLog: MiddlewareFactory = (next) => {
  const loggingPaths = ["/api"];
  const excludeLoggingPaths = ["/api/trpc"];

  const loggingPathPatterns = loggingPaths.map((pattern) =>
    pathToRegexp(pattern, undefined, { end: false }),
  );

  const excludeLoggingPathPatterns = excludeLoggingPaths.map((pattern) =>
    pathToRegexp(pattern, undefined, { end: false }),
  );

  return async (req: NextRequest, ev: NextFetchEvent) => {
    const {
      nextUrl: { pathname },
    } = req;

    const shouldLog =
      loggingPathPatterns.some((pattern) => pattern.test(pathname)) &&
      !excludeLoggingPathPatterns.some((pattern) => pattern.test(pathname)) &&
      logger.isLevelEnabled("info");

    if (shouldLog) {
      const contentType = req.headers.get("content-type");
      let requestBody = "";

      if (contentType?.includes("application/json")) {
        requestBody = await req.text();
      }

      // Log the request details
      logger.info({
        type: "Request",
        path: pathname,
        method: req.method,
        headers: req.headers,
        query: req.nextUrl.searchParams.toString(),
        body: requestBody,
      });

      // Intercept the response using a custom handler
      const originalResponse = NextResponse.next();
      const cloneResponse = originalResponse.clone();

      const responseBody = await cloneResponse.text();

      // Log the response details
      logger.info({
        type: "Response",
        path: pathname,
        status: cloneResponse.status,
        headers: Object.fromEntries(cloneResponse.headers.entries()),
        body: responseBody,
      });

      // Return the response with the original body
      return originalResponse;
    }

    return next(req, ev);
  };
};
