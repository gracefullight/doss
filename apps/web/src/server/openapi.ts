import { generateOpenApiDocument } from "trpc-openapi";

import { appRouter } from "~/server/api/root";

// Generate OpenAPI schema document
// ! https://github.com/jlalmes/trpc-openapi/pull/315
export const openApiDocument = generateOpenApiDocument(appRouter, {
  // ? https://docs.npmjs.com/cli/v10/using-npm/scripts#packagejson-vars
  title: `${process.env.npm_package_name} API Docs`,
  description: process.env.npm_package_description,
  version: `${process.env.npm_package_version}`,
  baseUrl: "http://localhost:3000/api",
  docsUrl: "https://doss.gracefullight.dev/docs",
  tags: ["banks"],
});
