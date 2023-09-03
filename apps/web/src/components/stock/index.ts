import dynamic from "next/dynamic";

export { default as FeedbackBanner } from "./FeedbackBanner";
export { default as IndexBanner } from "./IndexBanner";
export { default as MyStocks } from "./MyStocks";
export { default as News } from "./News";
export { default as StockFooter } from "./StockFooter";
export { default as TodaysDiscovery } from "./TodaysDiscovery";
export const DynamicNudgeAlert = dynamic(() => import("./NudgeAlert"), {
  ssr: false,
});
