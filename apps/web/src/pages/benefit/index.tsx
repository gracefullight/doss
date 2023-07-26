import {
  BellIcon,
  CheckIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  GiftIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  TicketIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useAnimate, useMotionValueEvent, useScroll } from "framer-motion";
import { DateTime, Interval } from "luxon";
import { type GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { proxy, useSnapshot } from "valtio";
import { Layout } from "~/components/layout";
import { PATH_SIGNIN, SCROLL_BOUNCING_THRESHOLD } from "~/constants";
import { getServerAuthSession } from "~/server/auth";
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
      Icon: MapPinIcon,
      link: "/benefit/nearby",
    },
    {
      title: "이번 주 미션",
      subTitle: "46,610원 받기",
      badge: "3일 남음",
      isDone: false,
      Icon: GiftIcon,
    },
    {
      title: "행운복권",
      subTitle: "완료",
      badge: null,
      isDone: true,
      Icon: TicketIcon,
    },
    {
      title: "라이브 쇼핑",
      subTitle: "포인트 받기",
      badge: null,
      isDone: false,
      Icon: VideoCameraIcon,
    },
    {
      title: "행운퀴즈",
      subTitle: "추가 혜택 보기",
      badge: null,
      isDone: false,
      Icon: QuestionMarkCircleIcon,
    },
    {
      title: "머니 알림 받고",
      subTitle: "20원 받기",
      badge: null,
      isDone: false,
      Icon: BellIcon,
    },
    {
      title: "만보기",
      subTitle: "130원 받기",
      badge: `${diffHours}시간 남음`,
      isDone: false,
      Icon: SparklesIcon,
    },
    {
      title: "휴대폰 요금제 바꾸고",
      subTitle: "12만원 받기",
      badge: null,
      isDone: false,
      Icon: DevicePhoneMobileIcon,
    },
    {
      title: "버튼 누르기",
      subTitle: "완료",
      badge: null,
      link: "/benefit/coupang",
      isDone: true,
      Icon: CursorArrowRaysIcon,
    },
  ];

  const handleBenefitLink = async (link?: string) => {
    if (link) {
      await router.push(link);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Doss | 혜택</title>
      </Head>
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
        className="z-10 flex h-full w-screen flex-col bg-base-100 pb-4"
        ref={scope}
      >
        <div className="mb-8 flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-neutral-200">혜택</h1>
          <button className="btn btn-ghost btn-md pr-0 text-lg">
            <CurrencyDollarIcon className="w-6 fill-info" />
            {formatNumber(1000)} 원
            <ChevronRightIcon className="w-4" />
          </button>
        </div>
        <div className="space-y-4 px-2">
          {items.map((item, index) => (
            <div
              className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 active:bg-neutral-700"
              key={index}
              onClick={() => void handleBenefitLink(item.link)}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={clsx(
                    `relative flex items-center justify-center rounded-full border-2 bg-neutral-700 p-3`,
                    item.isDone ? `border-accent` : `border-neutral-700`,
                  )}
                >
                  <item.Icon className="w-8" />
                  {item.isDone && (
                    <div className="absolute -bottom-1 -right-1 rounded-full border border-neutral-700 bg-accent p-1">
                      <CheckIcon className="w-4 text-neutral-700" />
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
