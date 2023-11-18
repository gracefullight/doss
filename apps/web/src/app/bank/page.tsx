"use client";

import clsx from "clsx";
import { useState } from "react";
import { useSnapshot } from "valtio";
import {
  BankProductsTab,
  BankWelcomeToast,
  MyBankTab,
  bankFontState,
} from "~/components/bank";
import { StackLayout, StackLayoutNavbar } from "~/components/layout";

export default function Bank() {
  const navItems = [{ title: "설정", link: "/bank/setting" }];
  const tabs = [
    { name: "내 도스뱅크", component: <MyBankTab /> },
    { name: "상품 찾기", component: <BankProductsTab /> },
  ];

  const [tabIndex, setTabIndex] = useState(0);
  const { isLargeFont } = useSnapshot(bankFontState);

  return (
    <StackLayout>
      <StackLayoutNavbar items={navItems} isLightBackground />
      <div className="flex flex-grow flex-col bg-neutral-800">
        <div className="tabs tabs-lg tabs-bordered w-full  bg-neutral-800 px-5">
          {tabs.map((tab, idx) => (
            <a
              key={tab.name}
              className={clsx(`tab`, {
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
