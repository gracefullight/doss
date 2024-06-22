import {
  AlarmCheckIcon,
  AppWindowIcon,
  ArrowDownLeftFromCircleIcon,
  ArrowDownSquareIcon,
  BadgeCheckIcon,
  BanknoteIcon,
  BellIcon,
  BikeIcon,
  BookTextIcon,
  BuildingIcon,
  CalculatorIcon,
  CameraIcon,
  CandlestickChartIcon,
  CarFrontIcon,
  CheckSquare2Icon,
  ChevronRightIcon,
  CircleDollarSignIcon,
  ClockIcon,
  CoinsIcon,
  CreditCardIcon,
  DollarSignIcon,
  DropletsIcon,
  EggIcon,
  FileCheckIcon,
  FileLockIcon,
  FileOutputIcon,
  FishIcon,
  FootprintsIcon,
  GaugeIcon,
  GiftIcon,
  GlobeIcon,
  HashIcon,
  HazeIcon,
  HeadphonesIcon,
  HeartIcon,
  HelpCircleIcon,
  LandmarkIcon,
  LayersIcon,
  LightbulbIcon,
  LockIcon,
  MapPinIcon,
  MegaphoneIcon,
  MessageCircleIcon,
  MicIcon,
  NewspaperIcon,
  PackageIcon,
  PercentCircleIcon,
  PieChartIcon,
  PiggyBankIcon,
  PlaneIcon,
  PlusSquareIcon,
  ReceiptIcon,
  RepeatIcon,
  ScanBarcodeIcon,
  School2Icon,
  SearchIcon,
  SendIcon,
  SettingsIcon,
  ShieldEllipsisIcon,
  ShieldHalfIcon,
  ShieldIcon,
  SmileIcon,
  TicketIcon,
  TrainIcon,
  TrendingUpIcon,
  UmbrellaIcon,
  UsersIcon,
  VideoIcon,
  WalletCardsIcon,
  WalletIcon,
  WarehouseIcon,
  WifiIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { ConditionalLink } from "~/components/layout";

interface SectionItem {
  title: string;
  icon: ReactNode;
  serviceName?: string;
  badge?: string;
  badgeColor?: string;
}

interface Section {
  sectionTitle: string;
  items: SectionItem[];
}

export const metadata = {
  title: "전체",
};

export default function All() {
  const items = [
    {
      title: "도스뱅크",
      IconComponent: (
        <LandmarkIcon name="landmark" size={24} className="text-blue-500" />
      ),
    },
    {
      title: "도스증권",
      IconComponent: (
        <TrendingUpIcon name="trending-up" size={24} className="text-red-500" />
      ),
      link: "/stock",
    },
    {
      title: "고객센터",
      IconComponent: (
        <HeadphonesIcon name="headphones" size={24} className="text-red-300" />
      ),
    },
  ];

  const sections: Section[] = [
    {
      sectionTitle: "최근",
      items: [
        {
          title: "함께 도스켜고 포인트 받기",
          icon: <MapPinIcon className="text-yellow-500" size={20} />,
        },
        {
          title: "ATM에서 출금하기",
          icon: <ReceiptIcon className="text-green-500" size={20} />,
        },
        {
          title: "모임통장 만들기",
          icon: <UsersIcon className="text-green-500" size={20} />,
          serviceName: "도스뱅크",
        },
      ],
    },
    {
      sectionTitle: "추천",
      items: [
        {
          title: "버튼 누르고 10원 받기",
          icon: <ArrowDownSquareIcon className="text-blue-500" size={20} />,
        },
        {
          title: "GLN 해외 결제하기",
          icon: <GlobeIcon className="text-green-400" size={20} />,
        },
      ],
    },
    {
      sectionTitle: "통신",
      items: [
        {
          title: "만보기 10배 받는 요금제",
          badge: "이벤트",
          badgeColor: "info",
          icon: <FootprintsIcon className="text-blue-500" size={20} />,
        },
        {
          title: "내 통신요금",
          icon: <ReceiptIcon className="text-yellow-500" size={20} />,
        },
        {
          title: "인터넷 바꾸고 혜택 받기",
          icon: <WifiIcon className="text-blue-500" size={20} />,
        },
        {
          title: "도스 모바일 ₩  통신요금",
          icon: <ReceiptIcon className="text-blue-500" size={20} />,
        },
      ],
    },
    {
      sectionTitle: "자산",
      items: [
        {
          title: "내 자산",
          icon: <BanknoteIcon size={20} />,
        },
        {
          title: "투자 모아보기",
          icon: <CandlestickChartIcon className="text-red-500" size={20} />,
        },
        {
          title: "내 멤버십 모아보기",
          icon: <CoinsIcon className="text-green-500" size={20} />,
          badge: "새로 나온",
          badgeColor: "error",
        },
        {
          title: "내 대출관리",
          icon: <BookTextIcon className="text-blue-400" size={20} />,
        },
        {
          title: "내 연금",
          icon: <CoinsIcon className="text-yellow-500" size={20} />,
        },
      ],
    },
    {
      sectionTitle: "소비",
      items: [
        {
          title: "소비 다이어리",
          icon: <SmileIcon className="text-yellow-500" size={20} />,
        },
        {
          title: "소비 태그",
          icon: <HashIcon className="text-blue-500" size={20} />,
        },
        {
          title: "소비·수입 내역",
          icon: <CreditCardIcon className="text-blue-400" size={20} />,
        },
        {
          title: "소비 분석",
          icon: <PieChartIcon className="text-blue-500" size={20} />,
        },
        {
          title: "카드값",
          icon: <CreditCardIcon size={20} />,
        },
        {
          title: "매달 나가는 돈",
          icon: <ReceiptIcon size={20} />,
        },
      ],
    },
    {
      sectionTitle: "대출",
      items: [
        {
          title: "대출 받기",
          icon: <RepeatIcon className="text-green-500" size={20} />,
        },
        {
          title: "대출 갈아타기",
          icon: <RepeatIcon className="text-green-500" size={20} />,
        },
        {
          title: "도스뱅크 대출로 갈아타기",
          icon: <RepeatIcon className="text-blue-500" size={20} />,
          serviceName: "도스뱅크",
        },
        {
          title: "도스뱅크 대출 받기",
          icon: <RepeatIcon className="text-blue-500" size={20} />,
          serviceName: "도스뱅크",
        },
        {
          title: "중고차 살 때 대출 알아보기",
          icon: <CarFrontIcon className="text-green-400" size={20} />,
          serviceName: "도스뱅크",
        },
        {
          title: "주택담보대출 찾기",
          icon: <WarehouseIcon className="text-green-400" size={20} />,
        },
        {
          title: "카드론 받기",
          icon: <CreditCardIcon className="text-green-500" size={20} />,
        },
        {
          title: "대출 이자 계산기",
          icon: <CalculatorIcon size={20} />,
        },
        {
          title: "아파트 대출한도 계산기",
          icon: <BuildingIcon size={20} />,
        },
      ],
    },
    {
      sectionTitle: "결제",
      items: [
        {
          title: "내 도스페이",
          icon: <DollarSignIcon className="text-blue-500" size={20} />,
        },
        {
          title: "도스 기프티콘",
          icon: <TicketIcon className="text-blue-500" size={20} />,
        },
        {
          title: "도스 공동구매",
          icon: <UsersIcon className="text-red-400" size={20} />,
        },
        {
          title: "후불결제",
          icon: <WalletIcon name="wallet" size={20} />,
        },
        {
          title: "GLN 해외 결제하기",
          icon: <GlobeIcon className="text-green-400" size={20} />,
        },
        {
          title: "혜택 받고 결제하기",
          icon: <PercentCircleIcon className="text-blue-500" size={20} />,
        },
        {
          title: "현장결제",
          icon: <ScanBarcodeIcon size={20} />,
        },
        {
          title: "지역사랑상품권",
          icon: <TicketIcon className="text-yellow-500" size={20} />,
        },
      ],
    },
    {
      sectionTitle: "보험",
      items: [
        {
          title: "내 보험 상담하기",
          icon: <HeadphonesIcon className="text-blue-400" size={20} />,
        },
        {
          title: "내 보험",
          icon: <ShieldIcon size={20} />,
        },
        {
          title: "보험 전문가에게 물어보기",
          icon: <MessageCircleIcon className="text-blue-500" size={20} />,
        },
        {
          title: "병원비 돌려받기",
          icon: <PlusSquareIcon className="text-green-500" size={20} />,
        },
        {
          title: "보험 둘러보기",
          icon: <ShieldEllipsisIcon className="text-blue-500" size={20} />,
        },
        {
          title: "해외 여행자 보험",
          icon: <PlaneIcon className="text-blue-400" size={20} />,
        },
      ],
    },
    {
      sectionTitle: "송금",
      items: [
        {
          title: "송금",
          icon: <SendIcon className="text-blue-500" size={20} />,
        },
        {
          title: "더치페이",
          icon: <UsersIcon className="text-blue-500" size={20} />,
        },
        {
          title: "내 도스아이디",
          icon: <BadgeCheckIcon className="text-blue-400" size={20} />,
        },
        {
          title: "사진으로 송금",
          icon: <CameraIcon size={20} />,
        },
        {
          title: "자동이체",
          icon: <CheckSquare2Icon className="text-red-400" size={20} />,
        },
        {
          title: "ATM에서 출금하기",
          icon: <ReceiptIcon className="text-green-500" size={20} />,
        },
      ],
    },
    {
      sectionTitle: "투자",
      items: [
        {
          title: "투자로 돈 불리기",
          icon: <LayersIcon className="text-blue-500" size={20} />,
        },
        {
          title: "채권으로 목돈굴리기",
          icon: <CircleDollarSignIcon className="text-blue-500" size={20} />,
          serviceName: "도스뱅크",
        },
        {
          title: "공모주 청약 일정",
          icon: <TrendingUpIcon className="text-red-400" size={20} />,
          serviceName: "도스뱅크",
        },
        {
          title: "연금 모으기",
          icon: <LayersIcon className="text-yellow-500" size={20} />,
          serviceName: "도스뱅크",
        },
      ],
    },
    {
      sectionTitle: "신용",
      items: [
        {
          title: "내 신용점수",
          icon: <GaugeIcon className="text-green-500" size={20} />,
        },
        {
          title: "신용점수 올리기",
          icon: <GaugeIcon className="text-blue-400" size={20} />,
        },
      ],
    },
    {
      sectionTitle: "계좌",
      items: [
        {
          title: "모임통장 만들기",
          icon: <UsersIcon className="text-green-500" size={20} />,
          serviceName: "도스뱅크",
        },
        {
          title: "커플통장 만들기",
          icon: <HeartIcon className="text-red-500" />,
          serviceName: "도스뱅크",
        },
        {
          title: "먼저 이자 받는 정기예금 만들기",
          icon: <LayersIcon className="text-green-500" size={20} />,
          serviceName: "도스뱅크",
        },
        {
          title: "키워봐요 만들기",
          icon: <EggIcon className="text-blue-400" size={20} />,
          serviceName: "도스뱅크",
        },
        {
          title: "굴비 적금 만들기",
          icon: <FishIcon className="text-yellow-500" size={20} />,
          serviceName: "도스뱅크",
        },
        {
          title: "입출금·예적금·주식 계좌 개설",
          icon: <AppWindowIcon size={20} />,
        },
      ],
    },
    {
      sectionTitle: "카드",
      items: [
        {
          title: "인기있는 신용카드 만들기",
          icon: <CreditCardIcon className="text-purple-400" size={20} />,
        },
        {
          title: "인기있는 체크카드 만들기",
          icon: <CreditCardIcon className="text-purple-400" size={20} />,
        },
        {
          title: "모임카드 만들기",
          icon: <CreditCardIcon className="text-green-500" size={20} />,
        },
        {
          title: "한도 높은 신용카드 찾기",
          icon: <CreditCardIcon className="text-purple-400" size={20} />,
        },
        {
          title: "카드 알림 받기",
          icon: <CreditCardIcon className="text-blue-500" size={20} />,
        },
        {
          title: "도스신용카드 만들기 ",
          icon: <CreditCardIcon className="text-blue-500" size={20} />,
        },
      ],
    },
    {
      sectionTitle: "주식",
      items: [
        {
          title: "도스증권 주식 모으기",
          icon: <PiggyBankIcon className="text-pink-400" size={20} />,
          serviceName: "도스증권",
        },
      ],
    },
    {
      sectionTitle: "교통",
      items: [
        {
          title: "자전거 · 킥보드 타기",
          icon: <BikeIcon className="text-purple-500" size={20} />,
          badge: "새로 나온",
          badgeColor: "error",
        },
        {
          title: "기차 예약하기",
          icon: <TrainIcon className="text-blue-400" size={20} />,
        },
      ],
    },
    {
      sectionTitle: "부동산",
      items: [
        {
          title: "전세보증금 반환보증",
          icon: <ShieldHalfIcon className="text-green-400" size={20} />,
          badge: "새로 나온",
          badgeColor: "error",
        },
        {
          title: "부동산 시세",
          icon: <WarehouseIcon className="text-blue-500" size={20} />,
        },
        {
          title: "주택 청약 공고",
          icon: <WarehouseIcon className="text-green-400" size={20} />,
        },
      ],
    },
    {
      sectionTitle: "주민센터",
      items: [
        {
          title: "증명서 발급하기",
          icon: <FileCheckIcon name="file-check" size={20} />,
        },
        {
          title: "내 공공 알림",
          icon: <School2Icon className="text-green-500" size={20} />,
        },
        {
          title: "숨은 정부지원금 찾기",
          icon: <LandmarkIcon className="text-yellow-500" size={20} />,
        },
        {
          title: "정치후원금 보내기",
          icon: <School2Icon className="text-green-500" size={20} />,
        },
      ],
    },
    {
      sectionTitle: "개인정보와 보안",
      items: [
        {
          title: "가족 보안 알리미",
          icon: <UsersIcon className="text-orange-500" size={20} />,
        },
        {
          title: "개인정보 안심리포트",
          icon: <FileLockIcon size={20} />,
        },
      ],
    },
    {
      sectionTitle: "납부",
      items: [
        {
          title: "자동납부",
          serviceName: "도스뱅크",
          icon: <ReceiptIcon className="text-red-400" size={20} />,
        },
        {
          title: "통신요금 내기",
          icon: <ReceiptIcon className="text-blue-400" size={20} />,
        },
        {
          title: "서울시 수도요금 내기",
          icon: <DropletsIcon className="text-blue-500" size={20} />,
        },
        {
          title: "서울시 세입금 내기",
          icon: <WalletCardsIcon className="text-blue-500" size={20} />,
        },
        {
          title: "내 아파트 관리비",
          icon: <BuildingIcon size={20} />,
        },
      ],
    },
    {
      sectionTitle: "포인트",
      items: [
        {
          title: "내 포인트",
          icon: <DollarSignIcon className="text-blue-500" size={20} />,
        },
        {
          title: "이번주 미션",
          icon: (
            <ArrowDownLeftFromCircleIcon
              name="arrow-down-left-from-circle"
              className="text-red-500"
              size={20}
            />
          ),
        },
        {
          title: "행운퀴즈",
          icon: (
            <HelpCircleIcon
              name="help-circle"
              className="text-purple-500"
              size={20}
            />
          ),
        },
        {
          title: "머니알림",
          icon: <BellIcon className="text-yellow-500" size={20} />,
        },
        {
          title: "버튼 누르고 10원 받기",
          icon: <ArrowDownSquareIcon className="text-blue-500" size={20} />,
        },
        {
          title: "라이브 쇼핑 보기",
          icon: <VideoIcon className="text-red-500" size={20} />,
        },
      ],
    },
    {
      sectionTitle: "편의",
      items: [
        {
          title: "연말정산 사전점검",
          icon: <CalculatorIcon size={20} />,
          badge: "새로 나온",
          badgeColor: "error",
        },
        {
          title: "오늘의 운세",
          icon: <HazeIcon className="text-blue-400" size={20} />,
        },
        {
          title: "편의점 택배 예약하기",
          icon: <PackageIcon className="text-yellow-500" size={20} />,
        },
        {
          title: "만보기",
          icon: <FootprintsIcon className="text-blue-500" size={20} />,
        },
        {
          title: "약 알림 받기",
          icon: <ClockIcon className="text-red-500" size={20} />,
        },
        {
          title: "환전",
          icon: <DollarSignIcon size={20} />,
        },
        {
          title: "오늘의 머니 팁",
          icon: <LightbulbIcon className="text-yellow-500" size={20} />,
        },
        {
          title: "환율 알리미",
          icon: <AlarmCheckIcon className="text-blue-500" size={20} />,
        },
        {
          title: "지역사랑상품권",
          icon: <TicketIcon className="text-yellow-500" size={20} />,
        },
        {
          title: "같이 덕질하기",
          icon: <MicIcon size={20} />,
          serviceName: "도스뱅크",
        },
      ],
    },
    {
      sectionTitle: "사장님",
      items: [
        {
          title: "도스에 광고하기",
          icon: <MegaphoneIcon className="text-orange-500" size={20} />,
        },
        {
          title: "내 매출 장부",
          icon: <ReceiptIcon className="text-red-400" size={20} />,
        },
        {
          title: "도스뱅크 사장님 대출받기",
          icon: <ReceiptIcon className="text-blue-400" size={20} />,
          serviceName: "도스뱅크",
        },
        {
          title: "급여명세서 보내기",
          icon: <FileOutputIcon className="text-yellow-400" size={20} />,
        },
        {
          title: "세금계산서 알림 받기",
          icon: <ReceiptIcon size={20} />,
        },
        {
          title: "사장님을 위한 퇴직금 노란우산공제",
          icon: <UmbrellaIcon className="text-yellow-500" size={20} />,
          serviceName: "도스뱅크",
        },
      ],
    },
    {
      sectionTitle: "자동차",
      items: [
        {
          title: "자동차 검사 예약",
          icon: (
            <CarFrontIcon
              name="car-front"
              className="text-blue-500"
              size={20}
            />
          ),
        },
        {
          title: "자동차 보험 갱신 알림 받기",
          icon: <CarFrontIcon name="car-front" size={20} />,
        },
        {
          title: "바로 받는 장기렌터카 찾기",
          icon: (
            <CarFrontIcon
              name="car-front"
              className="text-blue-400"
              size={20}
            />
          ),
        },
        {
          title: "차 시세",
          icon: (
            <CarFrontIcon
              name="car-front"
              className="text-green-500"
              size={20}
            />
          ),
        },
        {
          title: "차 보험료 조회",
          icon: (
            <CarFrontIcon
              name="car-front"
              className="text-green-400"
              size={20}
            />
          ),
        },
        {
          title: "차 팔기",
          icon: (
            <CarFrontIcon
              name="car-front"
              className="text-yellow-500"
              size={20}
            />
          ),
        },
      ],
    },

    {
      sectionTitle: "도움말",
      items: [
        {
          title: "도스계정 통합 서비스",
          icon: <LandmarkIcon className="text-blue-500" size={20} />,
        },
        {
          title: "24시간 고객센터",
          icon: <HeadphonesIcon className="text-blue-400" size={20} />,
        },
        {
          title: "도스 새소식",
          icon: <NewspaperIcon className="text-yellow-500" size={20} />,
        },
      ],
    },
  ];

  return (
    <div className="flex w-screen flex-col px-4 pt-2">
      <div className="sticky top-0 z-50 flex justify-end">
        <button className="btn btn-square btn-ghost" title="검색" type="button">
          <SearchIcon size={24} />
        </button>
        <button className="btn btn-square btn-ghost" title="설정" type="button">
          <SettingsIcon size={24} />
        </button>
      </div>
      <div className="px-2">
        <div className="mb-4 flex items-center gap-4">
          <h1 className="font-bold text-2xl text-neutral-200">전체</h1>
        </div>
        <div className="flex justify-between gap-2 py-2">
          {items.map((item) => (
            <ConditionalLink href={item.link} key={item.title}>
              <div className="flex cursor-pointer select-none flex-col items-center justify-center gap-1 rounded-2xl bg-neutral-700 px-6 py-4 active:bg-neutral-600">
                {item.IconComponent}
                <span className="text-neutral-200 text-sm">{item.title}</span>
              </div>
            </ConditionalLink>
          ))}
        </div>
      </div>
      <div className="pt-4">
        <ul className="flex flex-col gap-2">
          <li className="a flex cursor-pointer select-none items-center justify-between rounded-xl px-2 py-2 active:bg-neutral-600">
            <div className="flex items-center space-x-3">
              <div className="rounded-xl bg-neutral-700 p-1">
                <LockIcon name="lock" className="text-blue-500" size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">보안과 인증</span>
              </div>
            </div>
            <ChevronRightIcon name="chevron-right" size={16} />
          </li>
          <li className="a flex cursor-pointer select-none items-center justify-between rounded-xl px-2 py-2 active:bg-neutral-600">
            <div className="flex items-center space-x-3">
              <div className="rounded-xl bg-neutral-700 p-1">
                <GaugeIcon name="gauge" className="text-green-500" size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">내 신용점수</span>
              </div>
            </div>
            <ChevronRightIcon name="chevron-right" size={16} />
          </li>
          <li className="flex cursor-pointer select-none items-center justify-between rounded-xl px-2 py-2 active:bg-neutral-600">
            <div className="flex items-center space-x-3">
              <div className="rounded-xl bg-neutral-700 p-1">
                <GiftIcon name="gift" className="text-red-500" size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">진행중인 이벤트</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-medium">9개</span>
              <ChevronRightIcon name="chevron-right" size={16} />
            </div>
          </li>
        </ul>
        <div className="divider px-2" />
        <div className="flex flex-col gap-6">
          {sections.map((section) => (
            <div key={section.sectionTitle}>
              <div className="px-2 pb-4 font-medium text-lg">
                {section.sectionTitle}
              </div>
              <ul className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <li
                    className="flex cursor-pointer select-none items-center justify-between rounded-xl px-2 py-2 active:bg-neutral-600"
                    key={item.title}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="rounded-xl bg-neutral-700 p-1">
                        {item.icon}
                      </div>
                      <span className="font-medium">
                        {item.title}
                        {item.serviceName && (
                          <span className="font-normal text-neutral-500 text-sm">
                            {` · ${item.serviceName}`}
                          </span>
                        )}
                      </span>
                    </div>
                    {item.badge && (
                      <div
                        className={`badge badge-${item.badgeColor} badge-sm py-2`}
                      >
                        {item.badge}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
