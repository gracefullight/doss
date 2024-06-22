import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { formatNumber } from "~/utils/number";

export default function DossHero() {
  return (
    <div className="mt-2 mb-4 flex flex-col items-center justify-center px-5">
      <div className="avatar">
        <div className="h-14 w-14 rounded-full bg-neutral-700 p-2">
          <Image
            src="/apple-touch-icon.png"
            alt="thumbnail"
            loading="lazy"
            decoding="async"
            width={100}
            height={100}
          />
        </div>
      </div>
      <button
        className="btn btn-ghost mt-1 text-neutral-400 text-xl"
        type="button"
      >
        도스뱅크 통장 조회 <ChevronRightIcon name="chevron-right" size={20} />
      </button>
      <h1 className="select-none font-bold text-3xl text-neutral-300">
        {formatNumber(100000)}원
      </h1>
      <div className="mt-2 flex flex-row gap-2">
        <button
          className="btn btn-lg btn-wide rounded-xl text-info"
          type="button"
        >
          채우기
        </button>
        <button
          className="btn btn-info btn-lg btn-wide rounded-xl"
          type="button"
        >
          보내기
        </button>
      </div>
    </div>
  );
}
