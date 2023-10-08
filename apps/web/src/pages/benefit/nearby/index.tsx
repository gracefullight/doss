import { ChevronRightIcon, FaceSmileIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import type { StackLayoutNavbarItem } from "~/components/layout";
import { StackLayout } from "~/components/layout";
import { formatNumber } from "~/utils/number";

interface FriendData {
  x: number;
  y: number;
  link?: string;
  points?: number;
  icon: string;
  name: string;
}

export default function BenefitNearby() {
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const contentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (contentRef.current) {
      setCenter({
        x: contentRef.current.offsetWidth / 2,
        y: contentRef.current.offsetHeight / 2,
      });
    }
  }, []);

  const navbarItems: StackLayoutNavbarItem[] = [
    {
      title: "2배 이벤트",
      link: "/benefit/nearby/events",
    },
    {
      title: "설정",
      link: "/benefit/nearby/settings",
    },
  ];

  const friends: FriendData[] = [
    {
      x: 0,
      y: 0,
      link: "/benefit/nearby/my-character",
      points: 0,
      icon: "https://i.pravatar.cc/50?u=me",
      name: "나",
    },
    {
      x: 100,
      y: 200,
      link: "/benefit/nearby/my-character",
      points: 100,
      icon: "https://i.pravatar.cc/50?u=a",
      name: "언팩\n팝업스토어",
    },
    {
      x: -50,
      y: -100,
      link: "/benefit/nearby/my-character",
      points: 200,
      icon: "https://i.pravatar.cc/50?u=b",
      name: "보너스 친구",
    },
  ];

  const handleFriendLink = async (link?: string) => {
    if (link) {
      await router.push(link);
    }
  };

  const handleMyCharacter = async () => {
    await router.push("/benefit/nearby/my-character");
  };

  return (
    <>
      <Head>
        <title>Doss | 혜택 | 토스켜기</title>
      </Head>
      <StackLayout items={navbarItems}>
        <div className="relative flex-grow bg-neutral-800" ref={contentRef}>
          <svg className="absolute left-0 top-0 h-full w-full">
            {[1, 2, 3].map((i) => {
              // ? maxRadius * i * gap
              const radius = 20 * i * 5;
              return (
                <circle
                  key={i}
                  cx={center.x}
                  cy={center.y}
                  r={radius}
                  className="fill-none stroke-neutral-600 stroke-1"
                />
              );
            })}

            {friends.map((friend, index) => {
              const x = center.x + friend.x;
              const y = center.y + friend.y;
              const nameLines = friend.name.split("\n");

              return (
                <g
                  className="cursor-pointer"
                  key={index}
                  onClick={() => void handleFriendLink(friend.link)}
                >
                  <image
                    href={friend.icon}
                    x={x - 25}
                    y={y - 25}
                    height="50"
                    width="50"
                  />
                  <text
                    x={x}
                    y={y + 45}
                    textAnchor="middle"
                    className="fill-neutral-400 text-sm"
                  >
                    {nameLines.map((line, index) => (
                      <tspan x={x} dy={index > 0 ? "1.2em" : 0} key={index}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        <div
          className="sticky bottom-0 z-10 flex cursor-pointer items-center justify-between px-6 py-6"
          onClick={handleMyCharacter}
        >
          <div className="flex gap-2">
            <FaceSmileIcon className="fill-warning w-10" />
            <div className="flex flex-col gap-1">
              <span className="text-sm">
                함께 도스 켜고 총 {formatNumber(259)}원 모았어요
              </span>
              <span className="text-info font-medium">내 캐릭터 보기</span>
            </div>
          </div>
          <ChevronRightIcon className="w-4" />
        </div>
      </StackLayout>
    </>
  );
}
