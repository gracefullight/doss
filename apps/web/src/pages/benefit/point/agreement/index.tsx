import type { GetServerSidePropsContext } from "next";
import { StackLayout } from "~/components/layout";
import { PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";

export default function PointAgreement() {
  return (
    <StackLayout>
      <div className="flex flex-col gap-8 px-5">
        <h1 className="text-2xl text-neutral-100">
          안내
          <br />
          2023.09.19
        </h1>
        <div className="flex flex-col">
          <h2 className="text-lg text-neutral-200">포인트란?</h2>
          <ul className="mt-4 flex list-disc flex-col gap-2 px-4">
            <li>1포인트는 1원과 동일한 가치를 가집니다.</li>
            <li>포인트는 타인에게 양도 불가합니다.</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg text-neutral-200">포인트의 사용</h2>
          <ul className="mt-4 flex list-disc flex-col gap-2 px-4">
            <li>포인트는 1원 단위로 사용할 수 있습니다.</li>
            <li>
              일부 가맹점의 경우, 해당 가맹점의 매출 특성이나 정책에 따라 포인트
              사용이 제한될 수 있습니다.
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg text-neutral-200">포인트 출금</h2>
          <ul className="mt-4 flex list-disc flex-col gap-2 px-4">
            <li>
              도스페이 결제에 도스포인트를 활용하는 경우 수수료가 부과되지
              않습니다.
            </li>
            <li>
              출금수수료 무료 혜택을 제공하는 서비스의 경우 해당 서비스의 안내를
              따릅니다.
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg text-neutral-200">포인트 유효기간 및 소멸</h2>
          <ul className="mt-4 flex list-disc flex-col gap-2 px-4">
            <li>포인트 유효기간은 적립일로부터 5년입니다.</li>
            <li>
              단, 회원탈퇴 시, 해당 회원이 보유한 포인트는 즉시 소멸되며,
              서비스에 재가입하더라도 소멸된 포인트는 복구되지 않습니다.
            </li>
          </ul>
        </div>
      </div>
    </StackLayout>
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
