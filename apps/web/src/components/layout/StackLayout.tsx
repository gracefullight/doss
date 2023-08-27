import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import type { PropsWithChildren } from "react";
import ScreenCaptureToast from "./ScreenCaptureToast";

export interface StackLayoutNavbarItem {
  title: string;
  link?: string;
  handleItem?: () => void;
}

interface StackLayoutProps {
  title?: string;
  items?: StackLayoutNavbarItem[];
}

export default function StackLayout({
  children,
  items,
  title,
}: PropsWithChildren<StackLayoutProps>) {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const handleNavbarLink = async (link: string) => {
    await router.push(link);
  };

  return (
    <div className="bg-base-100 flex min-h-screen flex-col">
      <div className="navbar bg-base-100 sticky top-0 z-50 px-4">
        <div className="navbar-start">
          <ChevronLeftIcon
            className="w-6 cursor-pointer font-bold"
            onClick={handleBack}
          />
        </div>
        {title && (
          <div className="navbar-center">
            <a className="btn btn-ghost text-lg normal-case">{title}</a>
          </div>
        )}

        <div className="navbar-end gap-3 pr-1">
          {items &&
            items.map((item) => (
              <div
                key={item.title}
                className="cursor-pointer text-neutral-200"
                onClick={() => {
                  if (item.link) {
                    handleNavbarLink(item.link);
                  } else if (item.handleItem) {
                    item.handleItem();
                  }
                }}
              >
                {item.title}
              </div>
            ))}
        </div>
      </div>
      {children}
      <ScreenCaptureToast />
    </div>
  );
}
