"use client";

import clsx from "clsx";
import { PlusIcon, SendIcon } from "lucide-react";
import { useState } from "react";
import { StackLayout, StackLayoutNavbar } from "~/components/layout";
import {
  ByAccountTab,
  ByProductTab,
  FeedbackToast,
} from "~/components/stock/investment";
import { PATH_INVESTMENT_CONNECT } from "~/constants";

export default function BankInvestment() {
  const [tabIndex, setTabIndex] = useState(0);
  const navItems = [
    {
      title: "계좌 추가",
      IconComponent: <PlusIcon name="plus" size={20} />,
      link: PATH_INVESTMENT_CONNECT,
    },
    {
      title: "피드백",
      IconComponent: <SendIcon name="send" size={20} />,
      link: "/stock/investment/feedback",
    },
  ];

  return (
    <StackLayout>
      <StackLayoutNavbar
        title="투자 모아보기"
        items={navItems}
        isLightBackground
      />
      <div className="flex flex-col pb-4">
        <div className="tabs tabs-lg tabs-bordered w-full bg-neutral-800 px-5">
          <a
            className={clsx("tab", tabIndex === 0 && "tab-active")}
            onClick={() => setTabIndex(0)}
          >
            상품별
          </a>
          <a
            className={clsx("tab", tabIndex === 1 && "tab-active")}
            onClick={() => setTabIndex(1)}
          >
            계좌별
          </a>
        </div>
        {tabIndex === 0 && <ByProductTab />}
        {tabIndex === 1 && <ByAccountTab />}
      </div>
      <FeedbackToast />
    </StackLayout>
  );
}
