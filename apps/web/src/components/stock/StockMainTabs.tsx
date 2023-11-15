"use client";

import clsx from "clsx";
import { useState } from "react";
import MyStocksTab from "./MyStocksTab";
import NewsTab from "./NewsTab";
import TodaysDiscoveryTab from "./TodaysDiscoveryTab";

export default function StockMainTabs() {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = [
    { name: "내 주식", component: <MyStocksTab /> },
    { name: "오늘의 발견", component: <TodaysDiscoveryTab /> },
    { name: "뉴스", component: <NewsTab /> },
  ];
  return (
    <>
      <div className="tabs tabs-bordered tabs-lg w-full bg-neutral-800 font-medium">
        {tabs.map((tab, index) => (
          <a
            key={tab.name}
            className={clsx("tab", tabIndex === index && "tab-active")}
            onClick={() => setTabIndex(index)}
          >
            {tab.name}
          </a>
        ))}
      </div>
      {tabs[tabIndex]!.component}
    </>
  );
}
