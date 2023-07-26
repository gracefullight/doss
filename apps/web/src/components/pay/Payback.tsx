import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { formatNumber } from "~/utils/number";

export default function Payback() {
  const shoppings = [
    {
      image: "",
      title: "스토어 · 5일 남음",
      discount: 10000,
    },
    {
      image: "",
      title: "패션 · 14시간 남음",
      discount: 30000,
    },
    {
      image: "",
      title: "배달1 · 14시간 남음",
      discount: 2000,
    },
  ];

  return (
    <div className="flex flex-col bg-neutral-800 pt-8">
      <div className="flex flex-col px-6 pb-4">
        <h2 className="text-xl font-medium text-neutral-200">
          쇼핑하고 혜택 받기
        </h2>
        <ul className="mt-8 flex flex-col gap-6">
          {shoppings.map((item, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="avatar placeholder">
                  <div className="w-10 rounded-full bg-neutral-focus text-neutral-content">
                    <span>1</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-medium">
                    {formatNumber(item.discount)}원
                  </span>
                  <span className="text-sm text-neutral-400">{item.title}</span>
                </div>
              </div>
              <ChevronRightIcon className="w-4 fill-neutral-400" />
            </li>
          ))}
        </ul>
      </div>
      <div className="divider my-0"></div>
      <button className="btn btn-ghost btn-lg btn-block font-medium text-neutral-400">
        혜택 모두 보기
      </button>
    </div>
  );
}
