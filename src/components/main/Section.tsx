import { ChevronRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import type { PropsWithChildren } from "react";

interface SectionProps {
  title: string;
  link?: string;
}

export default function Section({
  title,
  link,
  children,
}: PropsWithChildren<SectionProps>) {
  return (
    <div className="w-full rounded-2xl bg-neutral-800 p-5 pb-6">
      <div
        className={clsx(
          `flex items-center justify-between`,
          children && "mb-6"
        )}
      >
        <h2 className="text-2xl font-semibold text-neutral-200">{title}</h2>
        {link && <ChevronRightIcon className="h-4 w-4" />}
      </div>
      {children}
    </div>
  );
}
