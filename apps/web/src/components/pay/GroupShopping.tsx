import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useInterval } from "ahooks";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import GroupShoppingCarousel from "./group-shopping/GroupShoppingCarousel";
import GroupShoppingRecommended from "./group-shopping/GroupShoppingRecommended";
import GroupShoppingTimer from "./group-shopping/GroupShoppingTimer";

export default function GroupShopping() {
  const { seconds } = DateTime.local()
    .plus({ days: 1 })
    .set({
      hour: 0,
      minute: 0,
      second: 0,
    })
    .diffNow(["seconds"]);

  const [durationSeconds, setDurationSeconds] = useState(Math.round(seconds));
  const [isTimerEnded, setIsTimerEnded] = useState(false);

  const clearCount = useInterval(() => {
    if (durationSeconds <= 0) {
      clearCount();
      setIsTimerEnded(true);
    } else {
      setDurationSeconds((prevSeconds) => prevSeconds - 1);
    }
  }, 1000);

  useEffect(
    () => () => {
      clearCount();
    },
    [clearCount],
  );

  // TODO: check if only hide the timer
  if (isTimerEnded) {
    return null;
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium text-neutral-200">공동구매</h2>
          <div className="btn btn-link btn-sm text-neutral-400 no-underline hover:no-underline">
            모두 보기 <ChevronRightIcon className="w-4 font-medium" />
          </div>
        </div>
        <GroupShoppingTimer seconds={durationSeconds} />
        <GroupShoppingCarousel />
      </div>
      <GroupShoppingRecommended />
    </div>
  );
}
