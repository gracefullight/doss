"use client";

import { SettingItem } from "@doss/ui";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { StackLayout, StackLayoutNavbar } from "~/components/layout";
import { api } from "~/trpc/react";

export default function BankSetting() {
  const router = useRouter();
  const { data: session } = api.auth.getSession.useQuery();

  const sections = [
    {
      sectionTitle: "서류",
      items: [
        { title: "은행 증명서 발급하기", link: "/" },
        { title: "내 계약 서류", link: "/" },
        { title: "도스뱅크에 서류 제출하기", link: "/" },
      ],
    },
    {
      sectionTitle: "한도",
      items: [
        { title: "송금한도 (한도제한 해제)", link: "/" },
        { title: "ATM 한도 변경", link: "/" },
        { title: "비과세 한도 조회", link: "/" },
        { title: "인증수단 관리", link: "/" },
      ],
    },
    {
      sectionTitle: "게좌",
      items: [
        { title: "지연이체 설정", link: "/" },
        { title: "오픈뱅킹 관리", link: "/" },
        { title: "해지계좌 보기", link: "/" },
      ],
    },
    {
      sectionTitle: "알림 · 동의",
      items: [
        { title: "알림", link: "/" },
        { title: "약관 및 개인정보처리 동의", link: "/" },
      ],
    },
    {
      sectionTitle: "고객센터",
      items: [
        { title: "자주묻는질문", link: "/" },
        { title: "잘못 송금했어요", link: "/" },
        { title: "민원 접수하기", link: "/" },
        { title: "공지사항", link: "/" },
      ],
    },
    {
      sectionTitle: "상담",
      items: [
        { title: "실시간 채팅 상담", link: "/" },
        { title: "전화 상담", link: "/" },
      ],
    },
  ];

  return (
    <StackLayout>
      <StackLayoutNavbar title="도스뱅크 설정" isLightBackground />
      <div className="flex flex-col bg-neutral-800">
        <div className="flex cursor-pointer select-none flex-row items-center justify-between px-5 py-2 active:bg-neutral-700">
          <div className="flex flex-row items-center gap-2">
            <div className="avatar">
              <div className="h-8 w-8 rounded-full">
                <Image
                  src={"https://placehold.co/100x100?text=me"}
                  alt="thumbnail"
                  loading="lazy"
                  decoding="async"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-semibold text-neutral-300">
                {session?.user.name}
              </div>
              <span className="text-neutral-400 text-sm">내 정보 수정하기</span>
            </div>
          </div>
          <ChevronRightIcon name="chevron-right" size={20} />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 bg-neutral-800 py-2">
        {sections.map((section) => (
          <div key={section.sectionTitle} className="flex flex-col">
            <div className="px-5 py-2 font-semibold text-neutral-200">
              {section.sectionTitle}
            </div>
            {section.items.map((item) => (
              <SettingItem
                key={item.title}
                title={item.title}
                IconComponent={
                  <ChevronRightIcon name="chevron-right" size={20} />
                }
                handleLink={() => router.push(item.link)}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-grow flex-col bg-neutral-800">
        <div className="flex cursor-pointer select-none justify-between px-5 py-2 active:bg-neutral-700">
          <div className="text-neutral-400">탈퇴하기</div>
        </div>
      </div>
    </StackLayout>
  );
}
