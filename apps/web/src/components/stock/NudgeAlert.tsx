"use client";

import { useCookieState } from "ahooks";
import { BarChartIcon, ChevronRightIcon, XIcon } from "lucide-react";
import { DateTime } from "luxon";

export default function NudgeAlert() {
  const [cookie, setCookie] = useCookieState("nudge-alert", {
    defaultValue: "1",
  });

  const remainingSeconds = () => {
    const now = DateTime.local();
    const tomorrowMidnight = DateTime.local(now.year, now.month, now.day).plus({
      days: 1,
    });
    const { seconds } = tomorrowMidnight.diff(now, "seconds");
    return Math.floor(seconds);
  };

  const closeAlert = () => {
    setCookie("0", {
      expires: new Date(Date.now() + remainingSeconds() * 1000),
    });
  };

  if (cookie === "0") {
    return null;
  }

  return (
    <div className="alert mb-4 flex justify-between border-none bg-neutral-700 shadow-lg">
      <div className="flex space-x-3">
        <BarChartIcon name="bar-chart" size={24} />
        <div className="flex flex-col gap-1">
          <span className="font-medium">매일 방문할수록 혜택이 커져요</span>
          <div className="flex items-center text-info">
            <span className="text-sm">출석체크하고 주식받기</span>
            <ChevronRightIcon name="chevron-right" size={16} />
          </div>
        </div>
      </div>
      <button
        onClick={closeAlert}
        className="btn btn-ghost btn-sm p-0"
        title="닫기"
        type="button"
      >
        <XIcon name="x" className="text-neutral-400" size={20} />
      </button>
    </div>
  );
}
