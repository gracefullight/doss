import {
  Battery50Icon,
  ChevronRightIcon,
  CpuChipIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useRouter } from "next/router";

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
      <div className="flex flex-col">
        <h2 className="px-5 text-lg font-medium text-neutral-300">
          알아두면 쓸모있는 주식 정보
        </h2>
        <div className="mt-3 flex flex-col">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex cursor-pointer items-center justify-between px-5 py-3 active:bg-neutral-700"
              onClick={() => handleLink(item.link)}
            >
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-neutral-700 p-1">
                  <item.icon className={clsx("w-6", item.iconColor)} />
                </div>
                <div className="flex flex-col">
                  <div className="text-neutral-400">{item.title}</div>
                  <div className="flex gap-1">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-sm text-neutral-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="btn btn-square btn-sm btn-ghost"
                type="button"
                title="더보기"
              >
                <ChevronRightIcon className="w-4 fill-neutral-400" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="divider my-0"></div>
      <div className="btn btn-block btn-ghost text-info py-2">더 보기</div>
    </div>
  );
}
