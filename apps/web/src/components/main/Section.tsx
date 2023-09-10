import { ChevronRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useRouter } from "next/router";
import type { PropsWithChildren } from "react";

interface SectionProps {
  title: string;
  link: string;
  hiddenLink?: boolean;
}

export default function Section({
  title,
  link,
  children,
  hiddenLink = false,
}: PropsWithChildren<SectionProps>) {
  const router = useRouter();
  const handleLink = async (link: string) => {
    await router.push(link);
  };

  return (
    <div className="w-full rounded-2xl bg-neutral-800 p-5 pb-6">
      <div
        className={clsx(
          `flex cursor-pointer items-center justify-between`,
          children && "mb-6",
        )}
        onClick={() => void handleLink(link)}
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
    </div>
  );
}
