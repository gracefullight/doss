import { SparklesIcon, TicketIcon } from "@heroicons/react/24/solid";
import { StackLayout } from "~/components/layout";
import { formatTimestamp } from "~/utils/datetime";
import { formatNumber } from "~/utils/number";

export default function Notification() {
  const items = [
    {
      icon: TicketIcon,
      iconColor: "fill-success",
      title: "행운복권",
      timestamp: "2023-08-13T09:00:00+09:00",
      message: "8월 13일, 행운복권이 도착했어요.",
      moreCount: 32,
    },
    {
      icon: SparklesIcon,
      iconColor: "fill-info",
      title: "만보기",
      timestamp: "2023-08-13T00:00:00+09:00",
      message: `오늘 ${formatNumber(
        1000,
      )}걸음을 넘겼어요. 포인트를 받아보세요.`,
      moreCount: 29,
    },
  ];

  return (
    <StackLayout>
      <div className="">
        <h1 className="px-6 text-2xl font-semibold text-neutral-200">알림</h1>
        <div className="mt-4 flex flex-col gap-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex cursor-pointer flex-col px-6 py-4 active:bg-neutral-700"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  <item.icon className={`w-3 ${item.iconColor}`} />
                  <span className="text-sm text-neutral-500">{item.title}</span>
                </div>
                <span className="text-sm text-neutral-500">
                  {formatTimestamp(item.timestamp)}
                </span>
              </div>
              <div className="flex flex-col gap-1 px-4">
                <h2 className="font-medium text-neutral-300">{item.message}</h2>
                <span className="text-info text-sm">
                  {item.moreCount}건 더보기
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StackLayout>
  );
}
