"use client";

import { useId, useState } from "react";
import { StackLayout, StackLayoutNavbar } from "~/components/layout";

export default function BankTransferFindAccount() {
  const [accountNumber, setAccountNumber] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const accountLabelId = useId();

  const bankItems = [
    { name: "NH 농협", code: "NH" },
    { name: "카카오뱅크", code: "KAKAO" },
    { name: "KB국민", code: "KB" },
    { name: "신한", code: "SHINHAN" },
    { name: "도스뱅크", code: "DOS" },
    { name: "우리", code: "WOORI" },
  ];

  return (
    <StackLayout>
      <StackLayoutNavbar />
      <div className="flex flex-col gap-6 px-6">
        <h1 className="mt-4 font-bold text-2xl text-neutral-300">
          어떤 계좌로 보낼까요?
        </h1>
        <input
          id={accountLabelId}
          type="text"
          placeholder="계좌번호 입력"
          className="input input-bordered w-full"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          pattern="\d{8,}"
          title="8자리 이상의 숫자만 입력 가능합니다."
        />
        <div className="form-control w-full">
          <select
            className="select select-bordered"
            title="은행 선택"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
          >
            <option disabled value="">
              은행 선택
            </option>
            {bankItems.map((bank) => (
              <option key={bank.code} value={bank.code}>
                {bank.name}
              </option>
            ))}
          </select>
          <label className="label" htmlFor={accountLabelId}>
            <span className="label-text-alt text-neutral-400">
              계좌번호를 입력하면 은행을 찾아드릴게요.
            </span>
          </label>
        </div>
      </div>
      {accountNumber && selectedBank && (
        <div className="fixed bottom-0 z-50 w-full px-4 pb-4">
          <button className="btn btn-block btn-info" type="submit">
            확인
          </button>
        </div>
      )}
    </StackLayout>
  );
}
