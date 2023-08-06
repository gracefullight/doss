import { Cog6ToothIcon, CommandLineIcon } from "@heroicons/react/24/solid";
import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { Layout } from "~/components/layout";
import {
  Brand,
  GroupShopping,
  GroupShoppingBanner,
  Payback,
  QuickAccessButtons,
  Voucher,
} from "~/components/pay";
import { PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";

export default function Pay() {
  return (
    <Layout>
      <Head>
        <title>Doss | 도스페이</title>
      </Head>
      <div className="flex w-screen flex-col">
        <div className="sticky top-0 z-50 flex justify-end bg-neutral-800 px-6 pt-4">
          <button
            className="btn btn-square btn-ghost"
            title="페이"
            type="button"
          >
            <CommandLineIcon className="w-6" />
          </button>
          <button
            className="btn btn-square btn-ghost"
            title="설정"
            type="button"
          >
            <Cog6ToothIcon className="w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col bg-neutral-800 px-6 pb-6">
            <div className="mb-2 flex items-center justify-between">
              <h1 className="text-2xl font-bold text-neutral-200">도스페이</h1>
            </div>
            <GroupShoppingBanner />
            <QuickAccessButtons />
            <GroupShopping />
          </div>
          <Voucher />
          <Payback />
          <Brand />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerAuthSession({
    req: context.req,
    res: context.res,
  });

  if (!session) {
    return {
      redirect: {
        destination: PATH_SIGNIN,
        permanent: false,
      },
    };
  }

  return { props: {} };
}
