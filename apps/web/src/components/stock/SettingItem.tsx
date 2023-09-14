import { ChevronRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useRouter } from "next/router";

export interface SettingItemProps {
  title: string;
  link: string;
  description?: string;
  actionText?: string;
  actionColor?: string;
}

export default function SettingItem({
  title,
  link,
  description,
  actionText,
  actionColor = "text-neutral-400",
}: SettingItemProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer select-none items-center justify-between px-5 py-3 active:bg-neutral-700"
    >
      <div className="flex flex-col">
        <div className="font-medium text-neutral-400">{title}</div>
        {description && (
          <span className="text-sm text-neutral-500">{description}</span>
        )}
      </div>
      <div className="flex items-center gap-1">
        {actionText && (
          <div className={clsx("font-medium", actionColor)}>{actionText}</div>
        )}
        <ChevronRightIcon className="w-4" />
      </div>
    </div>
  );
}
