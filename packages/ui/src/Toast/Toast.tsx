import clsx from "clsx";
import type { ElementType } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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
        {IconComponent && <IconComponent className={clsx("w-6", iconColor)} />}
        <span>{message}</span>
      </div>
    </div>
  );

  // Create a DOM element to host the Toast
  const toastRoot = document.getElementById("toast-root");

  // Check if the 'toast-root' element exists, else create one
  if (!toastRoot) {
    const newToastRoot = document.createElement("div");
    newToastRoot.id = "toast-root";
    document.body.appendChild(newToastRoot);
  }

  return createPortal(toastElement, toastRoot ?? document.body);
}
