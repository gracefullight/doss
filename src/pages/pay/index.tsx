import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { Layout } from "~/components/layout";
import { Brand, GroupShopping, Payback, Voucher } from "~/components/pay";
import { PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";

export default function Pay() {
  return (
    <Layout>
      <Head>
        <title>Doss | 도스페이</title>
      </Head>
      <div className="flex w-screen flex-col gap-4">
        <div className="bg-neutral-800 px-6 pb-6 pt-10">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-neutral-200">도스페이</h1>
          </div>
          <div className="join mb-10 w-full">
            <button className="join-item btn grow rounded-l-2xl border-neutral-700 bg-neutral-700">
              주문내역
            </button>
            <button className="join-item btn grow border-neutral-700 bg-neutral-700">
              기프티콘
            </button>
            <button className="join-item btn grow rounded-r-2xl border-neutral-700 bg-neutral-700">
              결제관리
            </button>
          </div>
          <GroupShopping />
        </div>
        <Voucher />
        <Payback />
        <Brand />
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
