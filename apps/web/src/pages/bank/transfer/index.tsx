import { CameraIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  TransferContact,
  TransferMyAccounts,
  TransferRecentAccounts,
} from "~/components/bank/transfer";
import { StackLayout } from "~/components/layout";
import { PATH_SIGNIN } from "~/constants";
import { getServerAuthSession } from "~/server/auth";

export default function BankTransfer() {
  const [tabIndex, setTabIndex] = useState(0);
  const router = useRouter();

  const handleFindAccount = async () => {
    await router.push("/bank/transfer/find-account");
  };

  return (
    <StackLayout>
      <div className="flex flex-col px-6">
        <h1 className="text-2xl font-bold text-neutral-300">
          어디로 돈을 보낼까요?
        </h1>
        <div className="tabs tabs-boxed mt-4 w-full">
          <a
            className={clsx(`tab w-1/2`, tabIndex === 0 && "tab-active")}
            onClick={() => setTabIndex(0)}
          >
            계좌
          </a>
          <a
            className={clsx(`tab w-1/2`, tabIndex === 1 && "tab-active")}
            onClick={() => setTabIndex(1)}
          >
            연락처
          </a>
        </div>
        {tabIndex === 0 && (
          <>
            <div className="mt-4 flex items-center gap-1">
              <input
                type="text"
                placeholder="계좌번호 입력"
                className="input input-bordered w-full cursor-pointer"
                readOnly
                onClick={() => void handleFindAccount()}
              />
              <button
                className="btn btn-ghost btn-sm btn-square"
                type="button"
                title="계좌번호 또는 QR코드 촬영"
              >
                <CameraIcon className="w-6" />
              </button>
            </div>
            <TransferMyAccounts />
            <TransferRecentAccounts />
          </>
        )}
        {tabIndex === 1 && <TransferContact />}
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
