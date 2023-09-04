import { useRouter } from "next/router";
import { formatTimestamp } from "~/utils/datetime";
import InformationCard from "./InformationCard";

export default function NowInformation() {
  const router = useRouter();
  const items = [
    {
      imageUrl: "https://placehold.co/100x100?text=thumb",
      title: "유럽종양학회 참가 기업 리스트 (feat. 관련주)",
      source: "상남자",
      timestamp: "2023-09-02T15:57:00Z",
      link: "/stock",
    },
    {
      imageUrl: "https://placehold.co/100x100?text=thumb",
      title: "23년 9월 1주차 애프터마켓 상승 및 하락 종목",
      source: "도스의미국주식",
      timestamp: "2023-09-02T03:57:00Z",
      link: "/stock",
    },
    {
      imageUrl: "https://placehold.co/100x100?text=thumb",
      title: "양날의 검 ETF",
      source: "마피아",
      timestamp: "2023-09-01T03:57:00Z",
      link: "/stock",
    },
  ];

  const handleLink = async (link: string) => {
    await router.push(link);
  };

  return (
    <div className="mt-4 bg-neutral-800 pb-2 pt-5">
      <h2 className="px-5 text-lg font-medium text-neutral-300">
        도스증권 NOW
      </h2>
      <div className="mt-3 flex flex-col">
        {items.map((item) => (
          <InformationCard
            key={item.title}
            title={item.title}
            imageUrl={item.imageUrl}
            description={`${item.source} · ${formatTimestamp(item.timestamp)}`}
            handleLink={() => handleLink(item.link)}
          />
        ))}
      </div>
      <div className="divider mb-0"></div>
      <div className="btn btn-block btn-ghost text-info py-2">더 보기</div>
    </div>
  );
}
