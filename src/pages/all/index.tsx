import { Cog6ToothIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { Layout } from "~/components/layout";
import { PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";

export default function All() {
  return (
    <Layout>
      <Head>
        <title>Doss | 전체</title>
      </Head>
      <div className="flex w-screen flex-col gap-4 bg-neutral-800 px-6 pt-4">
        <div className="flex justify-end">
          <button className="btn-ghost btn-square btn">
            <MagnifyingGlassIcon className="w-6" />
          </button>
          <button className="btn-ghost btn-square btn">
            <Cog6ToothIcon className="w-6" />
          </button>
        </div>
        <div className="mb-4 flex items-center gap-4">
          <h1 className="text-2xl font-bold text-neutral-200">전체</h1>
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
