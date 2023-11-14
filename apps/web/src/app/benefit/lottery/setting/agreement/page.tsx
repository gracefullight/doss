import { CloverIcon, DollarSignIcon } from "lucide-react";
import { StackLayout, StackLayoutNavbar } from "~/components/layout";

export default function LotteryAgreement() {
  return (
    <StackLayout>
      <StackLayoutNavbar isLightBackground />
      <div className="flex flex-col">
        <div className="flex items-center justify-center bg-neutral-200 py-4">
          <CloverIcon name="clover" className="text-green-500" size={240} />
        </div>
        <div className="flex flex-col gap-4 bg-neutral-800 px-5 pb-10 pt-5">
          <h1 className="text-2xl font-bold text-neutral-200">
            100% 당첨되는
            <br />
            행운 복권을 받아보세요
          </h1>
          <div className="flex flex-row gap-2">
            <CloverIcon name="clover" className="text-green-500" size={16} />
            <span className="font-medium text-neutral-200">
              매일 아침, 행운 복권이 전달돼요
            </span>
          </div>
          <div className="flex flex-row gap-2">
            <DollarSignIcon
              name="dollar-sign"
              className="text-blue-500"
              size={16}
            />
            <span className="font-medium text-neutral-200">
              복권을 긁으면 100% 포인트를 드려요
            </span>
          </div>
        </div>
        <div className="flex flex-col p-5">
          <h2 className="font-medium text-neutral-200">꼭 알아두세요</h2>
          <ul className="mt-2 flex list-disc flex-col gap-2 pl-4 text-sm">
            <li>이 서비스는 만 14세 이상인 분만 쓸 수 있어요.</li>
            <li>복권 당첨금은 하루에 1번, 도스 포인트로 받을 수 있어요.</li>
            <li>행운복권 알림은 원하는 시간으로 설정할 수 있어요.</li>
            <li>
              시간을 바꾸고 싶다면, 행운복권 화면 [설정]에서 다시 설정할 수
              있어요.
            </li>
            <li>
              적절하지 않은 방법으로 서비스를 사용했다고 회사가 판단할 때,
              이용이 제한될 수 있어요.
            </li>
          </ul>
        </div>
      </div>
    </StackLayout>
  );
}
