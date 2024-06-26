"use client";

import { useInterval } from "ahooks";
import { ClockIcon } from "lucide-react";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { formatNumber, getDiscountRate } from "~/utils/number";
import GroupShoppingTimer from "./GroupShoppingTimer";

export default function GroupShoppingCarousel() {
  const { seconds } = DateTime.local()
    .plus({ days: 1 })
    .set({
      hour: 0,
      minute: 0,
      second: 0,
    })
    .diffNow(["seconds"]);

  const [durationSeconds, setDurationSeconds] = useState(Math.round(seconds));

  const clearCount = useInterval(() => {
    if (durationSeconds <= 0) {
      clearCount();
    } else {
      setDurationSeconds((prevSeconds) => prevSeconds - 1);
    }
  }, 1000);

  useEffect(
    () => () => {
      clearCount();
    },
    [clearCount],
  );

  const items = [
    {
      name: "상품명1",
      originalPrice: 10000,
      discountPrice: 8000,
      viewers: 540153,
      imageUrl: "https://picsum.photos/260?1",
    },
    {
      name: "상품명2",
      originalPrice: 12000,
      discountPrice: 10000,
      viewers: 560747,
      imageUrl: "https://picsum.photos/260?2",
    },
    {
      name: "상품명3",
      originalPrice: 35000,
      discountPrice: 21800,
      viewers: 495955,
      imageUrl: "https://picsum.photos/260?3",
    },
  ];

  return (
    <div className="carousel mt-2 max-w-full cursor-pointer space-x-4 self-start rounded-box">
      {items.map((item) => (
        <div key={item.name} className="carousel-item relative">
          <img
            src={item.imageUrl}
            className="w-full rounded-box"
            alt={item.name}
            loading="eager"
          />
          <div className="absolute bottom-0 flex h-24 w-full flex-col justify-center rounded-b-box bg-neutral-700 px-4 shadow-[0_-15px_30px_rgba(0,0,0,0.8)]">
            <div className="badge badge-error -top-6 absolute gap-1 p-1">
              <ClockIcon size={16} />
              <GroupShoppingTimer seconds={durationSeconds} />
            </div>
            <span className="text-ellipsis text-neutral-100">{item.name}</span>
            <div className="flex font-semibold text-lg">
              <span className="mr-1 text-red-500">
                {getDiscountRate(item.originalPrice, item.discountPrice)}
              </span>
              <span className="text-neutral-100">
                {`${formatNumber(item.discountPrice)}원`}
              </span>
            </div>
            <span className="mt-1 text-neutral-400 text-sm">
              {formatNumber(item.viewers)}명이 구경중
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
