import { Cog6ToothIcon, CommandLineIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "~/components/layout";
import {
  Brand,
  DynamicGroupShoppingBanner,
  GroupShopping,
  Payback,
  QuickAccessButtons,
  Voucher,
} from "~/components/pay";

export default function Pay() {
  const router = useRouter();
  const handlePaySetting = async () => {
    await router.push("/pay/setting");
  };
  return (
    <Layout>
      <Head>
        <title>Doss | 도스페이</title>
      </Head>
      <div className="flex w-screen flex-col">
        <div className="sticky top-0 z-50 flex justify-end bg-neutral-800 px-4 pt-2">
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
            onClick={() => void handlePaySetting()}
          >
            <Cog6ToothIcon className="w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col bg-neutral-800 pb-1">
            <div className="mb-2 flex items-center justify-between px-6">
              <h1 className="text-2xl font-bold text-neutral-200">도스페이</h1>
            </div>
            <DynamicGroupShoppingBanner />
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
