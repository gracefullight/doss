import {
  BellIcon,
  CheckIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  GiftIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  TicketIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { Layout } from "~/components/layout";
import { formatNumber } from "~/utils/number";

export default function Benefit() {
  const items = [
    {
      title: "친구와 함께 도스켜고",
      subTitle: "포인트 받기",
      badge: null,
      isDone: false,
      Icon: MapPinIcon,
    },
    {
      title: "이번 주 미션",
      subTitle: "46,610원 받기",
      badge: "3일 남음",
      isDone: false,
      Icon: GiftIcon,
    },
    {
      title: "행운복권",
      subTitle: "완료",
      badge: null,
      isDone: true,
      Icon: TicketIcon,
    },
    {
      title: "라이브 쇼핑",
      subTitle: "포인트 받기",
      badge: null,
      isDone: false,
      Icon: VideoCameraIcon,
    },
    {
      title: "행운퀴즈",
      subTitle: "추가 혜택 보기",
      badge: null,
      isDone: false,
      Icon: QuestionMarkCircleIcon,
    },
    {
      title: "머니 알림 받고",
      subTitle: "20원 받기",
      badge: null,
      isDone: false,
      Icon: BellIcon,
    },
    {
      title: "만보기",
      subTitle: "130원 받기",
      badge: "12시간 남음",
      isDone: false,
      Icon: SparklesIcon,
    },
    {
      title: "휴대폰 요금제 바꾸고",
      subTitle: "12만원 받기",
      badge: null,
      isDone: false,
      Icon: DevicePhoneMobileIcon,
    },
    {
      title: "버튼 누르기",
      subTitle: "완료",
      badge: null,
      isDone: true,
      Icon: CursorArrowRaysIcon,
    },
  ];

  return (
    <Layout>
      <div className="flex w-screen flex-col px-8 pt-10">
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-neutral-200">혜택</h1>
          <button className="btn-ghost btn-md btn text-lg">
            <CurrencyDollarIcon className="w-6 fill-blue-500" />
            {formatNumber(1000)} 원
            <ChevronRightIcon className="w-4" />
          </button>
        </div>
        <div className="space-y-5">
          {items.map((item, index) => (
            <div
              className="flex cursor-pointer items-center justify-between rounded-lg p-3 active:bg-neutral-700"
              key={index}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={clsx(
                    `relative flex items-center justify-center rounded-full border-2 bg-neutral-700 p-3`,
                    item.isDone ? `border-green-500` : `border-neutral-700`
                  )}
                >
                  <item.Icon className="w-8" />
                  {item.isDone && (
                    <div className="absolute -bottom-1 -right-1 rounded-full border border-neutral-700 bg-green-500 p-1">
                      <CheckIcon className="w-4 text-neutral-700" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-medium">{item.title}</h2>
                  <p className="text-md text-blue-500">{item.subTitle}</p>
                </div>
              </div>
              {item.badge && (
                <div className="badge badge-md border-none bg-neutral-700 py-3 text-neutral-100">
                  {item.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
