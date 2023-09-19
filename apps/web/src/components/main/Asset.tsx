import { useRouter } from "next/router";
import type { SyntheticEvent } from "react";
import { formatNumber } from "~/utils/number";
import Section from "./Section";

export default function Asset() {
  const router = useRouter();
  const items = [
    { title: "도스뱅크 통장", amount: 5000000, isBank: true },
    { title: "입출금통장", amount: 100000000, isBank: true },
    { title: "저축·주택청약 종합저축", amount: 10000000, isBank: false },
    {
      title: "포인트·머니",
      amount: 400,
      isBank: false,
      link: "/benefit/point",
    },
  ];

  const handleTransfer = async (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    await router.push("/bank/transfer");
  };

  const handleLink = async (link?: string) => {
    if (link) {
      await router.push(link);
    }
  };

  return (
    <Section title="자산" link="/">
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex cursor-pointer select-none items-center justify-between rounded-xl p-2 active:bg-neutral-600"
            onClick={() => void handleLink(item.link)}
          >
            <div className="flex items-center space-x-3">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content w-10 rounded-full">
                  <span>1</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-neutral-400">{item.title}</span>
                <span className="text-lg font-medium">
                  {formatNumber(item.amount)}원
                </span>
              </div>
            </div>
            {item.isBank && (
              <button
                className="btn btn-sm border-none bg-neutral-700 focus:outline-none"
                type="button"
                onClick={handleTransfer}
              >
                송금
              </button>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
