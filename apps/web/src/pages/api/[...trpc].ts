import { NextApiRequest, NextApiResponse } from "next";
import { createOpenApiNextHandler, type OpenApiRouter } from "trpc-openapi";
import { createTRPCContext } from "~/server/api/trpc";

import { appRouter } from "~/server/api/root";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Handle incoming OpenAPI requests
  return createOpenApiNextHandler({
    router: appRouter as OpenApiRouter,
    createContext: createTRPCContext,
  })(req, res);
};

export default handler;
