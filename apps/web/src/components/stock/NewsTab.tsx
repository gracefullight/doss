import { useRouter } from "next/router";
import { formatTimestamp } from "~/utils/datetime";
import { formatPercent } from "~/utils/number";
import { NowInformation, ValuableInformation } from "./news";

export default function NewsTab() {
  const router = useRouter();
  const items = [
    {
      link: "/stock",
      tags: [{ name: "삼성전자", rate: 0.061 }],
      title: '"초대형 리더십 강화" ...삼성전자, 100형대 TV 출시 예고',
      source: "파이낸셜뉴스",
      timestamp: "2023-09-02T12:34:56Z",
      imageUrl: "https://placehold.co/100x100?text=samsung",
    },
    {
      link: "/stock",
      tags: [
        { name: "코리아나", rate: -0.058 },
        { name: "한국화장품제조", rate: -0.009 },
      ],
      title: "유커가 끌고, 비중국 수출이 밀고...화장품주 최고 100% 뛰었다",
      source: "머니투데이",
      timestamp: "2023-09-03T00:30:00Z",
      imageUrl: "https://placehold.co/100x100?text=cosmetics",
    },
    {
      link: "/stock",
      tags: [{ name: "테슬라", rate: -0.05 }],
      title: 'UBS "테슬라, 전기차 경쟁서 승리할것"',
      source: "이데일리해외",
      timestamp: "2023-09-02T00:34:56Z",
    },
  ];

  const handleLink = async (link: string) => {
    await router.push(link);
  };

  return (
    <>
      <div className="flex flex-col gap-4 bg-neutral-800 px-5 py-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex cursor-pointer select-none flex-col gap-1"
            onClick={() => handleLink(item.link)}
          >
            <div className="flex gap-2">
              {item.tags.map((tag) => (
                <span
                  className={`text-sm ${
                    tag.rate > 0 ? "text-error" : "text-info"
                  }`}
                  key={tag.name}
                >
                  {tag.name} {formatPercent(tag.rate)}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <div className="font-medium text-neutral-300">{item.title}</div>
                <span className="text-sm text-neutral-500">
                  {item.source} · {formatTimestamp(item.timestamp)}
                </span>
              </div>
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt="기사 이미지"
                  className="w-16 rounded-lg"
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <NowInformation />
      <ValuableInformation />
    </>
  );
}
