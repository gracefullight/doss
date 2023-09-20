import { ChartPieIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { PATH_INVESTMENT_CONNECT } from "~/constants";

export default function ConnectNudgeFooter() {
  const router = useRouter();
  const handleConnect = async () => {
    await router.push(PATH_INVESTMENT_CONNECT);
  };

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <ChartPieIcon className="fill-info w-6" />
      <div className="mt-4 text-center text-neutral-300">
        다른 증권사도 쓴다면 연결해보세요
        <br />한 번에 모아 볼 수 있어요
      </div>
      <button
        className="btn btn-info btn-sm mt-2"
        type="button"
        onClick={handleConnect}
      >
        한 번에 모아보기
      </button>
    </div>
  );
}
