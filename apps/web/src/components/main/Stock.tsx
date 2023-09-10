import Section from "./Section";

export default function Stock() {
  return (
    <Section title="투자" link="/stock/investment">
      <ul className="flex flex-col gap-6">
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="placeholder avatar">
              <div className="bg-neutral-focus text-neutral-content w-10 rounded-full">
                <span>1</span>
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
        </li>
      </ul>
    </Section>
  );
}
