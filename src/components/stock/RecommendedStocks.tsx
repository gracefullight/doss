import { useSession } from "next-auth/react";
import { formatNumber, formatPercent } from "~/utils/number";

export default function RecommendedStocks() {
  const { data: sessionData } = useSession();

  const items = [
    { ticker: "JEPI", price: 71340, percent: 0.002 },
    { ticker: "QYLD", price: 22997, percent: 0.001 },
  ];

  return (
    <div className="flex flex-col">
      <div className="text-lg text-neutral-200">
        {sessionData?.user?.name}님이 관심 있어 할 월배당 관련 주식
      </div>
      <div className="text-sm text-neutral-400">
        최근 찾아 본 주식을 분석했어요.
      </div>
      <ul className="mb-6 mt-4 flex flex-col gap-4">
        {items.map((item) => (
          <li key={item.ticker} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="avatar placeholder">
                <div className="w-10 rounded-full bg-neutral-focus text-neutral-content">
                  <span>1</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">{item.ticker}</span>
                <span className="text-sm text-neutral-400">
                  {formatNumber(item.price)}원
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="badge badge-lg rounded-lg border-none bg-neutral-700 text-error">
                {`+${formatPercent(item.percent)}`}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}