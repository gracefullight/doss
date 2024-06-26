"use client";

import clsx from "clsx";
import { ChevronDownIcon, ChevronRightIcon, StarIcon } from "lucide-react";
import { useState } from "react";
import { formatNumber } from "~/utils/number";

export default function TransferMyAccounts() {
  const [showAll, setShowAll] = useState(false);

  const items = [
    {
      name: "신한 주거래 우대통장",
      accountNumber: "신한 110000111222333",
      initials: "SH",
      isFavorite: true,
    },
    {
      name: "입출금통장",
      accountNumber: "카카오뱅크 3333000011111",
      initials: "KK",
      isFavorite: true,
    },
    {
      name: "화성갈꺼니까",
      accountNumber: "도스증권 1500000011",
      initials: "DF",
      isFavorite: true,
    },
  ];

  const filteredItems = showAll
    ? items
    : items.filter((item) => item.isFavorite);

  return (
    <div className="mt-4 flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="font-medium text-neutral-300">내 계좌</h2>
        <button
          className="btn btn-ghost btn-sm px-1 text-neutral-400"
          type="button"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll
            ? `${formatNumber(items.length)}개`
            : `+${formatNumber(items.length - filteredItems.length)}개`}
          {showAll ? (
            <ChevronDownIcon size={20} />
          ) : (
            <ChevronRightIcon size={20} />
          )}
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {filteredItems.map((item) => (
          <div key={item.accountNumber} className="flex justify-between">
            <div className="flex items-center gap-2">
              <div className="avatar placeholder">
                <div className="h-10 w-10 rounded-full bg-neutral-focus text-neutral-content">
                  <span>{item.initials || item.name[0]}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-medium text-neutral-300">{item.name}</div>
                <span className="text-neutral-400 text-sm">
                  {item.accountNumber}
                </span>
              </div>
            </div>
            <button
              className="btn btn-square btn-ghost btn-sm"
              title="내 계좌 즐겨찾기"
              type="button"
            >
              <StarIcon
                name="star"
                className={clsx(item.isFavorite && "text-blue-500")}
                size={24}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
