import { SparklesIcon, TicketIcon } from "@heroicons/react/24/solid";
import { DateTime } from "luxon";
import { GetServerSidePropsContext } from "next";
import { StackLayout } from "~/components/layout";
import { PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";
import { formatNumber } from "~/utils/number";

export default function Notification() {
  const items = [
    {
      icon: TicketIcon,
      iconColor: "fill-success",
      title: "행운복권",
      timestamp: "2023-08-13T09:00:00+09:00",
      message: "8월 13일, 행운복권이 도착했어요.",
      moreCount: 32,
    },
    {
      icon: SparklesIcon,
      iconColor: "fill-info",
      title: "만보기",
      timestamp: "2023-08-13T00:00:00+09:00",
      message: `오늘 ${formatNumber(1000)}걸음을 넘겼어요. 포인트를 받아보세요.`,
      moreCount: 29
    }
  ];

  const formatTimestamp = (isoTimestamp: string) => {
    const timestamp = DateTime.fromISO(isoTimestamp);
    const now = DateTime.local();
    const { days } = now.diff(timestamp, ["days"]);

    if (days >= 1) {
        return timestamp.toFormat("M월 d일");
    }
    
    return timestamp.toRelative({ base: now });
  };

  return (
    <StackLayout>
      <div className="">
        <h1 className="text-neutral-200 font-semibold text-2xl px-6">알림</h1>
        <div className="flex flex-col mt-4 gap-2">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col cursor-pointer px-6 py-4 active:bg-neutral-700">
              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  <item.icon className={`w-3 ${item.iconColor}`} />
                  <span className="text-neutral-500 text-sm">{item.title}</span>
                </div>
                <span className="text-neutral-500 text-sm">{formatTimestamp(item.timestamp)}</span>
              </div>
              <div className="flex flex-col px-4 gap-1">
                <h2 className="text-neutral-300 font-medium">{item.message}</h2>
                <span className="text-info text-sm">{item.moreCount}건 더보기</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StackLayout>
  )
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