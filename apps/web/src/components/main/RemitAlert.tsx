"use client";

import { LandmarkIcon, XIcon } from "lucide-react";
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
        <LandmarkIcon name="landmark" className="text-yellow-500" size={24} />
        <div className="flex flex-col gap-1">
          <span className="text-neutral-500 text-sm">
            복사한 계좌로 {formatNumber(3000)}원 송금
          </span>
          <div className="text-left font-medium text-info">
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
        <XIcon name="x" className="text-neutral-400" size={20} />
      </button>
    </div>
  );
}
