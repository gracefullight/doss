import {
  ArchiveBoxArrowDownIcon,
  BanknotesIcon,
  ChartBarIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  DocumentArrowDownIcon,
  GiftIcon,
  GlobeAltIcon,
  HandRaisedIcon,
  HomeModernIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  MicrophoneIcon,
  PhoneArrowDownLeftIcon,
  QueueListIcon,
  ReceiptPercentIcon,
  SparklesIcon,
  ViewfinderCircleIcon,
  WifiIcon,
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
              className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-2xl bg-neutral-700 px-6 py-4 active:bg-neutral-600"
              key={item.title}
              onClick={() => void handleLink(item.link)}
            >
              <item.Icon className={`w-6 fill-${item.color}`} />
              <span className="text-sm text-neutral-200">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="pt-4">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <LockClosedIcon className="fill-info w-6" />
                <div className="flex flex-col">
                  <span className="font-medium">보안과 인증</span>
                </div>
              </div>
              <ChevronRightIcon className="w-4" />
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ViewfinderCircleIcon className="fill-info w-6" />
                <div className="flex flex-col">
                  <span className="font-medium">내 신용점수</span>
                </div>
              </div>
              <ChevronRightIcon className="w-4" />
            </li>
            <li className="flex items-center justify-between">
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
          <div className="divider"></div>
          <div className="flex flex-col gap-6">
            <div>
              <div className="pb-4 text-lg font-medium">최근</div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <SparklesIcon className="fill-info w-6" />
                    <div className="flex flex-col">
                      <span className="font-medium">만보기</span>
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <HandRaisedIcon className="fill-primary w-6" />
                    <div className="flex items-center gap-1">
                      <span className="font-medium">
                        R U Next? 응원하며 저금하기
                      </span>
                      <span className="text-sm text-neutral-500">
                        · 도스뱅크
                      </span>
                    </div>
                  </div>
                  <div className="badge badge-primary badge-sm badge-outline py-2">
                    업데이트
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MicrophoneIcon className="w-6" />
                    <div className="flex items-center gap-1">
                      <span className="font-medium">R U Next? 투표하기</span>
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <ReceiptPercentIcon className="w-6" />
                    <div className="flex items-center gap-1">
                      <span className="font-medium">자동납부</span>
                      <span className="text-sm text-neutral-500">
                        · 도스뱅크
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <ArchiveBoxArrowDownIcon className="w-6" />
                    <div className="flex items-center gap-1">
                      <span className="font-medium">도스증권 주식 모으기</span>
                      <span className="text-sm text-neutral-500">
                        · 도스증권
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="pb-4 text-lg font-medium">추천</div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="fill-primary w-6" />
                    <div className="flex items-center gap-1">
                      <span className="font-medium">
                        함께 도스켜고 포인트 받기
                      </span>
                    </div>
                  </div>
                  <div className="badge badge-primary badge-sm badge-outline py-2">
                    업데이트
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <GlobeAltIcon className="fill-info w-6" />
                    <div className="flex flex-col">
                      <span className="font-medium">해외 결제하기</span>
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <DocumentArrowDownIcon className="fill-info w-6" />
                    <div className="flex flex-col">
                      <span className="font-medium">버튼 누르고 10원 받기</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="pb-4 text-lg font-medium">통신</div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <SparklesIcon className="fill-info w-6" />
                    <div className="flex flex-col">
                      <span className="font-medium">
                        만보기 10배 받는 요금제
                      </span>
                    </div>
                  </div>
                  <div className="badge badge-info badge-sm badge-outline py-2">
                    이벤트
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <WifiIcon className="fill-info w-6" />
                    <div className="flex flex-col">
                      <span className="font-medium">
                        인터넷 바꾸고 혜택 받기
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="pb-4 text-lg font-medium">자산</div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <BanknotesIcon className="w-6" />
                    <div className="flex flex-col">
                      <span className="font-medium">내 자산</span>
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <ChartBarIcon className="fill-error w-6" />
                    <div className="flex flex-col">
                      <span className="font-medium">투자 모아보기</span>
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <QueueListIcon className="fill-warning w-6" />
                    <div className="flex flex-col">
                      <span className="font-medium">내 대출관리</span>
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <QueueListIcon className="fill-success w-6" />
                    <div className="flex flex-col">
                      <span className="font-medium">내 연금</span>
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <HomeModernIcon className="fill-success-content w-6" />
                    <div className="flex flex-col">
                      <span className="font-medium">부동산 시세</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
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
