import clsx from "clsx";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { formatNumber, formatPercent } from "~/utils/number";

export default function InterestedStocks() {
  const items = [
    { ticker: "AAPL", name: "애플", percent: 0.002, price: 245546 },
    { ticker: "TSLA", name: "테슬라", percent: 0.2, price: 359097 },
  ];

  return (
    <div className="bg-neutral-800 px-6 py-4">
      <div className="mb-2 flex flex-col gap-4">
        <div className="mb-2 flex justify-between">
          <div className="font-medium text-lg text-neutral-200">관심 주식</div>
          <div className="cursor-pointer text-neutral-400">편집하기</div>
        </div>
        <div className="join join-vertical w-full">
          <div className="join-item collapse-arrow collapse">
            <input
              type="radio"
              name="my-accordion-4"
              defaultChecked
              title="관심 주식 펼치기"
            />
            <div className="collapse-title pl-0 font-medium text-lg text-neutral-400">
              기본
            </div>
            <div className="collapse-content p-0">
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li
                    key={item.ticker}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="h-10 w-10 rounded-full">
                          <Image
                            src={`https://placehold.co/100x100?text=${item.ticker}`}
                            alt="thumbnail"
                            loading="lazy"
                            decoding="async"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className={clsx("text-lg", "text-error")}>
                        {`+${formatPercent(item.percent)}`}
                      </span>
                      <span className="font-medium text-neutral-400 text-sm">
                        {formatNumber(item.price)}원
                      </span>
                    </div>
                  </li>
                ))}
                <li className="flex items-center">
                  <div className="flex items-center space-x-3">
                    <div className="avatar placeholder">
                      <div className="w-10 rounded-full bg-info bg-opacity-20">
                        <PlusIcon
                          name="plus"
                          className="text-blue-500"
                          size={24}
                        />
                      </div>
                    </div>
                    <span className="font-medium text-neutral-400">
                      추가하기
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
