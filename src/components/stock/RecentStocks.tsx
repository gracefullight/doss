import { XMarkIcon } from "@heroicons/react/24/solid";
import { formatPercent } from "~/utils/number";

export default function RecentStocks() {
  const items = [
    { ticker: "TSLA", name: "테슬라", percent: 0.102 },
    { ticker: "HMSC", name: "한미반도체", percent: 0.3 },
  ];

  return (
    <div className="mb-2 flex flex-col gap-4">
      <div className="text-lg text-neutral-200">최근 본 주식</div>
      <div className="carousel rounded-box max-w-full space-x-2 self-start">
        {items.map((item) => (
          <div key={item.ticker} className="carousel-item">
            <button className="btn btn-ghost btn-active rounded-2xl">
              {item.name}
              <span className="text-error">{formatPercent(item.percent)}</span>
              <XMarkIcon className="w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
