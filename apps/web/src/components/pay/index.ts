import dynamic from "next/dynamic";

export { default as Brand } from "./Brand";
export { default as GroupShopping } from "./GroupShopping";
export { default as Payback } from "./Payback";
export { default as QuickAccessButtons } from "./QuickAccessButtons";
export { default as Voucher } from "./Voucher";
export const GroupShoppingBanner = dynamic(
  () => import("./group-shopping/GroupShoppingBanner"),
  { ssr: false },
);
