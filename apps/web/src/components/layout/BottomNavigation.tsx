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

  const links = [
    { href: "/", label: "홈", Icon: <HomeIcon /> },
    { href: "/benefit", label: "혜택", Icon: <GemIcon /> },
    { href: "/pay", label: "도스페이", Icon: <ShoppingBagIcon /> },
    { href: "/stock", label: "주식", Icon: <TrendingUpIcon /> },
    { href: "/all", label: "전체", Icon: <MenuIcon /> },
  ];

  return (
    <div className="btm-nav z-50">
      {links.map((link) => (
        <button
          key={link.href}
          className={clsx(pathname === link.href && "active")}
          onClick={() => router.push(link.href)}
          type="button"
        >
          {link.Icon}
          <span className="btm-nav-label text-sm">{link.label}</span>
        </button>
      ))}
    </div>
  );
}
