import type { GetServerSidePropsContext } from "next";
import { StackLayout } from "~/components/layout";
import { PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";

export default function Bank() {
  const navItems = [{ title: "설정", link: "/bank/setting" }];
  return (
    <StackLayout items={navItems} isLightBackground>
      <div className="flex flex-col bg-neutral-800">1</div>
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
