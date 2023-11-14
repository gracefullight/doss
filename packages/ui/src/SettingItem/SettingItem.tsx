import clsx from "clsx";
import type { ReactNode } from "react";

export interface SettingItemProps {
  title: string;
  IconComponent: ReactNode;
  handleLink?: () => void | Promise<void>;
  description?: string;
  actionText?: string;
  actionColor?: string;
}

export function SettingItem({
  title,
  handleLink,
  IconComponent,
  description,
  actionText,
  actionColor = "text-neutral-400",
}: SettingItemProps) {
  const handleClick = () => {
    if (handleLink) {
      void handleLink();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer select-none items-center justify-between px-5 py-3 active:bg-neutral-700"
    >
      <div className="flex flex-col">
        <div className="font-medium text-neutral-300">{title}</div>
        {description && (
          <span className="text-sm text-neutral-400">{description}</span>
        )}
      </div>
      <div className="flex items-center gap-1">
        {actionText && (
          <div className={clsx("font-medium", actionColor)}>{actionText}</div>
        )}
        {IconComponent}
      </div>
    </div>
  );
}
