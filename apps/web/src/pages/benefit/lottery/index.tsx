import {
  BanknotesIcon,
  FaceSmileIcon,
  HeartIcon,
  QuestionMarkCircleIcon,
  TicketIcon,
} from "@heroicons/react/24/solid";
import { motion, type TargetAndTransition } from "framer-motion";
import { GetServerSidePropsContext } from "next";
import { useState } from "react";
import { StackLayout } from "~/components/layout";
import { PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";

export default function BenefitLottery() {
  // TODO: get this from server
  const [selected, setSelected] = useState(false);
  const navItems = [{ title: "설정", link: "/benefit/lottery/setting" }];

  const motionItems = [
    {
      icon: BanknotesIcon,
      type: "money",
      label: "재물운",
      animationDuration: 1.2,
      iconColor: "fill-info-content",
    },
    {
      icon: TicketIcon,
      type: "fame",
      label: "성공운",
      animationDuration: 0.8,
      iconColor: "fill-success-content",
    },
    {
      icon: HeartIcon,
      type: "love",
      label: "애정운",
      animationDuration: 1,
      iconColor: "fill-error",
    },
  ];

  const shakeAnimation = (duration: number): TargetAndTransition => ({
    y: ["0px", "16px"],
    transition: {
      y: {
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  });

  // TODO: type handling
  const handleLottery = (_: string) => {
    setSelected(true);
  };

  return (
    <StackLayout items={navItems}>
      {!selected && (
        <div className="flex h-[calc(100vh-140px)] flex-col items-center justify-center">
          <span className="text-lg font-medium text-neutral-400">
            오늘 이루고 싶은 것을 생각하며
          </span>
          <h1 className="text-xl font-bold text-neutral-200">
            복권을 눌러보세요
          </h1>
          <div className="mt-12 flex justify-between gap-2">
            {motionItems.map((item) => (
              <motion.div
                key={item.label}
                className="flex cursor-pointer select-none flex-col items-center justify-center gap-3 rounded-2xl bg-neutral-700 px-8 py-6"
                animate={shakeAnimation(item.animationDuration)}
                onClick={() => void handleLottery(item.type)}
              >
                <item.icon className={`${item.iconColor} w-10`} />
                <span className="font-medium text-neutral-400">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {selected && (
        <div>
          <div className="flex flex-col px-6">
            <h2 className="text-info text-lg font-bold">1일차</h2>
            <h1 className="mt-2 text-2xl font-bold text-neutral-300">
              복권을 매일 확인하면
              <br />
              3일차에 2배 드려요
            </h1>
            {/* TODO: 주간 달력 */}
            <div className="mt-4 flex flex-col rounded-2xl bg-neutral-700 px-6 py-8">
              <div className="relative">
                <div className="text-2xl font-bold text-neutral-300">
                  성공운 좋음
                </div>
                <FaceSmileIcon className="absolute -top-1 right-0 w-12 fill-yellow-400" />
                <span className="text-info block text-2xl font-bold">6 원</span>
              </div>
              <p className="mt-2 text-sm text-neutral-400">
                작은 행운이 찾아오는 날이에요.
                <br />
                소중한 지인들에게 연락해보세요.
              </p>
              <div className="mt-8 flex flex-col gap-1">
                <span className="text-sm text-neutral-400">
                  행운을 줄 귀인의 초성
                </span>
                <span className="font-bold text-neutral-300">ㅇㄱ</span>
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 z-50 w-full px-4 pb-6">
            <div className="flex cursor-pointer select-none items-center justify-between rounded-full bg-neutral-700 px-6 py-4">
              <div className="flex gap-4">
                <QuestionMarkCircleIcon className="w-6" />
                <div className="flex flex-col">
                  <div className="text-neutral-300">깜짝 포인트 발견</div>
                  <span className="text-sm text-neutral-500">
                    지금 바로 확인해 보세요
                  </span>
                </div>
              </div>
              <div className="btn btn-info btn-sm">확인하기</div>
            </div>
          </div>
        </div>
      )}
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
