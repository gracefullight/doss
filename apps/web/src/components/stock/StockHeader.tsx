"use client";

import {
  CalendarIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function StockHeader() {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 flex justify-end bg-neutral-800 px-4 pt-2">
      <button className="btn btn-square btn-ghost" title="검색" type="button">
        <MagnifyingGlassIcon className="w-6" />
      </button>
      <button className="btn btn-square btn-ghost" title="캘린더" type="button">
        <CalendarIcon className="w-6" />
      </button>
      <button
        className="btn btn-square btn-ghost"
        title="설정"
        type="button"
        onClick={() => router.push("/stock/setting")}
      >
        <Cog6ToothIcon className="w-6" />
      </button>
    </div>
  );
}
