import { Layout } from "~/components/layout";
import {
  Asset,
  BankLinks,
  DossBank,
  Extra,
  MainCarousel,
  MainNavbar,
  RemitAlert,
  Spend,
  Stock,
} from "~/components/main";

export const metadata = {
  title: "Doss | 홈",
};

export default function Home() {
  return (
    <Layout>
      <MainNavbar />
      <div className="flex w-screen flex-col items-center justify-center gap-4 px-5 py-2">
        <RemitAlert />
        <DossBank />
        <Asset />
        <Stock />
        <Spend />
        <BankLinks />
        <MainCarousel />
        <Extra />
      </div>
    </Layout>
  );
}
