import { ChevronRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useRouter } from "next/router";
import type { PropsWithChildren } from "react";

interface SectionProps {
  title: string;
  link: string;
  handleLink?: () => void;
  hiddenLink?: boolean;
}

export default function Section({
  title,
  link,
  children,
  handleLink,
  hiddenLink = false,
}: PropsWithChildren<SectionProps>) {
  const router = useRouter();
  const handleClick = async () => {
    if (handleLink) {
      void handleLink();
    }
    await router.push(link);
  };

  return (
    <section className="w-full rounded-2xl bg-neutral-800 px-3 pb-6 pt-5">
      <div
        className={clsx(
          `flex cursor-pointer items-center justify-between px-2`,
          children && "mb-5",
        )}
        onClick={handleClick}
      >
        <h2 className="text-lg font-semibold text-neutral-200">{title}</h2>
        {!hiddenLink && (
          <button
            className="btn btn-square btn-sm btn-ghost"
            type="button"
            title={title}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        )}
      </div>
      {children}
    </section>
  );
}
