import {
  CalendarIcon,
  ChartBarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useInterval } from "ahooks";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Layout } from "~/components/layout";
import { PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";
import { formatNumber } from "~/utils/number";

export default function Stock() {
  const [tabIndex, setTabIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(0);
  const items = [
    { stockIndex: "환율", value: 1310, isBlack: true },
    { stockIndex: "나스닥", value: 13492.52, isBlack: false },
    { stockIndex: "S&P500", value: 4348.33, isBlack: false },
    { stockIndex: "다우존스", value: 33747.23, isBlack: false },
  ];

  const clearBoard = useInterval(() => {
    setCurrentItem((prevItem) => {
      if (prevItem >= items.length - 1) {
        return 0;
      } else {
        return prevItem + 1;
      }
    });
  }, 3000);

  useEffect(() => () => clearBoard(), [clearBoard]);

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
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                >
                  <span className="mr-1 text-neutral-500">
                    {items[currentItem]?.stockIndex}
                  </span>
                  <span
                    className={
                      items[currentItem]?.isBlack ? "text-error" : "text-info"
                    }
                  >
                    {formatNumber(items[currentItem]?.value ?? 0)}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="alert mb-4 grid-flow-col-dense border-none bg-neutral-700 shadow-lg">
            <ChartBarIcon className="w-6" />
            <div className="flex flex-col gap-1">
              <span className="font-medium">매일 방문할수록 혜택이 커져요</span>
              <div className="flex text-info">
                <span className="text-sm">출석체크하고 주식받기</span>
                <ChevronRightIcon className="w-3" />
              </div>
            </div>
            <button className="btn-ghost btn-sm btn">
              <XMarkIcon className="w-5 fill-neutral-400" />
            </button>
          </div>
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
                <div className="mt-1 text-error">+3,000,000원 (10%)</div>
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
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerAuthSession({
    req: context.req,
    res: context.res,
  });

  if (!session) {
    return {
      redirect: {
        destination: PATH_SIGNIN,
        permanent: false,
      },
    };
  }

  return { props: {} };
}
