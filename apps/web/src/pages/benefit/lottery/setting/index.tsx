import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { StackLayout } from "~/components/layout";
import { PATH_LOTTERY } from "~/constants";

interface LotterySettingItem {
  name: string;
  action: "link" | "share";
  link?: string;
  description?: string;
}

export default function BenefitLotterySetting() {
  const router = useRouter();
  const items: LotterySettingItem[] = [
    { name: "이용안내", action: "link", link: "/benefit/lottery" },
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
      await router.push(link);
    }

    if (action === "share" && "share" in navigator) {
      try {
        await navigator.share({
          title: "복권 공유하기",
          url: link,
        });
      } catch (error) {
        console.warn("Sharing failed", error);
      }
    }
  };

  return (
    <StackLayout>
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <div
            className="flex cursor-pointer select-none items-center justify-between px-5 py-2 active:bg-neutral-600"
            key={item.name}
            onClick={() => void handleClick(item)}
          >
            <div className="flex flex-col">
              <div className="text-neutral-300">{item.name}</div>
              {item.description && (
                <span className="text-sm text-neutral-500">
                  {item.description}
                </span>
              )}
            </div>
            <button
              className="btn btn-square btn-sm btn-ghost"
              type="button"
              title={item.name}
            >
              <ChevronRightIcon className="w-4 fill-neutral-400" />
            </button>
          </div>
        ))}
      </div>
    </StackLayout>
  );
}
