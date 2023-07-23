import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import { CoupangCircle } from "~/components/benefit";
import { StackLayout } from "~/components/layout";

export default function BenefitCoupang() {
  const handleCoupang = () => {
    // TODO: click log
    window.open("https://link.coupang.com/a/4Fw2T");
  };

  return (
    <>
      <Head>
        <title>Doss | 혜택 | 쿠팡</title>
      </Head>
      <StackLayout>
        <div className="flex flex-col px-6">
          <div className="text-sm text-neutral-400">
            오늘은 이미 포인트를 받았어요
          </div>
          <div className="pt-2 text-lg font-medium text-neutral-200">
            쿠팡 로켓배송
            <br />
            인기 상품 구경해볼까요?
          </div>
          <div className="flex items-center justify-center pt-12">
            <CoupangCircle />
          </div>
          <div className="flex flex-col gap-4 pt-6">
            <div className="flex gap-2">
              <CheckCircleIcon className="w-6 fill-success" />
              <span className="text-neutral-400">
                오늘은 이미 10원 받았어요.
              </span>
            </div>
            <div className="flex gap-2">
              <ClockIcon className="w-6" />
              <span className="text-neutral-400">
                12시가 되면 다시 받을 수 있어요.
              </span>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 z-50 flex w-full px-4 py-4">
          <div
            className="btn btn-info btn-lg btn-block rounded-2xl"
            onClick={handleCoupang}
          >
            인기 상품 구경가기
          </div>
        </div>
      </StackLayout>
    </>
  );
}
