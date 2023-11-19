import { ServiceCarousel } from "@doss/ui";
import { BanknoteIcon, LineChartIcon, StarIcon } from "lucide-react";

export default function StockCarousel() {
  const items = [
    {
      subheader: "실시간",
      title: "인기 많은\n주식보기",
      IconComponent: (
        <StarIcon name="star" className="self-end text-yellow-500" size={32} />
      ),
    },
    {
      subheader: "오늘은",
      title: "출석체크\n하러가기",
      IconComponent: (
        <LineChartIcon name="line-chart" className="self-end " size={32} />
      ),
    },
    {
      subheader: "차곡차곡",
      title: "주식\n모으기",
      IconComponent: (
        <BanknoteIcon
          name="banknote"
          className="self-end text-green-500"
          size={32}
        />
      ),
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
