import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { formatTimestamp } from "~/utils/datetime";

export default function NowInformation() {
  const items = [
    {
      imageUrl: "https://placehold.co/100x100?text=thumb",
      title: "유럽종양학회 참가 기업 리스트 (feat. 관련주)",
      source: "상남자",
      timestamp: "2023-09-02T15:57:00Z",
    },
    {
      imageUrl: "https://placehold.co/100x100?text=thumb",
      title: "23년 9월 1주차 애프터마켓 상승 및 하락 종목",
      source: "도스의미국주식",
      timestamp: "2023-09-02T03:57:00Z",
    },
    {
      imageUrl: "https://placehold.co/100x100?text=thumb",
      title: "양날의 검 ETF",
      source: "마피아",
      timestamp: "2023-09-01T03:57:00Z",
    },
  ];

  return (
    <div className="mt-4 bg-neutral-800 pb-2 pt-5">
      <div className="flex flex-col">
        <h2 className="px-5 text-lg font-medium text-neutral-300">
          도스증권 NOW
        </h2>
        <div className="mt-3 flex flex-col">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex cursor-pointer items-center justify-between px-5 py-3 active:bg-neutral-700"
            >
              <div className="flex items-center gap-2">
                <div className="avatar">
                  <div className="h-8 w-8 rounded-full">
                    <img src={item.imageUrl} alt="썸네일" loading="lazy" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-neutral-400">{item.title}</div>
                  <div className="flex gap-1 text-sm text-neutral-500">
                    {item.source} · {formatTimestamp(item.timestamp)}
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
      <div className="divider mb-0"></div>
      <div className="btn btn-block btn-ghost text-info py-2">더 보기</div>
    </div>
  );
}
