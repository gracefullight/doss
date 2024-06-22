"use client";

import {
  ChevronRightIcon,
  CreditCardIcon,
  FootprintsIcon,
  GaugeCircleIcon,
  SearchIcon,
  SmileIcon,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { StackLayout, StackLayoutNavbar } from "~/components/layout";
import { api } from "~/trpc/react";

interface MenuItem {
  IconComponent: ReactNode;
  title: string;
  subtitle: ReactNode;
}

export default function PopularMenus() {
  const { data: session } = api.auth.getSession.useQuery();

  const popularMenuItems: MenuItem[] = [
    {
      IconComponent: (
        <GaugeCircleIcon
          name="gauge-circle"
          size={20}
          className="text-red-400"
        />
      ),
      title: "내 신용점수",
      subtitle: (
        <>
          안전하게 <span className="text-info">1초 만에</span> 확인
        </>
      ),
    },
    {
      IconComponent: (
        <CreditCardIcon
          name="credit-card"
          size={20}
          className="text-purple-400"
        />
      ),
      title: "카드 혜택 받기",
      subtitle: (
        <>
          최대 <span className="text-info">16만원</span> 증정
        </>
      ),
    },
    {
      IconComponent: <SearchIcon name="search" size={20} />,
      title: "내 보험 한번에 조회",
      subtitle: (
        <>
          <span className="text-info">1분 만에</span> 확인
        </>
      ),
    },
    {
      IconComponent: (
        <FootprintsIcon name="foot-print" size={20} className="text-blue-500" />
      ),
      title: "만보기",
      subtitle: "포인트 받기",
    },
  ];

  return (
    <StackLayout>
      <StackLayoutNavbar isLightBackground />
      <div className="flex flex-col bg-neutral-800 px-5">
        <h2 className="mb-4 font-bold text-neutral-300 text-xl">또래 인기</h2>
        <div className="mb-6 flex flex-col rounded-xl bg-neutral-700 p-4">
          <span className="font-medium text-blue-500">
            312만명이 한도를 확인했어요
          </span>
          <h2 className="font-bold text-lg text-neutral-300">
            내 대출 한도 알아보기
          </h2>
          <div className="flex flex-col items-center justify-center py-5">
            <div className="avatar my-4">
              <div className="w-16 rounded-full bg-teal-400 p-4">
                <SmileIcon name="smile" className="text-yellow-500" size={32} />
              </div>
            </div>
            <span className="text-xs">
              {session?.user.name}님 신용 {1000}점
            </span>
            <span className="font-bold text-blue-500 text-lg">
              최대 한도 ? 억
            </span>
          </div>
          <button className="btn btn-info btn-block rounded-xl" type="button">
            나도 알아볼래요
          </button>
        </div>
      </div>
      <div className="bg-neutral-800 pb-4">
        <h3 className="px-5 py-2 font-medium text-neutral-300">
          슬기로운 금융 생활
        </h3>
        <div className="flex flex-col">
          <div className="flex flex-col">
            {popularMenuItems.map((item) => (
              <div
                key={item.title}
                className="flex cursor-pointer flex-row items-center justify-between px-5 py-4 active:bg-neutral-700"
              >
                <div className="flex flex-row items-center gap-3">
                  {item.IconComponent}
                  <div className="flex flex-col">
                    <div className="font-semibold text-neutral-300">
                      {item.title}
                    </div>
                    <div className="text-neutral-500 text-sm">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-ghost btn-square btn-sm"
                  type="button"
                  title="더보기"
                >
                  <ChevronRightIcon
                    name="chevron-right"
                    className="text-neutral-400"
                    size={20}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-6 flex justify-center">
        <Link href="/all" className="link text-neutral-400 text-sm">
          전체 메뉴 보기
        </Link>
      </div>
    </StackLayout>
  );
}
