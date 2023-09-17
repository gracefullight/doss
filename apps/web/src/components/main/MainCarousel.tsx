import { ServiceCarousel } from "@doss/ui";
import {
  BanknotesIcon,
  CreditCardIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";

export default function MainCarousel() {
  const items = [
    {
      subheader: "59개 금융사",
      title: "대출 한도\n조회",
      icon: <PlayCircleIcon className="fill-success w-8 self-end" />,
    },
    {
      subheader: "최근",
      title: "내 부동산\n시세 조회",
      icon: <CreditCardIcon className="fill-info w-8 self-end" />,
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
