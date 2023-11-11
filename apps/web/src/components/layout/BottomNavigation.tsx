"use client";

import {
  Bars3Icon,
  ChartBarIcon,
  CurrencyDollarIcon,
  GiftIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

export default function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const links = [
    { href: "/", label: "홈", Icon: HomeIcon },
    { href: "/benefit", label: "혜택", Icon: GiftIcon },
    { href: "/pay", label: "도스페이", Icon: CurrencyDollarIcon },
    { href: "/stock", label: "주식", Icon: ChartBarIcon },
    { href: "/all", label: "전체", Icon: Bars3Icon },
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
          <link.Icon className="w-6" />
          <span className="btm-nav-label text-sm">{link.label}</span>
        </button>
      ))}
    </div>
  );
}
