export default function BankLinks() {
  return (
    <div className="join flex w-full rounded-xl">
      <button
        className="btn join-item flex-1 border-none bg-neutral-800"
        type="button"
      >
        계좌개설
      </button>
      <button
        className="btn join-item flex-1 border-none bg-neutral-800"
        type="button"
      >
        카드발급
      </button>
      <button
        className="btn join-item flex-1 border-none bg-neutral-800"
        type="button"
      >
        대출받기
      </button>
    </div>
  );
}
