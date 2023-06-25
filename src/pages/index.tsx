import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { Layout } from "~/components/layout";
import {
  Asset,
  Extra,
  MainNavbar,
  Section,
  ServiceCarousel,
  Spend,
  Stock,
} from "~/components/main";
import { PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Doss | 홈</title>
      </Head>
      <MainNavbar />
      <div className="flex w-screen flex-col items-center justify-center gap-4 px-6 py-2">
        <Section title="도스뱅크" link="/" />
        <Asset />
        <Stock />
        <Spend />
        <ServiceCarousel />
        <Extra />
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
