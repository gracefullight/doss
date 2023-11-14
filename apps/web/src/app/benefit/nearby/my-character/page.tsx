"use client";

import { HeartIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { StackLayout, StackLayoutNavbar } from "~/components/layout";
import { api } from "~/trpc/react";
import { formatNumber } from "~/utils/number";

export default function BenefitNearbyMyCharacter() {
  const [favorite, setFavorite] = useState(false);
  const navbarItems = [
    // TODO: fetching point
    {
      title: `내 도스 포인트 ${formatNumber(259)}원`,
      link: "/benefit/nearby",
    },
  ];

  const { data: session } = api.auth.getSession.useQuery();

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <StackLayout>
      <StackLayoutNavbar items={navbarItems} />
      <div className="flex flex-grow flex-col px-6 pt-4">
        <div className="flex flex-col items-center">
          <div className="badge badge-warning badge-outline">웃는 얼굴</div>
          <span className="pt-1 text-lg font-medium">{session?.user.name}</span>
          <div className="avatar my-4">
            <div className="w-48 rounded-full">
              <Image
                src="https://i.pravatar.cc/200?u=b"
                width={200}
                height={200}
                alt="내 캐릭터"
              />
            </div>
          </div>
          <button
            className="btn btn-active btn-ghost my-4 rounded-2xl"
            type="button"
            onClick={toggleFavorite}
          >
            이 캐릭터 소장하기{" "}
            <HeartIcon
              className={
                favorite
                  ? "fill-red-500 text-red-500"
                  : "fill-neutral-500 text-neutral-500"
              }
              size={16}
            />
          </button>
        </div>
      </div>
      <div className="sticky bottom-0 z-10 flex cursor-pointer items-center justify-between px-6 pb-4 pt-2">
        <div className="btn btn-info btn-block rounded-xl">
          내 캐릭터 바꾸기
        </div>
      </div>
    </StackLayout>
  );
}
