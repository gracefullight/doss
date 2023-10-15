import Head from "next/head";
import { bankWelcomeToastState } from "~/components/bank";
import { Layout } from "~/components/layout";
import {
  Asset,
  Extra,
  MainCarousel,
  MainNavbar,
  RemitAlert,
  Section,
  Spend,
  Stock,
} from "~/components/main";

export default function Home() {
  const handleBankWelcomeToast = () => {
    bankWelcomeToastState.visible = true;
  };

  return (
    <Layout>
      <Head>
        <title>Doss | 홈</title>
      </Head>
      <MainNavbar />
      <div className="flex w-screen flex-col items-center justify-center gap-4 px-5 py-2">
        <RemitAlert />
        <Section
          title="도스뱅크"
          link="/bank"
          handleLink={handleBankWelcomeToast}
        />
        <Asset />
        <Stock />
        <Spend />
        <MainCarousel />
        <Extra />
      </div>
    </Layout>
  );
}
