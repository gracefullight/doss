import { SettingItem } from "@doss/ui";
import {
  ChevronRightIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import type { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { StackLayout } from "~/components/layout";
import type { SettingItemProps } from "~/components/stock";
import { PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";

interface Section {
  title?: string;
  items: SettingItemProps[];
}

export default function StockSetting() {
  const router = useRouter();
  const navItems = [
    {
      title: "고객센터",
      IconComponent: PhoneArrowUpRightIcon,
      link: "/stock",
    },
  ];

  const sections: Section[] = [
    {
      items: [
        {
          title: "개인정보 변경",
          link: "/",
        },
        {
          title: "수수료 및 혜택",
          link: "/",
          actionText: "무료 혜택 받기",
          actionColor: "text-info",
        },
        {
          title: "권리",
          link: "/",
        },
      ],
    },
    {
      title: "주식 첫 화면 설정",
      items: [
        {
          title: "보유주식",
          description: "순서 변경, 숨기기",
          link: "/",
        },
        {
          title: "관심주식",
          description: "순서 및 그룹 변경",
          link: "/",
        },
      ],
    },
    {
      items: [
        {
          title: "해외주식 기본 통화",
          link: "/",
          actionText: "원 (￦)",
        },
        {
          title: "알림",
          link: "/",
        },
        {
          title: "계좌",
          link: "/",
        },
        {
          title: "커뮤니티",
          link: "/",
        },
        {
          title: "거래",
          description: "인증없이 거래, 구매시 환전 안내",
          link: "/",
        },
        {
          title: "보안",
          description: "해외 접속, 화면 항상 켜기",
          link: "/",
        },
      ],
    },
  ];

  return (
    <StackLayout title="설정" items={navItems} isLightBackground>
      {sections.map((section, index) => (
        <div
          key={index}
          className={clsx(
            "flex flex-col bg-neutral-800 py-2",
            index > 0 && "mt-4",
          )}
        >
          {section.title && (
            <div className="px-5 py-2 text-sm text-neutral-500">
              {section.title}
            </div>
          )}
          {section.items.map((item) => (
            <SettingItem
              key={item.title}
              title={item.title}
              handleLink={() => void router.push(item.link)}
              IconComponent={ChevronRightIcon}
              description={item.description}
              actionText={item.actionText}
              actionColor={item.actionColor}
            />
          ))}
        </div>
      ))}
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
