import {
  ArchiveBoxArrowDownIcon,
  ArchiveBoxIcon,
  ArrowDownTrayIcon,
  ArrowPathRoundedSquareIcon,
  ArrowRightCircleIcon,
  BanknotesIcon,
  BellIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  CalculatorIcon,
  CameraIcon,
  ChartBarIcon,
  ChartPieIcon,
  ChatBubbleBottomCenterIcon,
  ChatBubbleLeftIcon,
  ChevronRightIcon,
  CircleStackIcon,
  ClockIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  DocumentArrowDownIcon,
  DocumentArrowUpIcon,
  DocumentChartBarIcon,
  DocumentCheckIcon,
  DocumentPlusIcon,
  DocumentTextIcon,
  EyeDropperIcon,
  FaceSmileIcon,
  GiftIcon,
  GlobeAltIcon,
  GlobeAsiaAustraliaIcon,
  HandRaisedIcon,
  HashtagIcon,
  HomeModernIcon,
  IdentificationIcon,
  LifebuoyIcon,
  LightBulbIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  MicrophoneIcon,
  NewspaperIcon,
  PaintBrushIcon,
  PaperAirplaneIcon,
  PhoneArrowDownLeftIcon,
  PhoneArrowUpRightIcon,
  QuestionMarkCircleIcon,
  QueueListIcon,
  ReceiptPercentIcon,
  ReceiptRefundIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  SparklesIcon,
  TableCellsIcon,
  TicketIcon,
  TruckIcon,
  UserGroupIcon,
  UsersIcon,
  VideoCameraIcon,
  ViewfinderCircleIcon,
  WalletIcon,
  WifiIcon,
} from "@heroicons/react/24/solid";
import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { Layout } from "~/components/layout";
import { PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";

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

  const sections: Section[] = [
    {
      sectionTitle: "최근",
      items: [
        {
          title: "만보기",
          icon: <SparklesIcon className="fill-info w-6" />,
        },
        {
          title: "R U Next? 응원하며 저금하기",
          serviceName: "도스뱅크",
          badge: "업데이트",
          badgeColor: "warning",
          icon: <HandRaisedIcon className="fill-primary w-6" />,
        },
        {
          title: "R U Next? 투표하기",
          icon: <MicrophoneIcon className="w-6" />,
        },
        {
          title: "자동납부",
          serviceName: "도스뱅크",
          icon: <DocumentPlusIcon className="fill-error-content w-6" />,
        },
        {
          title: "도스증권 주식 모으기",
          serviceName: "도스증권",
          icon: <ArchiveBoxArrowDownIcon className="w-6" />,
        },
      ],
    },
    {
      sectionTitle: "추천",
      items: [
        {
          title: "함께 도스켜고 포인트 받기",
          badge: "업데이트",
          badgeColor: "warning",
          icon: <MapPinIcon className="fill-primary w-6" />,
        },
        {
          title: "해외 결제하기",
          icon: <GlobeAltIcon className="fill-info-content w-6" />,
        },
        {
          title: "버튼 누르고 10원 받기",
          icon: <DocumentArrowDownIcon className="fill-info w-6" />,
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
          icon: <SparklesIcon className="fill-info w-6" />,
        },
        {
          title: "인터넷 바꾸고 혜택 받기",
          icon: <WifiIcon className="fill-info w-6" />,
        },
      ],
    },
    {
      sectionTitle: "자산",
      items: [
        {
          title: "내 자산",
          icon: <BanknotesIcon className="w-6" />,
        },
        {
          title: "투자 모아보기",
          icon: <ChartBarIcon className="fill-error w-6" />,
        },
        {
          title: "내 대출관리",
          icon: <QueueListIcon className="fill-warning w-6" />,
        },
        {
          title: "내 연금",
          icon: <QueueListIcon className="fill-success w-6" />,
        },
        {
          title: "부동산 시세",
          icon: <HomeModernIcon className="fill-success-content w-6" />,
        },
      ],
    },
    {
      sectionTitle: "소비",
      items: [
        {
          title: "소비 다이어리",
          icon: <FaceSmileIcon className="fill-warning w-6" />,
        },
        {
          title: "소비 태그",
          icon: <HashtagIcon className="fill-info w-6" />,
        },
        {
          title: "소비·수입 내역",
          icon: <CreditCardIcon className="fill-info-content w-6" />,
        },
        {
          title: "소비 분석",
          icon: <ChartPieIcon className="fill-info w-6" />,
        },
        {
          title: "카드값",
          icon: <CreditCardIcon className="w-6" />,
        },
        {
          title: "매달 나가는 돈",
          icon: <ReceiptRefundIcon className="w-6" />,
        },
      ],
    },
    {
      sectionTitle: "대출",
      items: [
        {
          title: "대출 갈아타기",
          icon: <ArrowPathRoundedSquareIcon className="fill-success w-6" />,
        },
        {
          title: "대출 받기",
          icon: <ArrowDownTrayIcon className="fill-success w-6" />,
        },
        {
          title: "도스뱅크 대출 받기",
          icon: <ArrowDownTrayIcon className="fill-info w-6" />,
          serviceName: "도스뱅크",
        },
        {
          title: "중고차 살 때 대출 알아보기",
          icon: <TruckIcon className="fill-success-content w-6" />,
          serviceName: "도스뱅크",
        },
        {
          title: "주택담보대출 찾기",
          icon: <BuildingOfficeIcon className="fill-success-content w-6" />,
        },
        {
          title: "카드론 받기",
          icon: <CreditCardIcon className="fill-success w-6" />,
        },
        {
          title: "대출 이자 계산기",
          icon: <CalculatorIcon className="w-6" />,
        },
        {
          title: "아파트 대출한도 계산기",
          icon: <BuildingOfficeIcon className="w-6" />,
        },
      ],
    },
    {
      sectionTitle: "결제",
      items: [
        {
          title: "내 도스페이",
          icon: <CurrencyDollarIcon className="fill-info w-6" />,
        },
        {
          title: "도스 기프티콘",
          icon: <TicketIcon className="fill-info w-6" />,
        },
        {
          title: "도스 공동구매",
          icon: <UsersIcon className="fill-error-content w-6" />,
        },
        {
          title: "후불결제",
          icon: <WalletIcon className="w-6" />,
        },
        {
          title: "해외 결제하기",
          icon: <GlobeAltIcon className="fill-info-content w-6" />,
        },
        {
          title: "결제할 때 할인받기",
          icon: <ReceiptPercentIcon className="fill-info w-6" />,
        },
        {
          title: "현장결제",
          icon: <CommandLineIcon className="w-6" />,
        },
        {
          title: "지역사랑상품권",
          icon: <TicketIcon className="fill-warning w-6" />,
        },
      ],
    },
    {
      sectionTitle: "보험",
      items: [
        {
          title: "내 보험 상담하기",
          icon: <ChatBubbleLeftIcon className="fill-info-content w-6" />,
        },
        {
          title: "내 보험",
          icon: <ShieldCheckIcon className="w-6" />,
        },
        {
          title: "보험 전문가에게 물어보기",
          icon: <ChatBubbleBottomCenterIcon className="fill-info w-6" />,
        },
        {
          title: "병원비 돌려받기",
          icon: <BuildingOfficeIcon className="fill-success w-6" />,
        },
        {
          title: "보험 둘러보기",
          icon: <ShieldExclamationIcon className="fill-info w-6" />,
        },
        {
          title: "해외 여행자 보험",
          icon: <GlobeAsiaAustraliaIcon className="fill-info-content w-6" />,
        },
      ],
    },
    {
      sectionTitle: "송금",
      items: [
        {
          title: "송금",
          icon: <PaperAirplaneIcon className="fill-info w-6" />,
        },
        {
          title: "더치페이",
          icon: <UserGroupIcon className="fill-info w-6" />,
        },
        {
          title: "내 도스아이디",
          icon: <IdentificationIcon className="fill-info-content w-6" />,
        },
        {
          title: "사진으로 송금",
          icon: <CameraIcon className="w-6" />,
        },
        {
          title: "자동이체",
          icon: <DocumentCheckIcon className="fill-error-content w-6" />,
        },
        {
          title: "ATM에서 출금하기",
          icon: <BanknotesIcon className="fill-success w-6" />,
        },
      ],
    },
    {
      sectionTitle: "신용",
      items: [
        {
          title: "내 신용점수",
          icon: <ViewfinderCircleIcon className="fill-info w-6" />,
        },
        {
          title: "신용점수 올리기",
          icon: <DocumentArrowUpIcon className="fill-info w-6" />,
        },
      ],
    },
    {
      sectionTitle: "계좌",
      items: [
        {
          title: "입출금·예적금·주식 계좌 개설",
          icon: <TableCellsIcon className="fill-info-content w-6" />,
        },
        {
          title: "혜택 좋은 주식계좌 만들기",
          icon: <TableCellsIcon className="fill-error-content w-6" />,
        },
        {
          title: "숨은 내 돈 찾기",
          icon: <TableCellsIcon className="w-6" />,
        },
        {
          title: "먼저 이자 받는 정기예금 만들기",
          icon: <CircleStackIcon className="fill-success w-6" />,
          serviceName: "도스뱅크",
        },
        {
          title: "키워봐요 만들기",
          icon: <CircleStackIcon className="fill-success-content w-6" />,
          serviceName: "도스뱅크",
        },
        {
          title: "모임통장 만들기",
          icon: <UsersIcon className="fill-success w-6" />,
          serviceName: "도스뱅크",
        },
      ],
    },
    {
      sectionTitle: "카드",
      items: [
        {
          title: "인기있는 신용카드 만들기",
          icon: <CreditCardIcon className="fill-primary w-6" />,
        },
        {
          title: "인기있는 체크카드 만들기",
          icon: <CreditCardIcon className="fill-primary w-6" />,
        },
        {
          title: "모임카드 만들기",
          icon: <CreditCardIcon className="fill-success w-6" />,
        },
        {
          title: "한도 높은 신용카드 찾기",
          icon: <CreditCardIcon className="fill-primary w-6" />,
        },
        {
          title: "카드 알림 받기",
          icon: <CreditCardIcon className="fill-info w-6" />,
        },
        {
          title: "도스신용카드 만들기 ",
          icon: <CreditCardIcon className="fill-info w-6" />,
        },
      ],
    },
    {
      sectionTitle: "주식",
      items: [
        {
          title: "도스증권 주식 모으기",
          icon: <ArchiveBoxArrowDownIcon className="w-6" />,
        },
        {
          title: "도스증권 주식 선물하기",
          icon: <GiftIcon className="fill-error w-6" />,
        },
      ],
    },
    {
      sectionTitle: "주민센터",
      items: [
        {
          title: "증명서 발급하기",
          icon: <DocumentTextIcon className="w-6" />,
        },
        {
          title: "내 공공 알림",
          icon: <BuildingLibraryIcon className="fill-success-content w-6" />,
        },
        {
          title: "숨은 정부지원금 찾기",
          icon: <BuildingLibraryIcon className="fill-primary w-6" />,
        },
        {
          title: "정치후원금 보내기",
          icon: <BuildingLibraryIcon className="fill-info-content w-6" />,
        },
      ],
    },
    {
      sectionTitle: "개인정보와 보안",
      items: [
        {
          title: "가족 보안 알리미",
          icon: <UserGroupIcon className="fill-primary w-6" />,
        },
        {
          title: "개인정보 안심리포트",
          icon: <DocumentCheckIcon className="fill-info-content w-6" />,
        },
      ],
    },
    {
      sectionTitle: "납부",
      items: [
        {
          title: "자동납부",
          serviceName: "도스뱅크",
          icon: <DocumentPlusIcon className="fill-error-content w-6" />,
        },
        {
          title: "통신요금 내기",
          icon: <DevicePhoneMobileIcon className="fill-info w-6" />,
        },
        {
          title: "서울시 수도요금 내기",
          icon: <EyeDropperIcon className="fill-info w-6" />,
        },
        {
          title: "서울시 세입금 내기",
          icon: <EyeDropperIcon className="fill-error w-6" />,
        },
        {
          title: "내 아파트 관리비",
          icon: <BuildingOfficeIcon className="fill-success-content w-6" />,
        },
      ],
    },
    {
      sectionTitle: "포인트",
      items: [
        {
          title: "내 포인트",
          icon: <CurrencyDollarIcon className="fill-info w-6" />,
        },
        {
          title: "초대코드 입력하기",
          icon: <CodeBracketIcon className="fill-warning w-6" />,
        },
        {
          title: "이번주 미션",
          icon: <ArrowRightCircleIcon className="fill-error w-6" />,
        },
        {
          title: "행운퀴즈",
          icon: <QuestionMarkCircleIcon className="fill-info w-6" />,
        },
        {
          title: "머니알림",
          icon: <BellIcon className="fill-warning w-6" />,
        },
        {
          title: "버튼 누르고 10원 받기",
          icon: <DocumentArrowDownIcon className="fill-info w-6" />,
        },
        {
          title: "라이브 쇼핑 보기",
          icon: <VideoCameraIcon className="fill-error w-6" />,
        },
      ],
    },
    {
      sectionTitle: "편의",
      items: [
        {
          title: "R U Next? 투표하기",
          icon: <MicrophoneIcon className="w-6" />,
        },
        {
          title: "편의점 택배 예약하기",
          icon: <ArchiveBoxIcon className="fill-warning w-6" />,
        },
        {
          title: "주택 청약 공고",
          icon: <HomeModernIcon className="fill-success w-6" />,
        },
        {
          title: "만보기",
          icon: <SparklesIcon className="fill-info w-6" />,
        },
        {
          title: "약 알림 받기",
          icon: <ClockIcon className="fill-error w-6" />,
        },
        {
          title: "환전",
          icon: <CurrencyDollarIcon className="w-6" />,
        },
        {
          title: "오늘의 머니 팁",
          icon: <LightBulbIcon className="fill-warning w-6" />,
        },
        {
          title: "공모주 청약 일정",
          icon: <DocumentCheckIcon className="fill-error-content w-6" />,
        },
        {
          title: "오늘의 운세 사전신청",
          icon: <LifebuoyIcon className="fill-info w-6" />,
          badge: "새로 나온",
          badgeColor: "error",
        },
      ],
    },
    {
      sectionTitle: "사장님",
      items: [
        {
          title: "내 매출 장부",
          icon: <DocumentTextIcon className="fill-error-content w-6" />,
        },
        {
          title: "도스뱅크 사장님 대출받기",
          icon: <ArrowDownTrayIcon className="fill-info w-6" />,
        },
        {
          title: "배달 매출 늘리기",
          icon: <TruckIcon className="fill-success w-6" />,
        },
        {
          title: "급여명세서 보내기",
          icon: <DocumentTextIcon className="fill-warning w-6" />,
        },
        {
          title: "세금계산서 알림 받기",
          icon: <DocumentTextIcon className="w-6" />,
        },
        {
          title: "사장님을 위한 퇴직금 노란우산공제",
          icon: <PaintBrushIcon className="fill-warning w-6" />,
          serviceName: "도스뱅크",
        },
      ],
    },
    {
      sectionTitle: "자동차",
      items: [
        {
          title: "자동차 검사 예약",
          icon: <TruckIcon className="fill-info w-6" />,
        },
        {
          title: "자동차 보험 갱신 알림 받기",
          icon: <TruckIcon className="w-6" />,
        },
        {
          title: "바로 받는 장기렌터카 찾기",
          icon: <TruckIcon className="fill-info-content w-6" />,
        },
        {
          title: "차 시세",
          icon: <TruckIcon className="fill-success w-6" />,
        },
        {
          title: "차 보험료 조회",
          icon: <TruckIcon className="fill-success-content w-6" />,
        },
        {
          title: "차 팔기",
          icon: <TruckIcon className="fill-warning w-6" />,
        },
      ],
    },
    {
      sectionTitle: "투자",
      items: [
        {
          title: "조각투자 모아보기",
          icon: <DocumentChartBarIcon className="fill-error-content w-6" />,
        },
      ],
    },
    {
      sectionTitle: "도움말",
      items: [
        {
          title: "도스계정 통합 서비스",
          icon: <IdentificationIcon className="fill-info w-6" />,
        },
        {
          title: "24시간 고객센터",
          icon: <PhoneArrowUpRightIcon className="fill-info w-6" />,
        },
        {
          title: "도스 새소식",
          icon: <NewspaperIcon className="fill-warning w-6" />,
        },
      ],
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
      <div className="flex w-screen flex-col px-4 pt-4">
        <div className="px-2">
          <div className="sticky top-0 z-50 flex justify-end">
            <button
              className="btn btn-square btn-ghost"
              title="검색"
              type="button"
            >
              <MagnifyingGlassIcon className="w-6" />
            </button>
            <button
              className="btn btn-square btn-ghost"
              title="설정"
              type="button"
            >
              <Cog6ToothIcon className="w-6" />
            </button>
          </div>
          <div className="mb-4 flex items-center gap-4">
            <h1 className="text-2xl font-bold text-neutral-200">전체</h1>
          </div>
          <div className="flex justify-between gap-2 py-2">
            {items.map((item) => (
              <div
                className="flex cursor-pointer select-none flex-col items-center justify-center gap-1 rounded-2xl bg-neutral-700 px-6 py-4 active:bg-neutral-600"
                key={item.title}
                onClick={() => void handleLink(item.link)}
              >
                <item.Icon className={`w-6 fill-${item.color}`} />
                <span className="text-sm text-neutral-200">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-4">
          <ul className="flex flex-col gap-2">
            <li className="a flex cursor-pointer select-none items-center justify-between rounded-xl px-2 py-2 active:bg-neutral-600">
              <div className="flex items-center space-x-3">
                <LockClosedIcon className="fill-info w-6" />
                <div className="flex flex-col">
                  <span className="font-medium">보안과 인증</span>
                </div>
              </div>
              <ChevronRightIcon className="w-4" />
            </li>
            <li className="a flex cursor-pointer select-none items-center justify-between rounded-xl px-2 py-2 active:bg-neutral-600">
              <div className="flex items-center space-x-3">
                <ViewfinderCircleIcon className="fill-info w-6" />
                <div className="flex flex-col">
                  <span className="font-medium">내 신용점수</span>
                </div>
              </div>
              <ChevronRightIcon className="w-4" />
            </li>
            <li className="flex cursor-pointer select-none items-center justify-between rounded-xl px-2 py-2 active:bg-neutral-600">
              <div className="flex items-center space-x-3">
                <GiftIcon className="fill-error w-6" />
                <div className="flex flex-col">
                  <span className="font-medium">진행중인 이벤트</span>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="font-medium">9개</span>
                <ChevronRightIcon className="w-4" />
              </div>
            </li>
          </ul>
          <div className="divider px-2"></div>
          <div className="flex flex-col gap-6">
            {sections.map((section) => (
              <div key={section.sectionTitle}>
                <div className="px-2 pb-4 text-lg font-medium">
                  {section.sectionTitle}
                </div>
                <ul className="flex flex-col gap-2">
                  {section.items.map((item) => (
                    <li
                      className="flex cursor-pointer select-none items-center justify-between rounded-xl px-2 py-2 active:bg-neutral-600"
                      key={item.title}
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <div className="flex items-center gap-1">
                          <span className="font-medium">{item.title}</span>
                          {item.serviceName && (
                            <span className="text-sm text-neutral-500">
                              {`· ${item.serviceName}`}
                            </span>
                          )}
                        </div>
                      </div>
                      {item.badge && (
                        <div
                          className={`badge badge-${item.badgeColor} badge-sm badge-outline py-2`}
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
