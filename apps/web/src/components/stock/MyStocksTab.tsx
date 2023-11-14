import clsx from "clsx";
import { ChevronDownIcon, ChevronRightIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import { formatNumber, formatPercent } from "~/utils/number";
import {
  InterestedStocks,
  RecentStocks,
  RecommendedStocks,
  StockCarousel,
} from "./my-stocks";

export default function MyStocksTab() {
  const stocks = [
    {
      ticker: "MSFT",
      title: "마이크로소프트",
      count: 3,
      currentPrice: 1000000,
      purchasePrice: 900000,
    },
    {
      ticker: "AAPL",
      title: "애플",
      count: 5,
      currentPrice: 1000000,
      purchasePrice: 900000,
    },
    {
      ticker: "TQQQ",
      title: "TQQQ",
      count: 100,
      currentPrice: 5000000,
      purchasePrice: 3000000,
    },
  ];

  return (
    <>
      <div className="bg-neutral-800 px-6">
        <div className="mt-6 flex flex-col">
          <div className="flex items-center gap-1 font-medium text-neutral-300">
            <span className="text-lg">보유주식</span>
            <ChevronRightIcon name="chevron-right" size={20} />
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-2xl text-neutral-200">10,000,000원</span>
            <button
              className="btn btn-sm border-none bg-neutral-700 focus:outline-none"
              type="button"
            >
              내 계좌 보기
            </button>
          </div>
          <div className="text-error mt-1">+1,000,000원 (10%)</div>
        </div>
        <div className="mt-6 flex justify-between">
          <details className="dropdown dropdown-bottom">
            <summary className="btn btn-ghost btn-sm m-1">
              가나다 순
              <ChevronDownIcon name="chevron-down" size={20} />
            </summary>
            <ul className="menu dropdown-content rounded-box z-[1] w-52 bg-neutral-700 p-2 shadow">
              <li>
                <a>가나다 순</a>
              </li>
              <li>
                <a>총 수익률 낮은 순</a>
              </li>
              <li>
                <a>총 수익률 높은 순</a>
              </li>
            </ul>
          </details>
          <div className="flex gap-1">
            <label className="btn swap btn-sm">
              <input type="checkbox" />
              <div className="swap-on">현재가</div>
              <div className="swap-off">평가금</div>
            </label>
            <label className="btn swap btn-sm">
              <input type="checkbox" />
              <div className="swap-on">$</div>
              <div className="swap-off">원</div>
            </label>
          </div>
        </div>
        <ul className="mb-4 mt-6 flex flex-col gap-4">
          {stocks.map((item) => {
            const priceGap = item.currentPrice - item.purchasePrice;
            const percentChange = priceGap / item.purchasePrice;

            let priceSign = "";
            let priceClassName = "text-neutral";

            if (priceGap > 0) {
              priceSign = "+";
              priceClassName = "text-error";
            } else if (priceGap < 0) {
              priceSign = "-";
              priceClassName = "text-info";
            }

            return (
              <li
                key={item.ticker}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="h-10 w-10 rounded-full">
                      <Image
                        src={`https://placehold.co/100x100?text=${item.ticker}`}
                        alt="thumbnail"
                        loading="lazy"
                        decoding="async"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">{item.title}</span>
                    <span className="text-sm text-neutral-400">
                      {formatNumber(item.count)}주
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-medium">
                    {formatNumber(item.currentPrice)}원
                  </span>
                  <span className={clsx("text-sm", priceClassName)}>
                    {`${priceSign}${formatNumber(priceGap)}`} (
                    {formatPercent(percentChange)})
                  </span>
                </div>
              </li>
            );
          })}
          <li className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="avatar placeholder">
                <div className="bg-info w-10 rounded-full bg-opacity-20">
                  <PlusIcon name="plus" className="text-blue-500" size={24} />
                </div>
              </div>
              <span className="font-medium text-neutral-400">
                주식 옮겨오기
              </span>
            </div>
          </li>
        </ul>
        <div className="divider"></div>
        <div className="mb-2 flex flex-col gap-3">
          <div className="flex cursor-pointer items-center justify-between py-1">
            <span className="text-lg text-neutral-300">주문내역</span>
            <div className="text-neutral-400">
              <ChevronRightIcon name="chevron-right" size={20} />
            </div>
          </div>
          <div className="flex cursor-pointer items-center justify-between  py-1">
            <span className="text-lg text-neutral-300">판매수익</span>
            <div className="flex  gap-2 text-neutral-400">
              <span>이번 달 {formatNumber(-100000)}원</span>
              <ChevronRightIcon name="chevron-right" size={20} />
            </div>
          </div>
          <div className="flex cursor-pointer items-center justify-between py-1">
            <span className="text-lg text-neutral-300">예상 배당금</span>
            <div className="flex gap-2 text-neutral-400">
              <span>이번 달 {formatNumber(40000)}원</span>
              <ChevronRightIcon name="chevron-right" size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <RecentStocks />
        <InterestedStocks />
        <Suspense fallback={null}>
          <RecommendedStocks />
        </Suspense>
        <StockCarousel />
      </div>
    </>
  );
}
