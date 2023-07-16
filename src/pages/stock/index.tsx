import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Head from "next/head";
import { useState } from "react";
import { Layout } from "~/components/layout";
import {
  DynamicNudgeAlert,
  IndexBanner,
  InterestedStocks,
  RecentStocks,
  RecommendedStocks,
} from "~/components/stock";
import StockCarousel from "~/components/stock/StockCarousel";
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
        <div className="flex flex-col">
          <div className="flex justify-end bg-neutral-800 px-6 pt-4">
            <button className="btn btn-square btn-ghost">
              <MagnifyingGlassIcon className="w-6" />
            </button>
            <button className="btn btn-square btn-ghost">
              <CalendarIcon className="w-6" />
            </button>
            <button className="btn btn-square btn-ghost">
              <Cog6ToothIcon className="w-6" />
            </button>
          </div>
          <div className="bg-neutral-800 px-6">
            <div className="mb-4 flex items-center gap-4">
              <h1 className="text-2xl font-bold text-neutral-200">도스증권</h1>
              <div className="flex self-end text-sm">
                <IndexBanner />
              </div>
            </div>
            <DynamicNudgeAlert />
          </div>
          <div className="tabs w-full bg-neutral-800 px-6 font-medium">
            <a
              className={clsx(
                `tab tab-bordered tab-lg w-1/2`,
                tabIndex === 0 && "tab-active",
              )}
              onClick={() => setTabIndex(0)}
            >
              내 주식
            </a>
            <a
              className={clsx(
                `tab tab-bordered tab-lg w-1/2`,
                tabIndex === 1 && "tab-active",
              )}
              onClick={() => setTabIndex(1)}
            >
              오늘의 발견
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
                  <div className="mt-1 text-error">+1,000,000원 (10%)</div>
                </div>
                <div className="mt-6 flex justify-between">
                  <div className="dropdown-bottom dropdown">
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
                  <li className="flex items-center">
                    <div className="flex items-center space-x-3">
                      <div className="avatar placeholder">
                        <div className="w-10 rounded-full bg-info bg-opacity-20">
                          <PlusIcon className="w-6 fill-info" />
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
                  <div className="flex items-center justify-between py-1">
                    <span className="text-lg text-neutral-300">주문내역</span>
                    <div className="text-neutral-400">
                      <ChevronRightIcon className="w-4" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-lg text-neutral-300">판매수익</span>
                    <div className="flex  gap-2 text-neutral-400">
                      <span>이번 달 {formatNumber(-100000)}원</span>
                      <ChevronRightIcon className="w-4" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-1">
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
          <div className="mb-3 mt-6 flex justify-between px-6">
            <div className="flex gap-4">
              <InboxArrowDownIcon className="w-6" />
              <div className="flex flex-col">
                <div className="text-lg font-medium text-neutral-200">
                  지금까지 도스증권 어땠나요?
                </div>
                <span className="text-sm text-neutral-400">의견 보내기</span>
              </div>
            </div>
            <ChevronRightIcon className="w-4 text-neutral-400" />
          </div>
          <div className="divider px-6"></div>
          <div className="mt-3 flex flex-col gap-4 px-6">
            <div className="text-neutral-200">도스증권</div>
            <p className="text-sm text-neutral-500">
              도스증권에서 제공하는 투자 정보는 고객의 투자 판단을 위한
              단순참고용일뿐, 투자 제안 및 권유·종목 추천을 위해 작성된 것이
              아닙니다.
            </p>
            <div>
              <div className="text-sm text-neutral-400">
                고객센터 | 투자 유의사항 | 개인정보처리방침
              </div>
              <div className="text-sm text-neutral-400">
                이용자권리 및 유의사항 | 신용정보 활용체제
              </div>
            </div>
            <div className=" flex justify-between">
              <div className="text-lg text-neutral-400">꼭 알아두세요</div>
              <ChevronRightIcon className="w-4 text-neutral-400" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
