"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { SyntheticEvent } from "react";
import { formatNumber } from "~/utils/number";
import Section from "./Section";

export default function Asset() {
  const router = useRouter();
  const items = [
    {
      title: "도스뱅크 통장",
      amount: 5000000,
      isBank: true,
      logoUrl: "https://placehold.co/100x100?text=doss",
    },
    {
      title: "입출금통장",
      amount: 100000000,
      isBank: true,
      logoUrl: "https://placehold.co/100x100?text=shinhan",
    },
    {
      title: "저축·주택청약 종합저축",
      amount: 10000000,
      isBank: false,
      logoUrl: "https://placehold.co/100x100?text=shinhan",
    },
    {
      title: "포인트·머니",
      amount: 400,
      isBank: false,
      link: "/benefit/point",
      logoUrl: "https://placehold.co/100x100?text=point",
    },
  ];

  const handleTransfer = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    router.push("/bank/transfer");
  };

  const handleLink = (link?: string) => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <Section title="자산" link="/" hasBottomButton>
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex cursor-pointer select-none items-center justify-between rounded-xl p-2 active:bg-neutral-600"
            onClick={() => void handleLink(item.link)}
          >
            <div className="flex items-center space-x-3">
              <div className="avatar placeholder">
                <div className="h-10 w-10 rounded-full">
                  <Image
                    src={item.logoUrl}
                    alt="thumbnail"
                    loading="lazy"
                    decoding="async"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-neutral-400">{item.title}</span>
                <span className="text-lg font-medium">
                  {formatNumber(item.amount)}원
                </span>
              </div>
            </div>
            {item.isBank && (
              <button
                className="btn btn-sm border-none bg-neutral-700 focus:outline-none"
                type="button"
                onClick={handleTransfer}
              >
                송금
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="divider m-0 px-2"></div>
      <div className="btn btn-ghost btn-block text-neutral-400">
        계좌·대출·증권·포인트 보기
        <ChevronDownIcon className="w-4" />
      </div>
    </Section>
  );
}
