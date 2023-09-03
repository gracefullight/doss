import {
  CalendarIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Head from "next/head";
import { useState } from "react";
import { Layout } from "~/components/layout";
import {
  DynamicNudgeAlert,
  FeedbackBanner,
  IndexBanner,
  MyStocks,
  News,
  StockFooter,
  TodaysDiscovery,
} from "~/components/stock";

export default function Stock() {
  const [tabIndex, setTabIndex] = useState(0);

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
            <div className="tabs w-full bg-neutral-800 font-medium">
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
            {tabIndex === 0 && <MyStocks />}
            {tabIndex === 1 && <TodaysDiscovery />}
            {tabIndex === 2 && <News />}
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
