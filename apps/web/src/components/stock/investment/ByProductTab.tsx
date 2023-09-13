import {
  ChartBarSquareIcon,
  ChartPieIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useState } from "react";
import { formatNumber, formatPercent } from "~/utils/number";

export default function ByProductTab() {
  const [tabIndex, setTabIndex] = useState(0);
  const [isShowCurrentPrice, setShowCurrentPrice] = useState(false);
  const [isShowDollar, setShowDollar] = useState(false);

  const tabs = [
    {
      name: "주식",
    },
    { name: "펀드" },
    { name: "기타" },
  ];

  const items = [
    {
      title: "포트폴리오",
      IconComponent: ChartPieIcon,
      iconColor: "fill-blue-500",
      extraInfo: null,
    },
    {
      title: "배당금 보기",
      IconComponent: ChartBarSquareIcon,
      iconColor: "fill-red-500",
      extraInfo: `이번 달 ${formatNumber(900)}원 예상`,
    },
  ];

  const stockItems = [
    {
      category: "국내",
      stocks: [
        {
          name: "리노공업",
          ticker: "leeno",
          quantity: 5,
          price: 900000,
          change: 30000,
          changePercent: 0.03,
          currentPrice: 160700,
        },
      ],
    },
    {
      category: "해외",
      stocks: [
        {
          name: "TQQQ",
          ticker: "tqqq",
          quantity: 200,
          price: 10000000,
          change: 3000000,
          changePercent: 0.3,
          currentPrice: 54108,
        },
        {
          name: "테슬라",
          ticker: "tsla",
          quantity: 10,
          price: 3000000,
          change: 150000,
          changePercent: 0.05,
          currentPrice: 331996,
        },
      ],
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
            <ChevronDownIcon className="w-4" />
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
                <item.IconComponent className={clsx("w-6", item.iconColor)} />
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
                  <ChevronRightIcon className="w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-col bg-neutral-800 px-3 py-4">
        <div className="px-2">
          <div className="tabs tabs-boxed bg-neutral-700 font-medium">
            {tabs.map((tab, index) => (
              <a
                key={tab.name}
                className={clsx(
                  "tab w-1/3",
                  tabIndex === index && "tab-active",
                )}
                onClick={() => setTabIndex(index)}
              >
                {tab.name}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-1 px-1">
          <span className="px-1 text-sm text-neutral-500">전체 평가금액</span>
          <div className="flex flex-row">
            <button
              className="btn btn-sm btn-ghost rounded-lg px-1"
              type="button"
            >
              <h1 className="text-lg">{formatNumber(20000000)}원</h1>
              <QuestionMarkCircleIcon className="w-5 fill-neutral-500" />
            </button>
          </div>
          <span className="text-error px-1 text-sm">
            {formatNumber(1000000)}원 ({formatPercent(0.06)})
          </span>
        </div>
        <div className="mt-1 flex flex-col gap-2">
          <div
            className="mb-4 flex cursor-pointer select-none items-center gap-1 self-end px-2"
            onClick={() => setShowCurrentPrice(!isShowCurrentPrice)}
          >
            <CheckCircleIcon
              className={clsx(
                "w-6",
                isShowCurrentPrice ? "fill-blue-500" : "fill-neutral-500",
              )}
            />
            <span className="text-sm text-neutral-500">현재가</span>
          </div>
          <div className="flex flex-col gap-1">
            {stockItems.map((categoryItem) => (
              <div
                key={categoryItem.category}
                className={clsx(categoryItem.category === "해외" && "mt-4")}
              >
                <div className="flex justify-between">
                  <span className="mb-1 px-2 text-sm text-neutral-500">
                    {categoryItem.category}
                  </span>
                  {categoryItem.category === "해외" && (
                    <button
                      className="btn btn-sm btn-link text-neutral-500"
                      type="button"
                      onClick={() => setShowDollar(!isShowDollar)}
                    >
                      {isShowDollar ? "원화로 보기" : "달러로 보기"}
                    </button>
                  )}
                </div>
                {categoryItem.stocks.map((stock) => (
                  <div
                    key={stock.ticker}
                    className="flex cursor-pointer justify-between rounded-xl p-2 active:bg-neutral-700"
                  >
                    <div className="flex items-center gap-2">
                      <div className="avatar">
                        <div className="h-8 w-8 rounded-full">
                          <img
                            src={`https://placehold.co/100x100?text=${stock.ticker}`}
                            alt="thumbnail"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="font-medium text-neutral-300">
                          {stock.name}
                        </div>
                        <span className="text-sm text-neutral-500">
                          {stock.quantity}주
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="font-medium text-neutral-300">
                        {formatNumber(
                          isShowCurrentPrice ? stock.currentPrice : stock.price,
                        )}
                        원
                      </div>
                      <span className="text-sm text-red-500">
                        {formatNumber(stock.change)} (
                        {formatPercent(stock.changePercent, 2)})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center">
        <ChartPieIcon className="fill-info w-6" />
        <div className="mt-4 text-center text-neutral-300">
          다른 증권사도 쓴다면 연결해보세요
          <br />한 번에 모아 볼 수 있어요
        </div>
        <button className="btn btn-info btn-sm mt-2" type="button">
          한 번에 모아보기
        </button>
      </div>
    </>
  );
}
