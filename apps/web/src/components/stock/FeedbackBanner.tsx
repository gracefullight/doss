import { ChevronRightIcon, InboxIcon } from "lucide-react";

export default function FeedbackBanner() {
  return (
    <div className="mt-6 mb-3 flex cursor-pointer items-center justify-between">
      <div className="flex items-center gap-4">
        <InboxIcon name="inbox" size={24} className="text-blue-300" />
        <div className="flex flex-col">
          <div className="font-medium text-lg text-neutral-200">
            지금까지 도스증권 어땠나요?
          </div>
          <span className="text-neutral-400 text-sm">의견 보내기</span>
        </div>
      </div>
      <ChevronRightIcon
        name="chevron-right"
        className=" text-neutral-400"
        size={20}
      />
    </div>
  );
}
