import {
  BanknotesIcon,
  CreditCardIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import { ServiceCarousel } from "../shared";

export default function MainCarousel() {
  const items = [
    {
      subheader: "59개 금융사",
      title: "대출 한도\n조회",
      icon: <PlayCircleIcon className="w-8 self-end fill-success" />,
    },
    {
      subheader: "최근",
      title: "내 부동산\n시세 조회",
      icon: <CreditCardIcon className="w-8 self-end fill-info" />,
    },
    {
      subheader: "자주",
      title: "이번 주 미션",
      icon: <BanknotesIcon className="w-8 self-end" />,
    },
    { subheader: "인기", title: "더보기", icon: null },
  ];

  return <ServiceCarousel items={items} isDark />;
}
