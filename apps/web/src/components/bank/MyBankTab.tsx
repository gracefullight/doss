"use client";

import { useLocalStorageState } from "ahooks";
import clsx from "clsx";
import { CreditCardIcon, LayersIcon, TypeIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { proxy, useSnapshot } from "valtio";
import { MoneyCircle } from "~/components/pay";
import { formatNumber } from "~/utils/number";
import { DossHero, DossItem } from "./my-bank";

export const bankFontState = proxy({ isLargeFont: false });

export default function MyBankTab() {
  const { isLargeFont: bankLargeFont } = useSnapshot(bankFontState);
  const [isLargeFont, setIsLargeFont] = useLocalStorageState(
    "dossBankLargeFront",
    {
      defaultValue: false,
    },
  );

  useEffect(() => {
    bankFontState.isLargeFont = isLargeFont ?? false;
  }, []);

  const toggleLargeFont = () => {
    setIsLargeFont(!isLargeFont);
    bankFontState.isLargeFont = !isLargeFont;
  };

  return (
    <div className="mt-5 flex flex-col gap-4">
      {bankLargeFont && <DossHero />}
      <div>
        <h3
          className={clsx(
            "mb-2 px-5 text-neutral-400",
            bankLargeFont && "text-lg",
          )}
        >
          통장
        </h3>
        <div className="flex flex-col gap-1 px-3">
          {!bankLargeFont && <DossItem />}
          <Link href="/">
            <div className="flex cursor-pointer select-none items-center justify-between rounded-xl p-2 active:bg-neutral-600">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="h-10 w-10 rounded-full bg-gray-700 p-2">
                    <LayersIcon name="layers" className="text-blue-500" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span
                    className={clsx("text-neutral-400", {
                      "text-sm": !isLargeFont,
                    })}
                  >
                    모으기 · {formatNumber(0)}개
                  </span>
                  <div className="flex flex-row space-x-2">
                    <span
                      className={clsx(
                        "font-medium",
                        bankLargeFont ? "text-xl" : "text-lg",
                      )}
                    >
                      {formatNumber(0)}원
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <h3
          className={clsx("mb-2 px-5 text-neutral-400", {
            "text-lg": bankLargeFont,
          })}
        >
          카드
        </h3>
        <div className="flex flex-col gap-2 px-3">
          <Link href="/">
            <div className="flex cursor-pointer select-none items-center justify-between rounded-xl p-2 active:bg-neutral-600">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="h-10 w-10 rounded-full bg-pink-500 p-2">
                    <CreditCardIcon name="credit-card" className="text-black" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span
                    className={clsx(
                      "text-neutral-400",
                      !isLargeFont && "text-sm",
                    )}
                  >
                    내 체크카드로 쓴 금액
                  </span>
                  <div className="flex flex-row space-x-2">
                    <span
                      className={clsx(
                        "font-medium",
                        bankLargeFont ? "text-xl" : "text-lg",
                      )}
                    >
                      {formatNumber(1000000)}원
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-2 px-3">
          <Link href="/">
            <div className="flex cursor-pointer select-none items-center justify-between rounded-xl p-2 active:bg-neutral-600">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="h-10 w-10 rounded-full bg-rose-900 p-2">
                    <CreditCardIcon
                      name="credit-card"
                      className="text-pink-400"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span
                    className={clsx("text-neutral-400", {
                      "text-sm": !isLargeFont,
                    })}
                  >
                    모임 카드로 쓴 금액
                  </span>
                  <div className="flex flex-row space-x-2">
                    <span
                      className={clsx(
                        "font-medium",
                        bankLargeFont ? "text-xl" : "text-lg",
                      )}
                    >
                      {formatNumber(0)}원
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <h3
          className={clsx("mb-2 px-5 text-neutral-400", {
            "text-lg": bankLargeFont,
          })}
        >
          대출
        </h3>
        <div className="flex flex-col gap-2 px-3">
          <Link href="/">
            <div className="flex cursor-pointer select-none items-center justify-between rounded-xl p-2 active:bg-neutral-600">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="h-10 w-10 rounded-full">
                    <MoneyCircle />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span
                    className={clsx("text-neutral-400", {
                      "text-sm": !isLargeFont,
                    })}
                  >
                    얼마나 빌릴 수 있을까?
                  </span>
                  <div className="flex flex-row space-x-2">
                    <span
                      className={clsx(
                        "font-medium",
                        bankLargeFont ? "text-xl" : "text-lg",
                      )}
                    >
                      한도 알아보기
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <h3
          className={clsx("mb-2 px-5 text-neutral-400", {
            "text-lg": bankLargeFont,
          })}
        >
          설정
        </h3>
        <div className="flex flex-col gap-2 px-3">
          <div
            className="flex cursor-pointer select-none items-center justify-between rounded-xl p-2 active:bg-neutral-600"
            onClick={toggleLargeFont}
          >
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="h-10 w-10 rounded-full bg-blue-300 p-2">
                  <TypeIcon name="type" className="text-blue-500" />
                </div>
              </div>
              <div className="flex flex-col">
                <span
                  className={clsx("text-neutral-400", {
                    "text-sm": !isLargeFont,
                  })}
                >
                  큰 글씨
                </span>
                <div className="flex flex-row space-x-2">
                  <span
                    className={clsx(
                      "font-medium",
                      bankLargeFont ? "text-xl" : "text-lg",
                    )}
                  >
                    간편홈 {isLargeFont ? "끄기" : "보기"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
