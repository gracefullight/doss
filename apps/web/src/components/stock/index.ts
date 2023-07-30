import dynamic from "next/dynamic";

export { default as IndexBanner } from "./IndexBanner";
export { default as IndexChartCarousel } from "./IndexChartCarousel";
export { default as InterestedStocks } from "./InterestedStocks";
export { default as RecentStocks } from "./RecentStocks";
export { default as RecommendedStocks } from "./RecommendedStocks";
export { default as StockCarousel } from "./StockCarousel";
export const DynamicNudgeAlert = dynamic(() => import("./NudgeAlert"), {
  ssr: false,
});