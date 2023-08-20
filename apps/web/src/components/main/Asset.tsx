import { useRouter } from "next/router";
import { formatNumber } from "~/utils/number";
import Section from "./Section";

export default function Asset() {
  const router = useRouter();
  const items = [
    { title: "도스뱅크 통장", amount: 5000000, isBank: true },
    { title: "입출금통장", amount: 100000000, isBank: true },
    { title: "저축·주택청약 종합저축", amount: 10000000, isBank: false },
    { title: "포인트·머니", amount: 400, isBank: false },
  ];

  const handleTransfer = async () => {
    await router.push("/bank/transfer");
  };

  return (
    <Section title="자산" link="/">
      <ul className="flex flex-col gap-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-between">
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
                onClick={() => void handleTransfer()}
              >
                송금
              </button>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
