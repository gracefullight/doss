import clsx from "clsx";
import type { ReactElement } from "react";
import { cloneElement, useEffect, useState } from "react";

export interface ToastProps {
  message: string;
  icon?: ReactElement<{ className?: string }>;
  visible?: boolean;
  duration?: number; // in milliseconds
  onClose?: () => void;
}

export function Toast({
  icon,
  message,
  visible = false,
  duration = 2000,
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
    <div className={clsx("toast toast-center z-50", !innerVisible && "hidden")}>
      <div className="alert grid-flow-col-dense gap-2 rounded-full border-none bg-neutral-700">
        {icon &&
          cloneElement(icon, {
            className: clsx("w-6", icon.props.className),
          })}
        <span>{message}</span>
      </div>
    </div>
  );
}
