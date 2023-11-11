"use client";

import { BellIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MainNavbar() {
  // TODO: count unread alarms
  const [hasUnreadAlarms] = useState(true);
  const router = useRouter();
  const handleNearby = () => {
    router.push("/benefit/nearby");
  };

  const handleNotification = () => {
    router.push("/notification");
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl normal-case">doss</a>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => void handleNearby()}
          title="함께 도스켜고 포인트"
          type="button"
        >
          <MapPinIcon className="h-6 w-6 fill-yellow-500" />
        </button>
        <div className="indicator">
          {hasUnreadAlarms && (
            <span className="indicator-item badge badge-error right-1 top-1 h-2 p-1"></span>
          )}
          <button
            className="btn btn-square btn-ghost"
            title="알림"
            type="button"
            onClick={() => void handleNotification()}
          >
            <BellIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
