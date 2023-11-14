"use client";

import { MenuIcon, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function StockHeader() {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 flex justify-end bg-neutral-800 px-4 pt-2">
      <button className="btn btn-square btn-ghost" title="검색" type="button">
        <SearchIcon name="search" size={24} />
      </button>
      <button
        className="btn btn-square btn-ghost"
        title="설정"
        type="button"
        onClick={() => router.push("/stock/setting")}
      >
        <MenuIcon name="menu" size={24} />
      </button>
    </div>
  );
}
