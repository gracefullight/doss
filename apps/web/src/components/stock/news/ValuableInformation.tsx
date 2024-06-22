import { BatteryMediumIcon, CpuIcon, HelpCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import InformationCard from "./InformationCard";

export default function ValuableInformation() {
  const router = useRouter();
  const items = [
    {
      link: "/stock",
      IconComponent: (
        <HelpCircleIcon
          name="help-circle"
          className="text-purple-500"
          size={24}
        />
      ),
      title: "이번주 복습퀴즈, 100점 도전해볼까요?",
      tags: ["#주식초보", "#재미"],
    },
    {
      link: "/stock",
      IconComponent: (
        <CpuIcon name="cpu" className="text-green-500" size={24} />
      ),
      title: "오늘 상한가 찍은 반도체 종목, 어떤 곳이지?",
      tags: ["#주식초보", "#산업", "#반도체"],
    },
    {
      link: "/stock",
      IconComponent: (
        <BatteryMediumIcon
          name="battery-medium"
          className="text-green-500"
          size={24}
        />
      ),
      title: "전고체 배터리가 주목받고 있어요",
      tags: ["#국내주식", "#주식초보"],
    },
  ];

  const handleLink = (link: string) => {
    router.push(link);
  };

  return (
    <div className="mt-4 bg-neutral-800 pt-5 pb-2">
      <h2 className="px-5 font-medium text-lg text-neutral-300">
        알아두면 쓸모있는 주식 정보
      </h2>
      <div className="mt-3 flex flex-col">
        {items.map((item) => (
          <InformationCard
            key={item.title}
            title={item.title}
            handleLink={() => handleLink(item.link)}
            IconComponent={item.IconComponent}
            description={item.tags.map((tag) => <span key={tag}>{tag}</span>)}
          />
        ))}
      </div>
      <div className="divider my-0" />
      <div className="btn btn-block btn-ghost py-2 text-info">더 보기</div>
    </div>
  );
}
