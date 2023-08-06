import { useSession } from "next-auth/react";

export default function GroupShoppingRecommended() {
  const { data: session } = useSession();
  return (
    <div className="mt-4 flex flex-col">
      <div className="px-6">
        <h2 className="text-xl font-medium text-neutral-200">{`${session?.user.name}님을 위한 추천`}</h2>
        <div className="">상품 영역 2x8</div>
      </div>
      <div className="divider mb-0"></div>
      <div className="btn btn-block btn-ghost py-2">상품 더 보기</div>
    </div>
  );
}
