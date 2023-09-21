import {
  CalendarDaysIcon,
  ClockIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";
import type { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { StackLayout } from "~/components/layout";
import { PATH_LOTTERY, PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";

export default function LotterySettingAlarm() {
  const router = useRouter();

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "복권 나눠주기",
        url: `https://doss.gracefullight.dev/${PATH_LOTTERY}`,
      });
    } catch (error) {
      console.warn("Sharing failed", error);
    }
  };

  const handleAlarmTime = async () => {
    await router.push("/benefit/lottery/setting/alarm/time");
  };

  return (
    <StackLayout>
      <div className="flex flex-col px-5">
        <h1 className="text-xl font-bold text-neutral-300">
          복권 신청 완료!
          <br />
          매일 행운을 보내드릴게요
        </h1>
        <span className="text-neutral-500">
          알림은 복권 설정에서 끌 수 있어요.
        </span>
        <div className="my-6 flex items-center justify-center">
          <LightBulbIcon className="w-24 fill-green-400" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex select-none items-center justify-between">
            <div className="flex gap-2">
              <ClockIcon className="w-6" />
              <div className="flex flex-col">
                <span className="text-sm text-neutral-500">시간</span>
                <div className="font-medium text-neutral-300">
                  매일 오전 8시
                </div>
              </div>
            </div>
            <button
              className="btn btn-info btn-sm btn-outline"
              type="button"
              onClick={() => void handleAlarmTime()}
            >
              시간 바꾸기
            </button>
          </div>
          <div className="flex select-none items-center justify-between">
            <div className="flex gap-2">
              <CalendarDaysIcon className="w-6" />
              <div className="flex flex-col">
                <span className="text-sm text-neutral-500">날짜</span>
                <div className="font-medium text-neutral-300">내일부터</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 z-50 w-full px-4 pb-6">
        <button
          className="btn btn-info btn-block btn-lg rounded-2xl"
          type="button"
          onClick={() => void handleShare()}
        >
          복권 나눠주기
        </button>
      </div>
    </StackLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerAuthSession({
    req: context.req,
    res: context.res,
  });

  if (!session) {
    return {
      redirect: {
        destination: PATH_SIGNIN,
        permanent: false,
      },
    };
  }

  return { props: {} };
}
