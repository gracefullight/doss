import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Head from "next/head";
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
}

export default function StackLayout({
  children,
  items,
  title,
  isLightBackground = false,
}: PropsWithChildren<StackLayoutProps>) {
  const router = useRouter();
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
    <>
      <Head>
        <title>Doss</title>
        <meta name="description" content="Duplicated version of Toss" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>
      <div className="bg-base-100 flex min-h-screen flex-col">
        <div
          className={clsx(
            "navbar sticky top-0 z-50 px-4",
            isLightBackground ? "bg-neutral-800" : "bg-base-100",
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
            {items &&
              items.map(({ IconComponent, title, ...item }) =>
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
      </div>
    </>
  );
}
