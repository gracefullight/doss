import clsx from "clsx";
import type { ElementType } from "react";
import { useEffect, useState } from "react";

export interface ToastProps {
  message: string;
  IconComponent?: ElementType;
  iconColor?: string;
  visible?: boolean;
  duration?: number; // in milliseconds
  onClose?: () => void;
  position?: "bottom" | "top";
}

export function Toast({
  IconComponent,
  message,
  iconColor,
  visible = false,
  duration = 2000,
  position = "bottom",
  onClose,
}: ToastProps) {
  const [innerVisible, setInnerVisible] = useState(visible);
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        if (onClose) onClose();
        setInnerVisible(false);
      }, duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [visible, onClose]);

  return (
    <div
      className={clsx(
        "toast toast-center z-50",
        `toast-${position}`,
        !innerVisible && "hidden",
      )}
    >
      <div className="alert grid-flow-col-dense gap-2 rounded-full border-none bg-neutral-700">
        {IconComponent && <IconComponent className={clsx("w-6", iconColor)} />}
        <span>{message}</span>
      </div>
    </div>
  );
}
