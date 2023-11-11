"use client";

import { BuildingLibraryIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useReadClipboard } from "~/hooks";
import { formatNumber } from "~/utils/number";

export default function RemitAlert() {
  const [showComponent, setShowComponent] = useState(true);
  const { value: clipboardValue } = useReadClipboard();

  if (
    !(clipboardValue && /^\d{12,14}$/.test(clipboardValue) && showComponent)
  ) {
    return null;
  }

  const handleClose = () => {
    setShowComponent(false);
  };

  return (
    <div className="alert flex cursor-pointer justify-between rounded-2xl border-none bg-neutral-800 p-5">
      <div className="flex select-none space-x-3">
        <BuildingLibraryIcon className="fill-warning w-6" />
        <div className="flex flex-col gap-1">
          <span className="text-sm text-neutral-500">
            복사한 계좌로 {formatNumber(3000)}원 송금
          </span>
          <div className="text-info text-left font-medium">
            도스뱅크 {clipboardValue}
          </div>
        </div>
      </div>
      <button
        className="btn btn-ghost btn-sm p-0"
        title="닫기"
        type="button"
        onClick={handleClose}
      >
        <XMarkIcon className="w-5 fill-neutral-400" />
      </button>
    </div>
  );
}
