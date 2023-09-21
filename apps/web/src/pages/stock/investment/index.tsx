import { PaperAirplaneIcon, PlusIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import type { GetServerSidePropsContext } from "next";
import { useState } from "react";
import { StackLayout } from "~/components/layout";
import {
  ByAccountTab,
  ByProductTab,
  FeedbackToast,
} from "~/components/stock/investment";
import { PATH_INVESTMENT_CONNECT, PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";

export default function BankInvestment() {
  const [tabIndex, setTabIndex] = useState(0);
  const navItems = [
    {
      title: "계좌 추가",
      IconComponent: PlusIcon,
      link: PATH_INVESTMENT_CONNECT,
    },
    {
      title: "피드백",
      IconComponent: PaperAirplaneIcon,
      link: "/stock/investment/feedback",
    },
  ];

  return (
    <StackLayout title="투자 모아보기" items={navItems} isLightBackground>
      <div className="flex flex-col pb-4">
        <div className="tabs w-full bg-neutral-800 px-5">
          <a
            className={clsx(
              `tab tab-bordered tab-lg w-1/2`,
              tabIndex === 0 && "tab-active",
            )}
            onClick={() => setTabIndex(0)}
          >
            상품별
          </a>
          <a
            className={clsx(
              `tab tab-bordered tab-lg w-1/2`,
              tabIndex === 1 && "tab-active",
            )}
            onClick={() => setTabIndex(1)}
          >
            계좌별
          </a>
        </div>
        {tabIndex === 0 && <ByProductTab />}
        {tabIndex === 1 && <ByAccountTab />}
      </div>
      <FeedbackToast />
    </StackLayout>
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
