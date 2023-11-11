import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { StackLayout, StackLayoutNavbar } from "~/components/layout";

export default function InvestConnect() {
  const navItems = [
    {
      title: "검색",
      IconComponent: MagnifyingGlassIcon,
    },
  ];

  return (
    <StackLayout>
      <StackLayoutNavbar items={navItems} />
      <div className="px-5">
        <h1 className="text-lg text-neutral-300">어떤 계좌를 연결할까요?</h1>
      </div>
      <div className="flex flex-col px-5">
        <div className="tabs mt-4">
          <a className="tab tab-lg tab-bordered tab-active">증권</a>
          <a className="tab tab-lg tab-bordered">은행</a>
        </div>
      </div>
    </StackLayout>
  );
}
