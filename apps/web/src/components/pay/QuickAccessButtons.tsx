export default function QuickAccessButtons() {
  return (
    <div className="join mb-6 w-full">
      <button
        className="btn join-item grow rounded-l-2xl border-neutral-700 bg-neutral-700"
        type="button"
      >
        주문내역
      </button>
      <button
        className="btn join-item grow border-neutral-700 bg-neutral-700"
        type="button"
      >
        기프티콘
      </button>
      <button
        className="btn join-item grow rounded-r-2xl border-neutral-700 bg-neutral-700"
        type="button"
      >
        쿠폰
      </button>
    </div>
  );
}
