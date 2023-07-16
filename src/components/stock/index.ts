import dynamic from "next/dynamic";

export { default as IndexBanner } from "./IndexBanner";
export { default as InterestedStocks } from "./InterestedStocks";
export { default as RecentStocks } from "./RecentStocks";
export { default as RecommendedStocks } from "./RecommendedStocks";
export const DynamicNudgeAlert = dynamic(() => import("./NudgeAlert"), {
  ssr: false,
});
