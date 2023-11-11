"use client";

import {
  ArrowsUpDownIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  EyeSlashIcon,
  LockClosedIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";

export default function Extra() {
  const settings = [
    {
      name: "자산 목록 편집",
      IconComponent: ArrowsUpDownIcon,
      extraText: null,
    },
    {
      name: "금액 숨기기",
      IconComponent: EyeSlashIcon,
      extraText: null,
    },
    {
      name: "비밀번호 인증",
      IconComponent: LockClosedIcon,
      extraText: "거래 내역 볼 때",
    },
  ];

  const handleHomeSetting = () => {
    window.modalHomeSetting.showModal();
  };

  return (
    <div className="mt-4 flex items-center gap-4">
      <button
        className="btn border-none bg-neutral-800 hover:bg-neutral-900"
        type="button"
        onClick={handleHomeSetting}
      >
        <Cog6ToothIcon className="w-6" />
        화면 설정
      </button>
      <button
        className="btn border-none bg-neutral-800 hover:bg-neutral-900"
        type="button"
      >
        <PlusIcon className="w-6" />
        자산 추가
      </button>
      <dialog id="modalHomeSetting" className="modal modal-bottom">
        <div className="modal-box px-0">
          <h2 className="px-5 text-lg font-medium text-neutral-200">
            홈 화면 설정
          </h2>
          <div className="mb-1 mt-4 flex flex-col px-3">
            {settings.map((setting, index) => (
              <div
                key={index}
                className="flex cursor-pointer select-none flex-row items-center justify-between rounded-lg px-2 py-2 active:bg-neutral-700"
              >
                <div className="flex flex-row gap-2">
                  <setting.IconComponent className="w-5" />
                  <div className="text-neutral-300">{setting.name}</div>
                </div>
                <div className="flex flex-row items-center">
                  {setting.extraText && (
                    <span className="text-info">{setting.extraText}</span>
                  )}
                  <button
                    className="btn btn-square btn-ghost btn-sm"
                    type="button"
                    title="더보기"
                  >
                    <ChevronRightIcon className="w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="submit">close</button>
        </form>
      </dialog>
    </div>
  );
}
