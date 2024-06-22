import { MultilineText } from "@doss/ui";
import {
  BabyIcon,
  BadgeDollarSignIcon,
  CreditCardIcon,
  FishIcon,
  HeartIcon,
  HomeIcon,
  LayersIcon,
  MicIcon,
  OrbitIcon,
  RepeatIcon,
  UmbrellaIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface Item {
  link: string;
  IconComponent: ReactNode;
  description: string;
  title: string;
  badgeText?: string;
  isNew?: boolean;
  isPromotion?: boolean;
}

interface Section {
  sectionTitle: string;
  sectionItems: Item[];
}

export default function BankProductsTab() {
  const sections: Section[] = [
    {
      sectionTitle: "통장",
      sectionItems: [
        {
          link: "/",
          IconComponent: <LayersIcon name="layers" className="text-blue-500" />,
          description: "쪼개고 보관하고 자유롭게",
          title: "모으기",
          badgeText: "연 2%",
        },
        {
          link: "/",
          IconComponent: <UsersIcon name="users" className="text-green-500" />,
          description: "함께 모아쓰는",
          title: "모임통장",
          badgeText: "연 2%",
        },
        {
          link: "/",
          IconComponent: <HeartIcon name="heart" className="text-red-500" />,
          description: "너와 나, 둘이 하는 모임통장",
          title: "커플통장",
          badgeText: "연 2%",
        },
        {
          link: "/",
          IconComponent: <BabyIcon name="baby" className="text-orange-200" />,
          description: "0세~16세 자녀를 위한",
          title: "아이통장",
          isNew: true,
        },
      ],
    },
    {
      sectionTitle: "예적금",
      sectionItems: [
        {
          link: "/",
          IconComponent: (
            <LayersIcon name="layers" className="text-green-500" />
          ),
          description: "3개월 6개월 부담없는",
          title: "먼저 이자 받는 정기예금",
          badgeText: "연 3.5%",
        },
        {
          link: "/",
          IconComponent: (
            <BadgeDollarSignIcon
              name="badge-dollar-sign"
              className="text-blue-500"
            />
          ),
          description: "기간도 금액도 자유롭게",
          title: "자유 적금",
          badgeText: "최고 연 5%, 기본 연 3%\n(12개월 기준)",
        },
        {
          link: "/",
          IconComponent: <FishIcon name="fish" className="text-yellow-500" />,
          description: "절약하며 모으는",
          title: "굴비 적금",
          badgeText: "최고 연 5.5%\n기본 연 2%",
        },
        {
          link: "/",
          IconComponent: <OrbitIcon name="orbit" className="text-blue-400" />,
          description: "저기어때 X 백화점면세점",
          title: "키워봐요 적금",
          isPromotion: true,
        },
        {
          link: "/",
          IconComponent: <BabyIcon name="baby" className="text-orange-200" />,
          description: "0세~15세 자녀를 위한",
          title: "아이 적금",
          badgeText: "최고 연 5.5%\n기본 연 3%",
        },
      ],
    },
    {
      sectionTitle: "대출",
      sectionItems: [
        {
          link: "/",
          IconComponent: <HomeIcon name="home" className="text-blue-500" />,
          description: "안전한 전월세 생활을 위한",
          title: "전월세보증금대출",
          badgeText: "최저 연 3.57%",
        },
        {
          link: "/",
          IconComponent: <ZapIcon name="zap" className="text-yellow-500" />,
          description: "현금이 필요할 때",
          title: "비상금대출",
          badgeText: "최저 연 6.32%",
        },
      ],
    },
    {
      sectionTitle: "도스뱅크로 갈아타기",
      sectionItems: [
        {
          link: "/",
          IconComponent: <RepeatIcon name="repeat" className="text-blue-500" />,
          description: "더 낮은 금리로 바꿀 수 있는",
          title: "도스뱅크대환대출",
          badgeText: "최저 연 5.56%",
        },
        {
          link: "/",
          IconComponent: <RepeatIcon name="repeat" className="text-red-500" />,
          description: "신용보증기금이 보증하는",
          title: "사장님대환대출",
          badgeText: "연 5.5%",
        },
      ],
    },
    {
      sectionTitle: "카드",
      sectionItems: [
        {
          link: "/",
          IconComponent: (
            <CreditCardIcon name="credit-card" className="text-blue-500" />
          ),
          description: "다채롭고 아낌없는",
          title: "도스뱅크 체크카드",
        },
        {
          link: "/",
          IconComponent: (
            <CreditCardIcon name="credit-card" className="text-sky-500" />
          ),
          description: "모임원 누구나 나눠쓰는",
          title: "도스뱅크 모임카드",
        },
      ],
    },
    {
      sectionTitle: "목돈 굴리기",
      sectionItems: [
        {
          link: "/",
          IconComponent: (
            <UmbrellaIcon name="umbrella" className="text-yellow-500" />
          ),
          description: "사장님을 위한 목돈 마련 제도",
          title: "노란우산공제",
        },
      ],
    },
    {
      sectionTitle: "함께 써보기",
      sectionItems: [
        {
          link: "/",
          IconComponent: <MicIcon name="mic" />,
          description: "나만의 아이돌이 있다면",
          title: "같이 덕질하기",
        },
      ],
    },
    {
      sectionTitle: "편의 기능",
      sectionItems: [
        {
          link: "/",
          IconComponent: <ZapIcon name="mic" className="text-purple-400" />,
          description: "내가 원할 때 받는 이자",
          title: "지금 이자 받기",
        },
      ],
    },
  ];

  return (
    <div className="mt-5 flex flex-col gap-6">
      {sections.map((section) => (
        <div key={section.sectionTitle}>
          <h3 className="mb-2 px-5 text-neutral-200 text-xl">
            {section.sectionTitle}
          </h3>
          <div className="flex flex-col gap-1 px-3">
            {section.sectionItems.map(
              ({
                link,
                IconComponent,
                description,
                title,
                badgeText,
                isNew,
                isPromotion,
              }) => (
                <Link href={link} key={title}>
                  <div className="flex cursor-pointer select-none items-center justify-between rounded-xl p-2 active:bg-neutral-600">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-10 rounded-full bg-gray-700 p-2">
                          {IconComponent}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-neutral-400 text-sm">
                          {description}
                        </span>
                        <span className="font-medium text-neutral-200">
                          {title}
                        </span>
                      </div>
                    </div>
                    {isNew && (
                      <div className="badge badge-warning badge-sm py-2">
                        새로 나온
                      </div>
                    )}
                    {isPromotion && (
                      <div className="badge badge-accent badge-sm py-2">
                        이벤트 중
                      </div>
                    )}
                    {badgeText && (
                      <span className="text-right text-blue-500 text-xs">
                        <MultilineText>{badgeText}</MultilineText>
                      </span>
                    )}
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      ))}
      <div>
        <div className="mb-2 flex justify-between px-5">
          <h3 className="text-neutral-200 text-xl">유용한 정보</h3>
          <button className="btn btn-xs btn-active btn-ghost" type="button">
            더보기
          </button>
        </div>
        <div className="flex flex-col gap-1 px-3">
          <Link href="/">
            <div className="flex cursor-pointer select-none items-center justify-between rounded-xl p-2 active:bg-neutral-600">
              <div className="flex items-center space-x-3">
                <div className="avatar placeholder">
                  <div className="w-12 rounded-lg bg-neutral p-2">
                    <span>U1</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-neutral-200">
                    전세살이의 진정한 해피엔딩, 내 보증금 온전히 돌려받기
                  </span>
                  <span className="text-neutral-400 text-sm">전세툰</span>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="flex cursor-pointer select-none items-center justify-between rounded-xl p-2 active:bg-neutral-600">
              <div className="flex items-center space-x-3">
                <div className="avatar placeholder">
                  <div className="w-12 rounded-lg bg-neutral p-2">
                    <span>U2</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-neutral-200">
                    여행을 좋아한다면? 적금 금리에 여행 혜택까지 받아요
                  </span>
                  <span className="text-neutral-400 text-sm">
                    도스뱅크 사용팁
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
