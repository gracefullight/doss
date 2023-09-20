import {
  CheckCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { formatNumber, formatPercent } from "~/utils/number";
import ConnectNudgeFooter from "./ConnectNudgeFooter";

export default function StockTab() {
  const [isShowCurrentPrice, setShowCurrentPrice] = useState(false);
  const [isShowDollar, setShowDollar] = useState(false);

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
      <div className="bg-neutral-800 px-3 pb-4">
        <div className="flex flex-col gap-1 px-1">
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
            className="mb-1 flex cursor-pointer select-none items-center gap-1 self-end px-2"
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
                <div className="flex items-center justify-between">
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
                          <Image
                            src={`https://placehold.co/100x100?text=${stock.ticker}`}
                            alt="thumbnail"
                            loading="lazy"
                            decoding="async"
                            width={100}
                            height={100}
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
      <ConnectNudgeFooter />
    </>
  );
}
