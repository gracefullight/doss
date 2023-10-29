import clsx from "clsx";
import { useState } from "react";
import { useSnapshot } from "valtio";
import { BankWelcomeToast, MyBankTab, bankFontState } from "~/components/bank";
import { StackLayout } from "~/components/layout";

export default function Bank() {
  const navItems = [{ title: "설정", link: "/bank/setting" }];
  const tabs = [
    { name: "내 도스뱅크", component: <MyBankTab /> },
    { name: "상품 찾기", component: null },
  ];

  const [tabIndex, setTabIndex] = useState(0);
  const { isLargeFont } = useSnapshot(bankFontState);

  return (
    <StackLayout items={navItems} isLightBackground>
      <div className="flex flex-grow flex-col bg-neutral-800">
        <div className="tabs w-full bg-neutral-800 px-5">
          {tabs.map((tab, idx) => (
            <a
              key={tab.name}
              className={clsx(`tab tab-bordered tab-lg w-1/2`, {
                "tab-active": tabIndex === idx,
                "text-2xl": isLargeFont,
              })}
              onClick={() => setTabIndex(idx)}
            >
              {tab.name}
            </a>
          ))}
        </div>
        {tabs[tabIndex]?.component}
      </div>
      <BankWelcomeToast />
    </StackLayout>
  );
}
