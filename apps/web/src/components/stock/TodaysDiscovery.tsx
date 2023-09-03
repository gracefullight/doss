import { ChevronRightIcon } from "@heroicons/react/24/solid";
import IndexChartCarousel from "./IndexChartCarousel";

export default function TodaysDiscovery() {
  return (
    <>
      <div className="bg-neutral-800 px-6">
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium text-neutral-300">
              주요 지수
            </div>
            <div className="btn btn-link btn-sm text-neutral-400 no-underline hover:no-underline">
              전체보기
              <ChevronRightIcon className="w-4 font-medium" />
            </div>
          </div>
          <IndexChartCarousel />
        </div>
      </div>
    </>
  );
}
