import { HeartIcon } from "@heroicons/react/24/solid";
import type { GetServerSidePropsContext } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import type { StackLayoutNavbarItem } from "~/components/layout";
import { StackLayout } from "~/components/layout";
import { PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";
import { formatNumber } from "~/utils/number";

export default function BenefitNearbyMyCharacter() {
  const navbarItems: StackLayoutNavbarItem[] = [
    // TODO: fetching point
    {
      title: `내 도스 포인트 ${formatNumber(259)}원`,
      link: "/benefit/nearby",
    },
  ];

  const { data: session } = useSession();

  return (
    <StackLayout items={navbarItems}>
      <div className="flex flex-grow flex-col px-6 pt-4">
        <div className="flex flex-col items-center">
          <div className="badge badge-warning badge-outline">웃는 얼굴</div>
          <span className="pt-1 text-lg font-medium">{session?.user.name}</span>
          <div className="avatar my-4">
            <div className="w-48 rounded-full">
              <Image
                src="https://i.pravatar.cc/200?u=b"
                width={200}
                height={200}
                alt="내 캐릭터"
              />
            </div>
          </div>
          <div className="btn btn-active btn-ghost my-4 rounded-2xl">
            이 캐릭터 소장하기 <HeartIcon className="w-4 fill-neutral-500" />
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 z-10 flex cursor-pointer items-center justify-between px-6 pb-4 pt-2">
        <div className="btn btn-info btn-block rounded-xl">
          내 캐릭터 바꾸기
        </div>
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
