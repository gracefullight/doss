import { ServiceCarousel } from "@doss/ui";
import { GaugeIcon, LightbulbIcon, Users2Icon } from "lucide-react";

export default function MainCarousel() {
  const items = [
    {
      subheader: "안전하게",
      title: "신용점수\n보기",
      icon: (
        <GaugeIcon name="gauge" className="self-end text-green-500" size={32} />
      ),
    },
    {
      subheader: "최근",
      title: "공동구매\n보기",
      icon: (
        <Users2Icon
          name="users-2"
          className="self-end text-red-500"
          size={32}
        />
      ),
    },
    {
      subheader: "자주",
      title: "오늘의\n머니 팁",
      icon: (
        <LightbulbIcon
          name="lightbulb"
          className="self-end text-yellow-500"
          size={32}
        />
      ),
    },
    { subheader: "인기", title: "더보기", icon: null },
  ];

  return <ServiceCarousel items={items} isDark />;
}
