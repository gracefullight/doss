import {
  DynamicNudgeAlert,
  FeedbackBanner,
  IndexBanner,
  StockFooter,
  StockMainTabs,
} from "~/components/stock";
import StockHeader from "~/components/stock/StockHeader";

export const metadata = {
  title: "주식",
};

export default function Stock() {
  return (
    <div className="flex w-screen flex-col">
      <StockHeader />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <div className="bg-neutral-800 px-6">
            <div className="mb-4 flex items-center gap-4">
              <h1 className="font-bold text-2xl text-neutral-200">도스증권</h1>
              <div className="flex self-end text-sm">
                <IndexBanner />
              </div>
            </div>
            <DynamicNudgeAlert />
          </div>
          <StockMainTabs />
          <div className="px-6">
            <FeedbackBanner />
            <div className="divider" />
            <StockFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
