import Image from "next/image";
import { formatNumber } from "~/utils/number";
import Section from "./Section";

export default function Spend() {
  return (
    <Section title="소비" link="/" hiddenLink>
      <div className="flex flex-col">
        <div className="flex cursor-pointer select-none items-center justify-between rounded-xl p-2 active:bg-neutral-600">
          <div className="flex items-center space-x-3">
            <div className="placeholder avatar">
              <div className="h-10 w-10 rounded-full">
                <Image
                  src="https://placehold.co/100x100?text=spend"
                  alt="thumbnail"
                  loading="lazy"
                  decoding="async"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-neutral-400 text-sm">이번 달 쓴 금액</span>
              <span className="font-medium text-lg">
                {formatNumber(1000000)}원
              </span>
            </div>
          </div>
          <button
            className="btn-sm btn border-none bg-neutral-700 focus:outline-none"
            type="button"
          >
            내역
          </button>
        </div>
        <div className="divider my-1 px-2" />
        <div className="flex cursor-pointer select-none items-center justify-between rounded-xl p-2 active:bg-neutral-600">
          <div className="flex items-center space-x-3">
            <div className="placeholder avatar">
              <div className="w-10 rounded-lg bg-neutral-400 text-white">
                <span>1</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-neutral-400 text-sm">
                이번 달 낼 카드값
              </span>
              <span className="font-medium text-lg">
                {formatNumber(300000)}원
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
