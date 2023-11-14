"use client";

import { useCookieState } from "ahooks";
import { ChevronRightIcon } from "lucide-react";
import { DateTime } from "luxon";
import { useState } from "react";
import MoneyCircle from "../MoneyCircle";

export default function GroupShoppingBanner() {
  const [bannerCookie, setBannerCookie] = useCookieState(
    "groupShoppingBannerClicked",
    {
      defaultValue: "F",
    },
  );
  const [isVisible, setIsVisible] = useState(bannerCookie === "F");

  const handleBannerClick = () => {
    setBannerCookie("T", {
      expires: DateTime.now().plus({ hours: 1 }).toJSDate(),
    });
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="my-4 flex cursor-pointer justify-between px-6"
      onClick={handleBannerClick}
    >
      <div className="flex items-center gap-4">
        <MoneyCircle />
        <div className="flex flex-col">
          <span className="text-sm text-neutral-500">공동구매 구경하고</span>
          <div className="font-medium text-neutral-300">매일 6원 받기</div>
        </div>
      </div>
      <ChevronRightIcon name="chevron-right" size={20} />
    </div>
  );
}
