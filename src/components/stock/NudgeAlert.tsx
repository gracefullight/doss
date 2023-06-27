import {
  ChartBarIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export default function NudgeAlert() {
  return (
    <div className="alert mb-4 grid-flow-col-dense border-none bg-neutral-700 shadow-lg">
      <ChartBarIcon className="w-6" />
      <div className="flex flex-col gap-1">
        <span className="font-medium">매일 방문할수록 혜택이 커져요</span>
        <div className="flex text-info">
          <span className="text-sm">출석체크하고 주식받기</span>
          <ChevronRightIcon className="w-3" />
        </div>
      </div>
      <button className="btn-ghost btn-sm btn">
        <XMarkIcon className="w-5 fill-neutral-400" />
      </button>
    </div>
  );
}
