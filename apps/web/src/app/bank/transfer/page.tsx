"use client";

import clsx from "clsx";
import { CameraIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  TransferContact,
  TransferMyAccounts,
  TransferRecentAccounts,
} from "~/components/bank/transfer";
import { StackLayout, StackLayoutNavbar } from "~/components/layout";

export default function BankTransfer() {
  const [tabIndex, setTabIndex] = useState(0);
  const router = useRouter();

  const handleFindAccount = () => {
    router.push("/bank/transfer/find-account");
  };

  return (
    <StackLayout>
      <StackLayoutNavbar />
      <div className="flex flex-col px-6">
        <h1 className="font-bold text-2xl text-neutral-300">
          어디로 돈을 보낼까요?
        </h1>
        <div className="tabs tabs-boxed mt-4 bg-neutral-700">
          <a
            className={clsx("tab", tabIndex === 0 && "tab-active")}
            onClick={() => setTabIndex(0)}
          >
            계좌
          </a>
          <a
            className={clsx("tab", tabIndex === 1 && "tab-active")}
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
                <CameraIcon name="camera" size={24} />
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
