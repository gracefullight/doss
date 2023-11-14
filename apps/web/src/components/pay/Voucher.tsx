import {
  CakeIcon,
  CoffeeIcon,
  DrumstickIcon,
  PizzaIcon,
  SoupIcon,
  StarIcon,
  StoreIcon,
  TicketIcon,
} from "lucide-react";
import { formatNumber } from "~/utils/number";

export default function Voucher() {
  const voucherCategories = [
    {
      label: "추천",
      IconComponent: <StarIcon className="text-yellow-500" size={32} />,
    },
    {
      label: "카페",
      IconComponent: <CoffeeIcon className="text-green-500" size={32} />,
    },
    {
      label: "상품권",
      IconComponent: <TicketIcon className="text-pink-400" size={32} />,
    },
    {
      label: "치킨",
      IconComponent: <DrumstickIcon className="text-orange-500" size={32} />,
    },
    {
      label: "피자·버거",
      IconComponent: <PizzaIcon className="text-orange-500" size={32} />,
    },
    {
      label: "편의점",
      IconComponent: <StoreIcon className="text-sky-600" size={32} />,
    },
    {
      label: "외식",
      IconComponent: <SoupIcon className="text-red-400" size={32} />,
    },
    {
      label: "디저트",
      IconComponent: <CakeIcon className="text-white" size={32} />,
    },
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
    <div className="flex flex-col bg-neutral-800 px-6 pb-4 pt-8">
      <h2 className="text-xl font-medium text-neutral-200">기프티콘</h2>
      <span className="text-info">살 때마다 포인트 3% 적립</span>
      <div className="my-6 grid grid-cols-4 gap-y-6">
        {voucherCategories.map((item) => (
          <div
            key={item.label}
            className="flex cursor-pointer flex-col items-center space-y-2"
          >
            {item.IconComponent}
            <span className="text-neutral-200">{item.label}</span>
          </div>
        ))}
      </div>
      <h3 className="text-lg font-medium text-neutral-200">인기 기프티콘</h3>
      <ul className="mt-6 flex flex-col gap-6">
        {vouchers.map((item) => (
          <li key={item.title} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="avatar placeholder">
                <div className="text-neutral w-10 rounded-lg bg-neutral-100">
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
            <div className="badge badge-md bg-info text-info border-none bg-opacity-20 py-3 ">
              {formatNumber(item.point)}원 적립
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
