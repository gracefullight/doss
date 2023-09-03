import {
  Battery50Icon,
  CpuChipIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useRouter } from "next/router";
import InformationCard from "./InformationCard";

export default function ValuableInformation() {
  const router = useRouter();
  const items = [
    {
      link: "/stock",
      icon: QuestionMarkCircleIcon,
      iconColor: "fill-purple-500",
      title: "이번주 복습퀴즈, 100점 도전해볼까요?",
      tags: ["#주식초보", "#재미"],
    },
    {
      link: "/stock",
      icon: CpuChipIcon,
      iconColor: "fill-green-500",
      title: "오늘 상한가 찍은 반도체 종목, 어떤 곳이지?",
      tags: ["#주식초보", "#산업", "#반도체"],
    },
    {
      link: "/stock",
      icon: Battery50Icon,
      iconColor: "fill-green-500",
      title: "전고체 배터리가 주목받고 있어요",
      tags: ["#국내주식", "#주식초보"],
    },
  ];

  const handleLink = async (link: string) => {
    await router.push(link);
  };

  return (
    <div className="mt-4 bg-neutral-800 pb-2 pt-5">
      <h2 className="px-5 text-lg font-medium text-neutral-300">
        알아두면 쓸모있는 주식 정보
      </h2>
      <div className="mt-3 flex flex-col">
        {items.map((item) => (
          <InformationCard
            key={item.title}
            title={item.title}
            handleLink={() => handleLink(item.link)}
            IconComponent={item.icon}
            iconProps={{ className: clsx("w-6", item.iconColor) }}
            description={item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          />
        ))}
      </div>
      <div className="divider my-0"></div>
      <div className="btn btn-block btn-ghost text-info py-2">더 보기</div>
    </div>
  );
}
