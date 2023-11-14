import clsx from "clsx";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface ToastProps {
  message: string;
  IconComponent?: ReactNode;
  visible?: boolean;
  duration?: number; // in milliseconds
  onClose?: () => void;
  position?: "bottom" | "top";
}

export function Toast({
  IconComponent,
  message,
  visible = false,
  duration = 2000,
  position = "bottom",
  onClose,
}: ToastProps) {
  const [isClient, setIsClient] = useState(false);
  const [innerVisible, setInnerVisible] = useState(visible);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
  }, [visible, onClose, duration]);

  if (typeof window === "undefined" || !isClient) {
    return null;
  }

  const toastElement = (
    <div
      className={clsx(
        "toast toast-center z-50",
        `toast-${position}`,
        !innerVisible && "hidden",
      )}
    >
      <div className="alert grid-flow-col-dense gap-2 rounded-full border-none bg-neutral-700">
        {IconComponent}
        <span>{message}</span>
      </div>
    </div>
  );

  return createPortal(toastElement, document.body);
}
