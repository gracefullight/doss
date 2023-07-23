import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import type { PropsWithChildren } from "react";

export interface StackLayoutNavbarItem {
  title: string;
  link: string;
}

interface StackLayoutProps {
  items?: StackLayoutNavbarItem[];
}

export default function StackLayout({
  children,
  items,
}: PropsWithChildren<StackLayoutProps>) {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const handleNavbarLink = async (link: string) => {
    await router.push(link);
  };

  return (
    <div className="flex min-h-screen flex-col bg-base-100">
      <div className="navbar sticky top-0 z-50 bg-base-100 px-4">
        <div className="navbar-start">
          <ChevronLeftIcon
            className="w-6 cursor-pointer font-bold"
            onClick={handleBack}
          />
        </div>
        {items && (
          <div className="navbar-end gap-3 pr-1">
            {items.map((item) => (
              <div
                key={item.link}
                className="cursor-pointer text-neutral-200"
                onClick={() => void handleNavbarLink(item.link)}
              >
                {item.title}
              </div>
            ))}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
