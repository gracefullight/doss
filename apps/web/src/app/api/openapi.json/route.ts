import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";
import { openApiDocument } from "~/server/openapi";

// Respond with our OpenAPI schema
const handler = (_: NextRequest) => {
  // ? https://nextjs.org/docs/app/api-reference/functions/next-response#json
  return NextResponse.json(openApiDocument);
};

export { handler as GET };
