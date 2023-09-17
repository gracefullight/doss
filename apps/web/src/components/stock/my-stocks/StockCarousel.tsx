import { ServiceCarousel } from "@doss/ui";
import {
  BanknotesIcon,
  PresentationChartLineIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

export default function StockCarousel() {
  const items = [
    {
      subheader: "실시간",
      title: "인기 많은\n주식보기",
      icon: <StarIcon className="fill-warning w-8 self-end" />,
    },
    {
      subheader: "오늘은",
      title: "출석체크\n하러가기",
      icon: <PresentationChartLineIcon className="w-8 self-end" />,
    },
    {
      subheader: "차곡차곡",
      title: "주식\n모으기",
      icon: <BanknotesIcon className="fill-success w-8 self-end" />,
    },
  ];

  return (
    <div className=" bg-neutral-800 px-6 py-4">
      <div className="flex flex-col gap-4 pb-4">
        <div className="text-lg font-medium text-neutral-200">둘러보기</div>
        <ServiceCarousel items={items} />
      </div>
    </div>
  );
}
