import { HelpCircleIcon } from "lucide-react";

export default function PointNudgeBanner() {
  return (
    <div className="fixed bottom-0 z-50 w-full px-4 pb-6">
      <div className="flex cursor-pointer select-none items-center justify-between rounded-full bg-neutral-700 px-6 py-4">
        <div className="flex gap-4">
          <HelpCircleIcon name="help-circle" size={24} />
          <div className="flex flex-col">
            <div className="text-neutral-300">깜짝 포인트 발견</div>
            <span className="text-sm text-neutral-500">
              지금 바로 확인해 보세요
            </span>
          </div>
        </div>
        <div className="btn btn-info btn-sm">확인하기</div>
      </div>
    </div>
  );
}
