"use client";

import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { StackLayout, StackLayoutNavbar } from "~/components/layout";
import { formatNumber, formatPercent } from "~/utils/number";

export default function StockMajorIndexes() {
  const items = [
    {
      title: "코스피",
      chartValue: 2375.0,
      diffValue: -40.8,
      diffPercent: -0.016,
      categories: [
        { name: "개인", value: 1118 },
        { name: "외국인", value: 2119 },
        { name: "기관", value: -1758 },
      ],
    },
    {
      title: "코스닥",
      chartValue: 769.25,
      diffValue: -14.79,
      diffPercent: 0.018,
      categories: [
        { name: "개인", value: -629 },
        { name: "외국인", value: -558 },
        { name: "기관", value: 1320 },
      ],
    },
    {
      title: "나스닥",
      chartValue: 12938.81,
      diffValue: -202.37,
      diffPercent: 0.015,
      categories: [],
    },
    {
      title: "S&P 500",
      chartValue: 4224.16,
      diffValue: -53.84,
      diffPercent: 0.012,
      categories: [],
    },
    {
      title: "다우존스",
      chartValue: 33127.28,
      diffValue: -286.89,
      diffPercent: 0.008,
      categories: [],
    },
    {
      title: "환율",
      chartValue: 1352.75,
      diffValue: -4.85,
      diffPercent: 0.003,
      categories: [],
    },
  ];

  return (
    <StackLayout>
      <StackLayoutNavbar isLightBackground />
      <div className="flex flex-grow flex-col bg-neutral-800">
        <div className="mt-4 flex flex-row items-end justify-between px-5">
          <h1 className="text-lg font-bold text-neutral-300">주요 지수</h1>
          <span className="text-sm text-neutral-400">
            1일 차트 (10월 23일 기준)
          </span>
        </div>
        <div className="mt-4 flex flex-col">
          {items.map((item) => (
            <Fragment key={item.title}>
              <div className="flex cursor-pointer flex-row items-center justify-between px-5 py-4 active:bg-neutral-700">
                <div className="flex flex-row items-center gap-3">
                  <span>차트</span>
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold text-neutral-300">
                      {item.title}
                    </div>
                    <div className="text-info flex flex-row items-end gap-2">
                      <h2 className="text-lg">
                        {formatNumber(item.chartValue, 2)}
                      </h2>
                      <span className="pb-0.5 text-sm">
                        {item.diffValue >= 0
                          ? `+${formatNumber(item.diffValue, 2)}`
                          : formatNumber(item.diffValue, 2)}
                        (
                        {item.diffPercent >= 0
                          ? `+${formatPercent(item.diffPercent)}`
                          : formatPercent(item.diffPercent)}
                        )
                      </span>
                    </div>
                    <div className="flex flex-row gap-2">
                      {item.categories.map((category, idx) => (
                        <div className="text-sm" key={idx}>
                          <span className="mr-1">{category.name}</span>
                          <span
                            className={
                              category.value >= 0 ? "text-error" : "text-info"
                            }
                          >
                            {category.value >= 0
                              ? `+${formatNumber(category.value)}`
                              : formatNumber(category.value)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-ghost btn-square btn-sm"
                  type="button"
                  title="더보기"
                >
                  <ChevronRightIcon className="w-4 fill-neutral-400" />
                </button>
              </div>
              <div className="divider my-0 px-5"></div>
            </Fragment>
          ))}
        </div>
      </div>
    </StackLayout>
  );
}
