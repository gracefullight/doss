import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const mainRouter = createTRPCRouter({
  getBankAccounts: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    const bankAccounts = await ctx.prisma.bankAccount.findMany({
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
