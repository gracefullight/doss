"use client";

import { useRouter } from "next/navigation";
import { useId } from "react";
import { StackLayout, StackLayoutNavbar } from "~/components/layout";

export default function LotterySettingAlarmTime() {
  const router = useRouter();

  const startTimeLabelId = useId();
  const dndOnWeekendLabelId = useId();

  const navItems = [
    {
      title: "알림 삭제",
      handleItem: () => {
        window.modalLotteryAlarmTime.showModal();
      },
    },
  ];

  const handleSubmit = () => {
    router.push("/benefit/lottery/setting");
  };

  return (
    <StackLayout>
      <StackLayoutNavbar items={navItems} />
      <div className="flex flex-col px-5">
        <h1 className="text-neutral-300 text-xl">복권 알림 시간</h1>
        <div className="join mt-2">
          <input
            className="join-item btn btn-sm !w-1/2"
            type="radio"
            name="dayNight"
            aria-label="오전"
            checked
          />
          <input
            className="join-item btn btn-sm !w-1/2"
            type="radio"
            name="dayNight"
            aria-label="오후"
          />
        </div>
        <div className="form-control mt-4 w-full">
          <label className="label" htmlFor={startTimeLabelId}>
            <span className="label-text">시작 시간</span>
          </label>
          <input
            id={startTimeLabelId}
            type="time"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control mt-4">
          <label className="label cursor-pointer" htmlFor={dndOnWeekendLabelId}>
            <span className="label-text">주말엔 안 받기</span>
            <input
              id={dndOnWeekendLabelId}
              type="checkbox"
              className="toggle toggle-info"
            />
          </label>
        </div>
      </div>
      <div className="fixed bottom-0 z-50 w-full px-4 pb-6">
        <button
          className="btn btn-info btn-block btn-lg rounded-2xl"
          type="button"
          onClick={handleSubmit}
        >
          수정 완료
        </button>
      </div>
      <dialog id="modalLotteryAlarmTime" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-medium text-lg text-neutral-300">
            알림을 끌까요?
          </h3>
          <p className="py-2">매일 복권을 받아 볼 수 없어요.</p>
          <div className="modal-action mt-2 justify-center">
            <button
              className="btn w-1/2 rounded-xl"
              type="button"
              onClick={() => window.modalLotteryAlarmTime.close()}
            >
              닫기
            </button>
            <button className="btn btn-error w-1/2 rounded-xl" type="button">
              알림 끄기
            </button>
          </div>
        </form>
      </dialog>
    </StackLayout>
  );
}
