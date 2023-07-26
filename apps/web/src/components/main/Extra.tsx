import { Cog6ToothIcon, PlusIcon } from "@heroicons/react/24/solid";

export default function Extra() {
  return (
    <div className="mt-4 flex items-center gap-4">
      <button className="btn border-none bg-neutral-800 hover:bg-neutral-900">
        <Cog6ToothIcon className="w-6" />
        화면 설정
      </button>
      <button className="btn border-none bg-neutral-800 hover:bg-neutral-900">
        <PlusIcon className="w-6" />
        자산 추가
      </button>
    </div>
  );
}
