import Image from "next/image";
import Section from "./Section";

export default function Stock() {
  return (
    <Section title="투자" link="/stock/investment">
      <div className="flex flex-col gap-2">
        <div className="flex cursor-pointer select-none items-center justify-between rounded-xl p-2 active:bg-neutral-600">
          <div className="flex items-center space-x-3">
            <div className="placeholder avatar">
              <div className="h-10 w-10 rounded-full">
                <Image
                  src="https://placehold.co/100x100?text=stock"
                  alt="thumbnail"
                  loading="lazy"
                  decoding="async"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-neutral-400">주식</span>
              <div className="flex flex-row space-x-2">
                <span className="text-lg font-medium">20,000,000원</span>
                <span className="text-error text-lg font-medium">+10.1%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
