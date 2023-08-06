import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function StockFooter() {
  return (
    <div className="mt-3 flex flex-col gap-4">
      <div className="text-neutral-200">도스증권</div>
      <p className="text-sm text-neutral-500">
        도스증권에서 제공하는 투자 정보는 고객의 투자 판단을 위한
        단순참고용일뿐, 투자 제안 및 권유·종목 추천을 위해 작성된 것이 아닙니다.
      </p>
      <div>
        <div className="text-sm text-neutral-400">
          고객센터 | 투자 유의사항 | 개인정보처리방침
        </div>
        <div className="text-sm text-neutral-400">
          이용자권리 및 유의사항 | 신용정보 활용체제
        </div>
      </div>
      <div className="flex cursor-pointer justify-between">
        <div className="text-lg text-neutral-400">꼭 알아두세요</div>
        <ChevronRightIcon className="w-4 text-neutral-400" />
      </div>
    </div>
  );
}
