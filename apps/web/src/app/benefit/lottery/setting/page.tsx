"use client";
import { ChevronRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { StackLayout, StackLayoutNavbar } from "~/components/layout";
import { PATH_LOTTERY } from "~/constants";
import { shareUrl } from "~/utils/share";

interface LotterySettingItem {
  name: string;
  action: "link" | "share";
  link?: string;
  description?: string;
}

export default function BenefitLotterySetting() {
  const router = useRouter();
  const items: LotterySettingItem[] = [
    {
      name: "이용안내",
      action: "link",
      link: "/benefit/lottery/setting/agreement",
    },
    {
      name: "복권 공유하기",
      action: "share",
      link: `https://doss.gracefullight.dev/${PATH_LOTTERY}`,
    },
    {
      name: "복권 알림 시간",
      action: "link",
      link: "/benefit/lottery/setting/alarm",
      description: "매일 오전 8시",
    },
  ];

  const handleClick = async (item: LotterySettingItem) => {
    const { action, link } = item;

    if (action === "link" && link) {
      return router.push(link);
    }

    if (action === "share" && "share" in navigator) {
      await shareUrl("복권 공유하기", PATH_LOTTERY);
    }
  };

  return (
    <StackLayout>
      <StackLayoutNavbar />
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <div
            className="flex cursor-pointer select-none items-center justify-between px-5 py-2 active:bg-neutral-600"
            key={item.name}
            onClick={() => handleClick(item)}
          >
            <div className="flex flex-col">
              <div className="text-neutral-300">{item.name}</div>
              {item.description && (
                <span className="text-neutral-500 text-sm">
                  {item.description}
                </span>
              )}
            </div>
            <button
              className="btn btn-square btn-sm btn-ghost"
              type="button"
              title={item.name}
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
    </StackLayout>
  );
}
