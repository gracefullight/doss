import { PlusIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { formatNumber, formatPercent } from "~/utils/number";

export default function InterestedStocks() {
  const items = [
    { ticker: "AAPL", name: "애플", percent: 0.002, price: 245546 },
    { ticker: "TSLA", name: "테슬라", percent: 0.2, price: 359097 },
  ];

  return (
    <div className="mb-2 flex flex-col gap-4">
      <div className="mb-2 flex justify-between">
        <div className="text-lg font-medium text-neutral-200">관심 주식</div>
        <div className="cursor-pointer text-neutral-400">편집하기</div>
      </div>
      <div className="join join-vertical w-full">
        <div className="collapse join-item collapse-arrow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title pl-0 text-lg font-medium text-neutral-400">
            기본
          </div>
          <div className="collapse-content p-0">
            <ul className="flex flex-col gap-2">
              {items.map((item, index) => (
                <li
                  key={item.ticker}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="avatar placeholder">
                      <div className="w-10 rounded-full bg-neutral-focus text-neutral-content">
                        {/* ? 아이콘 추가 */}
                        <span>{index + 1}</span>
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
                    <span className="text-sm font-medium text-neutral-400">
                      {formatNumber(item.price)}원
                    </span>
                  </div>
                </li>
              ))}
              <li className="flex items-center">
                <div className="flex items-center space-x-3">
                  <div className="avatar placeholder">
                    <div className="w-10 rounded-full bg-info bg-opacity-20">
                      <PlusIcon className="w-6 fill-info" />
                    </div>
                  </div>
                  <span className="font-medium text-neutral-400">추가하기</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}