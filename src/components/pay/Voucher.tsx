import {
  BeakerIcon,
  CakeIcon,
  FingerPrintIcon,
  HomeIcon,
  InboxIcon,
  InboxStackIcon,
  StarIcon,
  TicketIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { formatNumber } from "~/utils/number";

export default function Voucher() {
  const voucherCategories = [
    { Icon: StarIcon, label: "추천", color: "text-primary" },
    { Icon: BeakerIcon, label: "카페", color: "text-accent" },
    { Icon: TicketIcon, label: "상품권", color: "text-secondary" },
    { Icon: FingerPrintIcon, label: "치킨", color: "text-warning" },
    { Icon: InboxIcon, label: "피자·버거", color: "text-primary-focus" },
    { Icon: HomeIcon, label: "편의점", color: "text-info" },
    { Icon: InboxStackIcon, label: "외식", color: "text-secondary-content" },
    { Icon: CakeIcon, label: "디저트", color: "text-base-content" },
  ];

  const vouchers = [
    {
      image: "",
      title: "내가커피 | 아이스아메리카노",
      amount: 2000,
      point: 60,
    },
    {
      image: "",
      title: "마트 | 5만원 상품권 교환권",
      amount: 50000,
      point: 1500,
    },
    {
      image: "",
      title: "별다방 | 아이스 카페 아메리카노 T",
      amount: 4500,
      point: 135,
    },
  ];
  return (
    <div className="bg-neutral-800 px-8 pb-4 pt-8">
      <h2 className="text-xl font-medium text-neutral-200">기프티콘</h2>
      <span className="text-info">살 때마다 포인트 3% 적립</span>
      <div className="my-6 grid grid-cols-4 gap-y-6">
        {voucherCategories.map((item, index) => (
          <div
            key={index}
            className="flex cursor-pointer flex-col items-center space-y-2"
          >
            <item.Icon className={clsx("w-8", item.color)} />
            <span className="text-neutral-200">{item.label}</span>
          </div>
        ))}
      </div>
      <h3 className="text-lg font-medium text-neutral-200">인기 기프티콘</h3>
      <ul className="mt-6 flex flex-col gap-6">
        {vouchers.map((item, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="placeholder avatar">
                <div className="w-10 rounded-lg bg-neutral-100 text-neutral">
                  <span>1</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-neutral-400">{item.title}</span>
                <span className="text-lg font-medium">
                  {formatNumber(item.amount)}원
                </span>
              </div>
            </div>
            <div className="badge badge-md border-none bg-info bg-opacity-20 py-3 text-info ">
              {formatNumber(item.point)}원 적립
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
