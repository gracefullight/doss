import { XIcon } from "lucide-react";
import { formatPercent } from "~/utils/number";

export default function RecentStocks() {
  const items = [
    { ticker: "TSLA", name: "테슬라", percent: 0.102 },
    { ticker: "HMSC", name: "한미반도체", percent: 0.3 },
  ];

  return (
    <div className="bg-neutral-800 px-6 py-4">
      <div className="mb-2 flex flex-col gap-4">
        <div className="text-lg text-neutral-200">최근 본 주식</div>
        <div className="carousel rounded-box max-w-full space-x-2 self-start">
          {items.map((item) => (
            <div key={item.ticker} className="carousel-item">
              <button
                className="btn btn-ghost btn-active rounded-2xl"
                type="button"
              >
                {item.name}
                <span className="text-error">
                  {formatPercent(item.percent)}
                </span>
                <XIcon size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
