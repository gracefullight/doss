import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { CoupangCircle } from "~/components/benefit";
import { StackLayout, StackLayoutNavbar } from "~/components/layout";

export const metadata = {
  title: "Doss | 혜택 | 쿠팡",
};

export default function BenefitCoupang() {
  return (
    <StackLayout>
      <StackLayoutNavbar />
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
            <CheckCircleIcon className="fill-success w-6" />
            <span className="text-neutral-400">오늘은 이미 10원 받았어요.</span>
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
        <div className="btn btn-info btn-lg btn-block rounded-2xl">
          <Link href="https://link.coupang.com/a/4Fw2T" target="_blank">
            인기 상품 구경가기
          </Link>
        </div>
      </div>
    </StackLayout>
  );
}
