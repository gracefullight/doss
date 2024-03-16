import {
  Brand,
  DynamicGroupShoppingBanner,
  GroupShopping,
  PayHeader,
  Payback,
  QuickAccessButtons,
  Voucher,
} from "~/components/pay";

export const metadata = {
  title: "도스페이",
};

export default function Pay() {
  return (
    <div className="flex w-screen flex-col">
      <PayHeader />
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
  );
}
