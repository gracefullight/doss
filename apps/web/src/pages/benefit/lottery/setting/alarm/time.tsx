import { useRouter } from "next/router";
import { useId } from "react";
import type { StackLayoutNavbarItem } from "~/components/layout";
import { StackLayout } from "~/components/layout";

declare global {
  interface Window {
    modalLotteryAlarmTime: HTMLDialogElement;
  }
}

export default function LotterySettingAlarmTime() {
  const router = useRouter();

  const startTimeLabelId = useId();
  const dndOnWeekendLabelId = useId();

  const navItems: StackLayoutNavbarItem[] = [
    {
      title: "알림 삭제",
      handleItem: () => {
        window.modalLotteryAlarmTime.showModal();
      },
    },
  ];

  const handleSubmit = async () => {
    await router.push("/benefit/lottery/setting");
  };

  return (
    <StackLayout items={navItems}>
      <div className="flex flex-col px-5">
        <h1 className="text-xl text-neutral-300">복권 알림 시간</h1>
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
          onClick={() => void handleSubmit()}
        >
          수정 완료
        </button>
      </div>
      <dialog id="modalLotteryAlarmTime" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="text-lg font-medium text-neutral-300">
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
