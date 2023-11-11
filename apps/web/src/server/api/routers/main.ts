import * as z from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const mainRouter = createTRPCRouter({
  getBankAccounts: protectedProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/banks/accounts",
        tags: ["banks"],
      },
    })
    .input(z.object({}))
    .output(
      z.array(
        z.object({
          name: z.string(),
          balance: z.number(),
        }),
      ),
    )
    .query(async ({ ctx }) => {
      const userId = ctx.session.user.id;
      const bankAccounts = await ctx.db.bankAccount.findMany({
        where: {
          userId: userId,
        },
        select: {
          name: true,
          balance: true,
        },
      });
      return bankAccounts;
    }),
});
