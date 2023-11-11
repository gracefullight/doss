import { StackLayout, StackLayoutNavbar } from "~/components/layout";

export default function PointBrand() {
  return (
    <StackLayout>
      <StackLayoutNavbar />
      <div className="flex flex-col gap-4 px-5">
        <h1 className="text-xl text-neutral-300">포인트를 쓸 수 있는 브랜드</h1>
        <input
          type="text"
          placeholder="검색"
          className="input w-full bg-neutral-700"
        />
      </div>
    </StackLayout>
  );
}
