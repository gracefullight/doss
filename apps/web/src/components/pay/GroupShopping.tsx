import {
  ChevronRightIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import GroupShoppingCarousel from "./group-shopping/GroupShoppingCarousel";
import GroupShoppingRecommended from "./group-shopping/GroupShoppingRecommended";

export default function GroupShopping() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-1 px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium text-neutral-200">공동구매</h2>
          <div className="btn btn-link btn-sm text-neutral-400 no-underline hover:no-underline">
            모두 보기 <ChevronRightIcon className="w-4 font-medium" />
          </div>
        </div>
        <div className="btn btn-sm btn-ghost self-start rounded-2xl border-none bg-neutral-700">
          <CurrencyDollarIcon className="fill-info w-5" />
          <span className="text-info">190원</span>
          <span className="text-neutral-300">사용가능</span>
        </div>
        <GroupShoppingCarousel />
      </div>
      <GroupShoppingRecommended />
    </div>
  );
}
