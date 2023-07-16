import {
  BanknotesIcon,
  PresentationChartLineIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { ServiceCarousel } from "../shared";

export default function StockCarousel() {
  const items = [
    {
      subheader: "실시간",
      title: "인기 많은\n주식보기",
      icon: <StarIcon className="w-8 self-end fill-warning" />,
    },
    {
      subheader: "오늘은",
      title: "출석체크\n하러가기",
      icon: <PresentationChartLineIcon className="w-8 self-end" />,
    },
    {
      subheader: "차곡차곡",
      title: "주식\n모으기",
      icon: <BanknotesIcon className="w-8 self-end fill-success" />,
    },
  ];

  return (
    <div className="flex flex-col gap-4 pb-4">
      <div className="text-lg font-medium text-neutral-200">둘러보기</div>
      <ServiceCarousel items={items} />
    </div>
  );
}
