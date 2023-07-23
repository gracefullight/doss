import { ChevronRightIcon, FaceSmileIcon } from "@heroicons/react/24/solid";
import { type GetServerSidePropsContext } from "next";
import Head from "next/head";
import { StackLayout, type StackLayoutNavbarItem } from "~/components/layout";
import { PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";
import { formatNumber } from "~/utils/number";

export default function BenefitNearby() {
  const navbarItems: StackLayoutNavbarItem[] = [
    {
      title: "2배 이벤트",
      link: "/benefit/nearby/events",
    },
    {
      title: "설정",
      link: "/benefit/nearby/settings",
    },
  ];

  return (
    <>
      <Head>
        <title>Doss | 혜택 | 토스켜기</title>
      </Head>
      <StackLayout items={navbarItems}>
        <div className="flex-grow bg-neutral-800">Main content area.</div>
        <div className="flex cursor-pointer items-center justify-between px-6 py-6">
          <div className="flex gap-2">
            <FaceSmileIcon className="w-10 fill-warning" />
            <div className="flex flex-col gap-1">
              <span className="text-sm">
                함께 도스 켜고 총 {formatNumber(259)}원 모았어요
              </span>
              <span className="font-medium text-info">내 캐릭터 보기</span>
            </div>
          </div>
          <ChevronRightIcon className="w-4" />
        </div>
      </StackLayout>
    </>
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
