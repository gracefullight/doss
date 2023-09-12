import { generateOpenApiDocument, type OpenApiRouter } from "trpc-openapi";

import { appRouter } from "~/server/api/root";

// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument(
  appRouter as OpenApiRouter,
  {
    title: "Doss API",
    description: "Duplicated version of Toss application",
    version: "0.1.0",
    baseUrl: "http://localhost:3000/api",
    docsUrl: "https://doss.gracefullight.dev/docs",
    tags: ["banks"],
  },
);
