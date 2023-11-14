"use client";

import clsx from "clsx";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  PieChartIcon,
  TrendingUpIcon,
} from "lucide-react";
import { useState } from "react";
import { formatNumber, formatPercent } from "~/utils/number";
import EtcTab from "./EtcTab";
import FundTab from "./FundTab";
import StockTab from "./StockTab";

export default function ByProductTab() {
  const [tabIndex, setTabIndex] = useState(0);

  const tabs = ["주식", "펀드", "기타"];

  const items = [
    {
      title: "포트폴리오",
      IconComponent: (
        <PieChartIcon name="pie-chart" className="text-blue-500" size={24} />
      ),
      extraInfo: null,
    },
    {
      title: "배당금 보기",
      iconColor: "fill-red-500",
      IconComponent: (
        <TrendingUpIcon name="trending-up" className="text-red-500" size={24} />
      ),
      extraInfo: `이번 달 ${formatNumber(900)}원 예상`,
    },
  ];

  return (
    <>
      <div className="flex flex-col bg-neutral-800 px-3 pb-2 pt-6">
        <span className="ml-1 px-1 font-medium text-neutral-300">
          총 2개 계좌 합산
        </span>
        <div className="flex flex-row px-1">
          <button className="btn btn-ghost rounded-lg px-1" type="button">
            <h1 className="text-2xl">{formatNumber(20000000)}원</h1>
            <ChevronDownIcon name="chevron-down" size={16} />
          </button>
        </div>
        <span className="text-error px-2 text-sm">
          총손익 {formatNumber(1000000)}원 ({formatPercent(0.11)})
        </span>
        <div className="mt-4 flex flex-col gap-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex cursor-pointer select-none items-center justify-between rounded-lg py-1 pl-2 pr-1 active:bg-neutral-600"
            >
              <div className="flex gap-2">
                {item.IconComponent}
                <div className="text-neutral-400">{item.title}</div>
              </div>
              <div className="flex items-center gap-3">
                {item.extraInfo && (
                  <div className="text-neutral-400">{item.extraInfo}</div>
                )}
                <button
                  className="btn btn-square btn-sm btn-ghost"
                  type="button"
                  title={item.title}
                >
                  <ChevronRightIcon name="chevron-right" size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-col bg-neutral-800 px-3 py-4">
        <div className="px-2">
          <div className="tabs tabs-boxed bg-neutral-700 font-medium">
            {tabs.map((tabName, index) => (
              <a
                key={tabName}
                className={clsx(
                  "tab w-1/3",
                  tabIndex === index && "tab-active",
                )}
                onClick={() => setTabIndex(index)}
              >
                {tabName}
              </a>
            ))}
          </div>
        </div>
      </div>
      {tabIndex === 0 && <StockTab />}
      {tabIndex === 1 && <FundTab />}
      {tabIndex === 2 && <EtcTab />}
    </>
  );
}
