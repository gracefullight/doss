import {
  BanknotesIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";
import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "~/components/layout";
import { PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";

export default function All() {
  const router = useRouter();

  const items = [
    {
      title: "도스뱅크",
      Icon: BanknotesIcon,
      color: "info",
    },
    {
      title: "도스증권",
      Icon: ChartBarIcon,
      color: "error",
      link: "/stock",
    },
    {
      title: "고객센터",
      Icon: PhoneArrowDownLeftIcon,
      color: "error-content",
    },
  ];

  const handleLink = async (link?: string) => {
    if (link) {
      await router.push(link);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Doss | 전체</title>
      </Head>
      <div className="flex w-screen flex-col bg-neutral-800 px-6 pt-4">
        <div className="sticky top-0 z-50 flex justify-end">
          <button className="btn btn-square btn-ghost">
            <MagnifyingGlassIcon className="w-6" />
          </button>
          <button className="btn btn-square btn-ghost">
            <Cog6ToothIcon className="w-6" />
          </button>
        </div>
        <div className="mb-4 flex items-center gap-4">
          <h1 className="text-2xl font-bold text-neutral-200">전체</h1>
        </div>
        <div className="flex justify-between gap-2 py-2">
          {items.map((item, index) => (
            <div
              className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-2xl bg-neutral-700 px-6 py-4 active:bg-neutral-600"
              key={item.title}
              onClick={() => void handleLink(item.link)}
            >
              <item.Icon className={`w-6 fill-${item.color}`} />
              <span className="text-sm text-neutral-200">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
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
