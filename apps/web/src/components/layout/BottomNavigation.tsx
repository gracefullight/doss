"use client";

import clsx from "clsx";
import {
  GemIcon,
  HomeIcon,
  MenuIcon,
  ShoppingBagIcon,
  TrendingUpIcon,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const bottomNavigationItems = [
    { href: "/", label: "홈", IconComponent: <HomeIcon /> },
    { href: "/benefit", label: "혜택", IconComponent: <GemIcon /> },
    { href: "/pay", label: "도스페이", IconComponent: <ShoppingBagIcon /> },
    { href: "/stock", label: "주식", IconComponent: <TrendingUpIcon /> },
    { href: "/all", label: "전체", IconComponent: <MenuIcon /> },
  ];

  return (
    <div className="btm-nav z-50">
      {bottomNavigationItems.map((nav) => (
        <button
          key={nav.href}
          className={clsx(pathname === nav.href && "active")}
          onClick={() => router.push(nav.href)}
          type="button"
        >
          {nav.IconComponent}
          <span className="btm-nav-label text-sm">{nav.label}</span>
        </button>
      ))}
    </div>
  );
}
