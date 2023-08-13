import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Head from "next/head";
import { useState } from "react";
import { Layout } from "~/components/layout";
import {
  DynamicNudgeAlert,
  FeedbackBanner,
  IndexBanner,
  IndexChartCarousel,
  InterestedStocks,
  RecentStocks,
  RecommendedStocks,
  StockCarousel,
  StockFooter,
} from "~/components/stock";
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
      <div className="flex w-screen flex-col">
        <div className="sticky top-0 z-50 flex justify-end bg-neutral-800 px-6 pt-4">
          <button
            className="btn btn-square btn-ghost"
            title="검색"
            type="button"
          >
            <MagnifyingGlassIcon className="w-6" />
          </button>
          <button
            className="btn btn-square btn-ghost"
            title="캘린더"
            type="button"
          >
            <CalendarIcon className="w-6" />
          </button>
          <button
            className="btn btn-square btn-ghost"
            title="설정"
            type="button"
          >
            <Cog6ToothIcon className="w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="bg-neutral-800 px-6">
              <div className="mb-4 flex items-center gap-4">
                <h1 className="text-2xl font-bold text-neutral-200">
                  도스증권
                </h1>
                <div className="flex self-end text-sm">
                  <IndexBanner />
                </div>
              </div>
              <DynamicNudgeAlert />
            </div>
            <div className="tabs w-full bg-neutral-800 px-6 font-medium">
              <a
                className={clsx(
                  `tab tab-bordered tab-lg w-1/3`,
                  tabIndex === 0 && "tab-active",
                )}
                onClick={() => setTabIndex(0)}
              >
                내 주식
              </a>
              <a
                className={clsx(
                  `tab tab-bordered tab-lg w-1/3`,
                  tabIndex === 1 && "tab-active",
                )}
                onClick={() => setTabIndex(1)}
              >
                오늘의 발견
              </a>
              <a
                className={clsx(
                  `tab tab-bordered tab-lg w-1/3`,
                  tabIndex === 2 && "tab-active",
                )}
                onClick={() => setTabIndex(2)}
              >
                뉴스
              </a>
            </div>
            {tabIndex === 0 && (
              <>
                <div className="bg-neutral-800 px-6">
                  <div className="mt-6 flex flex-col">
                    <div className="flex gap-1 font-medium text-neutral-300">
                      <span className="text-lg">보유주식</span>
                      <ChevronRightIcon className="w-4" />
                    </div>
                    <div className="mt-2 flex justify-between">
                      <span className="text-2xl text-neutral-200">
                        10,000,000원
                      </span>
                      <button className="btn btn-sm border-none bg-neutral-700 focus:outline-none">
                        내 계좌 보기
                      </button>
                    </div>
                    <div className="text-error mt-1">+1,000,000원 (10%)</div>
                  </div>
                  <div className="mt-6 flex justify-between">
                    <div className="dropdown dropdown-bottom">
                      <label tabIndex={0} className="btn btn-ghost btn-sm m-1">
                        가나다 순
                        <ChevronDownIcon className="w-4" />
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu dropdown-content rounded-box z-[1] w-52 bg-neutral-700 p-2 shadow"
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
                            <div className="avatar placeholder">
                              <div className="bg-neutral-focus text-neutral-content w-10 rounded-full">
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
                    <li className="flex items-center">
                      <div className="flex items-center space-x-3">
                        <div className="avatar placeholder">
                          <div className="bg-info w-10 rounded-full bg-opacity-20">
                            <PlusIcon className="fill-info w-6" />
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
                        <ChevronRightIcon className="w-4" />
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center justify-between  py-1">
                      <span className="text-lg text-neutral-300">판매수익</span>
                      <div className="flex  gap-2 text-neutral-400">
                        <span>이번 달 {formatNumber(-100000)}원</span>
                        <ChevronRightIcon className="w-4" />
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center justify-between py-1">
                      <span className="text-lg text-neutral-300">
                        예상 배당금
                      </span>
                      <div className="flex gap-2 text-neutral-400">
                        <span>이번 달 {formatNumber(40000)}원</span>
                        <ChevronRightIcon className="w-4" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 bg-neutral-800 px-6 py-4">
                  <RecentStocks />
                </div>

                <div className="mt-4 bg-neutral-800 px-6 py-4">
                  <InterestedStocks />
                </div>

                <div className="mt-4 bg-neutral-800 px-6 py-4">
                  <RecommendedStocks />
                </div>
                <div className="mt-4 bg-neutral-800 px-6 py-4">
                  <StockCarousel />
                </div>
              </>
            )}
            {tabIndex === 1 && (
              <>
                <div className="bg-neutral-800 px-6">
                  <div className="mt-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-medium text-neutral-300">
                        주요 지수
                      </div>
                      <div className="btn btn-link btn-sm text-neutral-400 no-underline hover:no-underline">
                        전체보기
                        <ChevronRightIcon className="w-4 font-medium" />
                      </div>
                    </div>
                    <IndexChartCarousel />
                  </div>
                </div>
              </>
            )}
            <div className="px-6">
              <FeedbackBanner />
              <div className="divider"></div>
              <StockFooter />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
