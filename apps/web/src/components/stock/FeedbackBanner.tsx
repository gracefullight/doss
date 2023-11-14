import { ChevronRightIcon, InboxIcon } from "lucide-react";

export default function FeedbackBanner() {
  return (
    <div className="mb-3 mt-6 flex cursor-pointer items-center justify-between">
      <div className="flex items-center gap-4">
        <InboxIcon name="inbox" size={24} className="text-blue-300" />
        <div className="flex flex-col">
          <div className="text-lg font-medium text-neutral-200">
            지금까지 도스증권 어땠나요?
          </div>
          <span className="text-sm text-neutral-400">의견 보내기</span>
        </div>
      </div>
      <ChevronRightIcon name="chevron-right" className=" text-neutral-400" size={20} />
    </div>
  );
}
