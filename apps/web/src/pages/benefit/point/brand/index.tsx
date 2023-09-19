import type { GetServerSidePropsContext } from "next";
import { StackLayout } from "~/components/layout";
import { PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";

export default function PointBrand() {
  return (
    <StackLayout>
      <div className="flex flex-col gap-4 px-5">
        <h1 className="text-xl text-neutral-300">포인트를 쓸 수 있는 브랜드</h1>
        <input
          type="text"
          placeholder="검색"
          className="input w-full bg-neutral-700"
        />
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
