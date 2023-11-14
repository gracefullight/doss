"use client";

import type { TargetAndTransition } from "framer-motion";
import { motion } from "framer-motion";
import { CloverIcon, GemIcon, HeartIcon, SmileIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SevenDaysCalendar } from "~/components/benefit/lottery";
import { StackLayout, StackLayoutNavbar } from "~/components/layout";

export default function BenefitLottery() {
  // TODO: get this from server
  const [selected, setSelected] = useState(false);
  const router = useRouter();
  const navItems = [{ title: "설정", link: "/benefit/lottery/setting" }];

  const motionItems = [
    {
      type: "money",
      label: "재물운",
      animationDuration: 1.2,
      IconComponent: <GemIcon name="gem" className="text-blue-200" size={40} />,
    },
    {
      type: "fame",
      label: "성공운",
      animationDuration: 0.8,
      IconComponent: (
        <CloverIcon name="clover" className="text-green-500" size={40} />
      ),
    },
    {
      type: "love",
      label: "애정운",
      animationDuration: 1,
      IconComponent: (
        <HeartIcon name="heart" className="text-red-500" size={40} />
      ),
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
    <StackLayout>
      <StackLayoutNavbar items={navItems} />
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
                {item.IconComponent}
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
            <SevenDaysCalendar />
            <div className="mt-4 flex flex-col rounded-2xl bg-neutral-700 px-6 py-8">
              <div className="relative">
                <div className="text-2xl font-bold text-neutral-300">
                  성공운 좋음
                </div>
                <SmileIcon
                  name="smile"
                  className="absolute -top-1 right-0 text-yellow-400"
                  size={48}
                />
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
          <div className="fixed bottom-0 z-50 flex w-full px-5 pb-4">
            <button
              className="btn btn-block btn-lg text-info rounded-xl border-none bg-neutral-700 hover:bg-neutral-800"
              type="button"
              onClick={() => router.push("/benefit/lottery/share")}
            >
              복권 공유하기
            </button>
          </div>
        </div>
      )}
    </StackLayout>
  );
}
