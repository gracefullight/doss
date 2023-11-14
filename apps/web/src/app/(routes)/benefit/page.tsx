"use client";

import clsx from "clsx";
import { useAnimate, useMotionValueEvent, useScroll } from "framer-motion";
import {
  ArrowDownLeftFromCircleIcon,
  ArrowDownSquareIcon,
  BellIcon,
  CheckIcon,
  ChevronRightIcon,
  CircleDollarSignIcon,
  CloverIcon,
  FootprintsIcon,
  HelpCircleIcon,
  MapPinIcon,
  NewspaperIcon,
  SmartphoneIcon,
  VideoIcon,
} from "lucide-react";
import { DateTime, Interval } from "luxon";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { proxy, useSnapshot } from "valtio";
import { SCROLL_BOUNCING_THRESHOLD } from "~/constants";
import { formatNumber } from "~/utils/number";

const scrollState = proxy({ scrollY: 0, direction: 0 });

export default function Benefit() {
  const { direction } = useSnapshot(scrollState);
  const router = useRouter();
  const { scrollY } = useScroll();
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < SCROLL_BOUNCING_THRESHOLD) {
      scrollState.direction = 0;
    } else {
      scrollState.direction = scrollState.scrollY < latest ? 1 : 0;
    }
    scrollState.scrollY = latest;
  });

  useEffect(() => {
    if (direction === 1) {
      videoRef.current?.pause();
      void animate(
        scope.current,
        { y: "-30vh", paddingTop: "3rem" },
        { duration: 0.2 },
      );
    } else {
      void videoRef.current?.play();
      void animate(
        scope.current,
        {
          y: 0,
          paddingTop: "1rem",
        },
        { duration: 0.2 },
      );
    }
  }, [direction]);

  const { hours: diffHours } = Interval.fromDateTimes(
    DateTime.local(),
    DateTime.local().plus({ days: 1 }).startOf("day"),
  ).toDuration(["hours", "minutes"]);

  const items = [
    {
      title: "친구와 함께 도스켜고",
      subTitle: "포인트 받기",
      badge: null,
      isDone: false,
      link: "/benefit/nearby",
      IconComponent: (
        <MapPinIcon name="map-pin" className="text-yellow-500" size={28} />
      ),
    },
    {
      title: "이번 주 미션",
      subTitle: "46,610원 받기",
      badge: "3일 남음",
      isDone: false,
      IconComponent: (
        <ArrowDownLeftFromCircleIcon
          name="arrow-down-left-from-circle"
          className="text-red-500"
          size={28}
        />
      ),
    },
    {
      title: "행운복권",
      subTitle: "완료",
      badge: null,
      isDone: true,
      link: "/benefit/lottery",
      IconComponent: (
        <CloverIcon name="clover" className="text-green-500" size={28} />
      ),
    },
    {
      title: "라이브 쇼핑",
      subTitle: "포인트 받기",
      badge: "방송 중",
      isDone: false,
      IconComponent: (
        <VideoIcon name="video" className="text-red-500" size={28} />
      ),
    },
    {
      title: "행운퀴즈",
      subTitle: "추가 혜택 보기",
      badge: null,
      isDone: false,
      IconComponent: (
        <HelpCircleIcon
          name="help-circle"
          className="text-purple-500"
          size={28}
        />
      ),
    },
    {
      title: "머니 알림 받고",
      subTitle: "20원 받기",
      badge: null,
      isDone: false,
      IconComponent: (
        <BellIcon name="bell" className="text-yellow-500" size={28} />
      ),
    },
    {
      title: "만보기",
      subTitle: "130원 받기",
      badge: `${diffHours}시간 남음`,
      isDone: false,
      IconComponent: (
        <FootprintsIcon name="footprints" className="text-blue-500" size={28} />
      ),
    },
    {
      title: "피드보고",
      subTitle: "포인트 받기",
      isDone: false,
      IconComponent: (
        <NewspaperIcon name="newspaper" className="text-white" size={28} />
      ),
    },
    {
      title: "휴대폰 요금제 바꾸고",
      subTitle: "12만원 받기",
      badge: null,
      isDone: false,
      IconComponent: (
        <SmartphoneIcon name="smartphone" className="text-white" size={28} />
      ),
    },
    {
      title: "버튼 누르기",
      subTitle: "완료",
      badge: null,
      link: "/benefit/coupang",
      isDone: true,
      IconComponent: (
        <ArrowDownSquareIcon
          name="arrow-down-square"
          className="text-blue-600"
          size={28}
        />
      ),
    },
  ];

  const handleBenefitLink = (link?: string) => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <>
      <video
        autoPlay
        muted
        loop
        className="max-h-[30vh] w-full object-cover"
        preload="metadata"
        playsInline
        ref={videoRef}
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className="bg-base-100 z-10 flex h-full w-screen flex-col pb-4"
        ref={scope}
      >
        <div className="flex items-center justify-between px-5">
          <h1 className="text-2xl font-bold text-neutral-200">혜택</h1>
          <button
            className="btn btn-ghost btn-md pr-0 text-lg"
            type="button"
            onClick={() => handleBenefitLink("/benefit/point")}
          >
            <CircleDollarSignIcon
              name="circle-dollar-sign"
              className="text-blue-500"
              size={24}
            />
            {formatNumber(1000)} 원
            <ChevronRightIcon name="chevron-right" size={20} />
          </button>
        </div>
        <div className="mt-3 flex flex-col gap-2 px-2">
          {items.map((item) => (
            <div
              className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 active:bg-neutral-700"
              key={item.title}
              onClick={() => handleBenefitLink(item.link)}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={clsx(
                    `relative flex items-center justify-center rounded-full border-2 bg-neutral-700 p-3`,
                    item.isDone ? `border-green-500` : `border-neutral-700`,
                  )}
                >
                  {item.IconComponent}
                  {item.isDone && (
                    <div className="absolute -bottom-1 -right-1 rounded-full border border-neutral-700 bg-green-500 p-1">
                      <CheckIcon
                        name="check"
                        className="w-4 text-neutral-700"
                        size={16}
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-medium">{item.title}</h2>
                  <p className="text-md text-info">{item.subTitle}</p>
                </div>
              </div>
              {item.badge && (
                <div className="badge badge-md border-none bg-neutral-700 py-3 text-neutral-100">
                  {item.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
