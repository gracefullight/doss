import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useRouter } from "next/router";
import type { ElementType, PropsWithChildren } from "react";
import ScreenCaptureToast from "./ScreenCaptureToast";

export interface StackLayoutNavbarItem {
  title: string;
  IconComponent?: ElementType;
  link?: string;
  handleItem?: () => void;
}

interface StackLayoutProps {
  title?: string;
  items?: StackLayoutNavbarItem[];
  isLightBackground?: boolean;
  customBackgroundColor?: string;
}

export default function StackLayout({
  children,
  items,
  title,
  isLightBackground = false,
  customBackgroundColor,
}: PropsWithChildren<StackLayoutProps>) {
  const router = useRouter();
  const backgroundColor = customBackgroundColor ?? "bg-base-100";
  const navbarColor = isLightBackground ? "bg-neutral-800" : "bg-base-100";

  const handleBack = () => {
    router.back();
  };

  const handleInnerItem = async ({
    link,
    handleItem,
  }: Pick<StackLayoutNavbarItem, "link" | "handleItem">) => {
    if (link) {
      await router.push(link);
    } else if (handleItem) {
      handleItem();
    }
  };

  return (
    <main className={clsx(`flex min-h-screen flex-col`, backgroundColor)}>
      <div
        className={clsx(
          "navbar sticky top-0 z-50 px-4",
          !customBackgroundColor && navbarColor,
        )}
      >
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
          {items?.map(({ IconComponent, title, ...item }) =>
            IconComponent ? (
              <button
                key={title}
                className="btn btn-square btn-sm btn-ghost"
                type="button"
                title={title}
                onClick={() => void handleInnerItem(item)}
              >
                <IconComponent className="w-5" />
              </button>
            ) : (
              <div
                key={title}
                className="cursor-pointer text-neutral-200"
                onClick={() => void handleInnerItem(item)}
              >
                {title}
              </div>
            ),
          )}
        </div>
      </div>
      {children}
      <ScreenCaptureToast />
    </main>
  );
}
