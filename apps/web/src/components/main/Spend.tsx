import Section from "./Section";

export default function Spend() {
  return (
    <Section title="소비" link="/" hiddenLink>
      <ul className="flex flex-col">
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="placeholder avatar">
              <div className="bg-neutral-focus text-neutral-content w-10 rounded-full">
                <span>1</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-neutral-400">이번 달 쓴 금액</span>
              <span className="text-lg font-medium">1,000,000원</span>
            </div>
          </div>
          <button
            className="btn-sm btn border-none bg-neutral-700 focus:outline-none"
            type="button"
          >
            내역
          </button>
        </li>
        <div className="divider"></div>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="placeholder avatar">
              <div className="text-neutral-content w-10 rounded-lg bg-neutral-500">
                <span>1</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-neutral-400">
                이번 달 낼 카드값
              </span>
              <span className="text-lg font-medium">300,000원</span>
            </div>
          </div>
        </li>
      </ul>
    </Section>
  );
}
