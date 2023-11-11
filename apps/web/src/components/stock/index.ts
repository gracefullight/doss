import dynamic from "next/dynamic";

export { default as FeedbackBanner } from "./FeedbackBanner";
export { default as IndexBanner } from "./IndexBanner";
export { default as MyStocksTab } from "./MyStocksTab";
export { default as NewsTab } from "./NewsTab";
export { default as StockFooter } from "./StockFooter";
export { default as StockMainTabs } from "./StockMainTabs";
export { default as TodaysDiscoveryTab } from "./TodaysDiscoveryTab";
export const DynamicNudgeAlert = dynamic(() => import("./NudgeAlert"), {
  ssr: false,
});
