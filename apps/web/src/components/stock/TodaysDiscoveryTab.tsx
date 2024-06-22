import { ChevronRightIcon } from "lucide-react";
import IndexChartCarousel from "./IndexChartCarousel";

export default function TodaysDiscoveryTab() {
  return (
    <>
      <div className="bg-neutral-800 px-6">
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="font-medium text-lg text-neutral-300">
              주요 지수
            </div>
            <div className="btn btn-link btn-sm text-neutral-400 no-underline hover:no-underline">
              전체보기
              <ChevronRightIcon
                name="chevron-right"
                className="font-medium"
                size={20}
              />
            </div>
          </div>
          <IndexChartCarousel />
        </div>
      </div>
    </>
  );
}
