import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Head from "next/head";
import { useState } from "react";
import { Layout } from "~/components/layout";
import { IndexBanner, NudgeAlert } from "~/components/stock";
import { formatNumber, formatPercent } from "~/utils/number";

export default function Stock() {
  const [tabIndex, setTabIndex] = useState(0);

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
    <Layout>
      <Head>
        <title>Doss | 주식</title>
      </Head>
      <div className="flex w-screen flex-col gap-4">
        <div className="flex flex-col bg-neutral-800 px-6 pt-4">
          <div className="flex justify-end">
            <button className="btn-ghost btn-square btn">
              <MagnifyingGlassIcon className="w-6" />
            </button>
            <button className="btn-ghost btn-square btn">
              <CalendarIcon className="w-6" />
            </button>
            <button className="btn-ghost btn-square btn">
              <Cog6ToothIcon className="w-6" />
            </button>
          </div>
          <div className="mb-4 flex items-center gap-4">
            <h1 className="text-2xl font-bold text-neutral-200">도스증권</h1>
            <div className="flex self-end text-sm">
              <IndexBanner />
            </div>
          </div>
          <NudgeAlert />
          <div className="tabs w-full font-medium">
            <a
              className={clsx(
                `tab-bordered tab tab-lg w-1/2`,
                tabIndex === 0 && "tab-active"
              )}
              onClick={() => setTabIndex(0)}
            >
              내 주식
            </a>
            <a
              className={clsx(
                `tab-bordered tab tab-lg w-1/2`,
                tabIndex === 1 && "tab-active"
              )}
              onClick={() => setTabIndex(1)}
            >
              오늘의 발견
            </a>
          </div>
          {tabIndex === 0 && (
            <>
              <div className="mt-6 flex flex-col">
                <div className="flex gap-1 font-medium text-neutral-300">
                  <span className="text-lg">보유주식</span>
                  <ChevronRightIcon className="w-4" />
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-2xl text-neutral-200">
                    10,000,000원
                  </span>
                  <button className="btn-sm btn border-none bg-neutral-700 focus:outline-none">
                    내 계좌 보기
                  </button>
                </div>
                <div className="mt-1 text-error">+1,000,000원 (10%)</div>
              </div>
              <div className="mt-6 flex justify-between">
                <div className="dropdown-bottom dropdown">
                  <label tabIndex={0} className="btn-ghost btn-sm btn m-1">
                    가나다 순
                    <ChevronDownIcon className="w-4" />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu rounded-box z-[1] w-52 bg-neutral-700 p-2 shadow"
                  >
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
                </div>
                <div className="flex gap-1">
                  <label className="swap btn-sm btn">
                    <input type="checkbox" />
                    <div className="swap-on">현재가</div>
                    <div className="swap-off">평가금</div>
                  </label>
                  <label className="swap btn-sm btn">
                    <input type="checkbox" />
                    <div className="swap-on">$</div>
                    <div className="swap-off">원</div>
                  </label>
                </div>
              </div>
              <ul className="mt-6 flex flex-col gap-4">
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
                        <div className="placeholder avatar">
                          <div className="w-10 rounded-full bg-neutral-focus text-neutral-content">
                            <span>1</span>
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
              </ul>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
