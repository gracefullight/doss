import {
  ChevronRightIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/24/solid";

export default function FeedbackBanner() {
  return (
    <div className="mb-3 mt-6 flex cursor-pointer justify-between">
      <div className="flex gap-4">
        <InboxArrowDownIcon className="w-6" />
        <div className="flex flex-col">
          <div className="text-lg font-medium text-neutral-200">
            지금까지 도스증권 어땠나요?
          </div>
          <span className="text-sm text-neutral-400">의견 보내기</span>
        </div>
      </div>
      <ChevronRightIcon className="w-4 text-neutral-400" />
    </div>
  );
}
