import {
  CalendarIcon,
  ChartBarIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useInterval } from "ahooks";
import { AnimatePresence, motion } from "framer-motion";
import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Layout } from "~/components/layout";
import { PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";
import { formatNumber } from "~/utils/number";

export default function Stock() {
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
          <div className="alert mb-4 grid-flow-col-dense bg-neutral-700 shadow-lg">
            <ChartBarIcon className="w-6" />
            <div className="flex flex-col gap-1">
              <span className="text-lg font-medium">
                매일 방문할수록 혜택이 커져요
              </span>
              <div className="flex text-info">
                <span>출석체크하고 주식받기</span>
                <ChevronRightIcon className="w-3" />
              </div>
            </div>
            <button className="btn-ghost btn-sm btn">
              <XMarkIcon className="w-5 fill-neutral-400" />
            </button>
          </div>
          <div className="tabs w-full font-medium">
            <a className="tab-bordered tab tab-active tab-lg w-1/2">내 주식</a>
            <a className="tab-bordered tab tab-lg w-1/2">오늘의 발견</a>
          </div>
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
