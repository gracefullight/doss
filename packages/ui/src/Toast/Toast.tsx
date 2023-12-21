import { cva } from "class-variance-authority";
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

const toastVariants = cva("toast toast-center z-50", {
  variants: {
    innerVisible: {
      false: "hidden",
    },
    position: {
      bottom: "toast-bottom",
      top: "toast-top",
    },
  },
  defaultVariants: {
    innerVisible: false,
    position: "bottom",
  },
});

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
    setInnerVisible(visible);
  }, [visible]);

  useEffect(() => {
    if (innerVisible) {
      const timer = setTimeout(() => {
        setInnerVisible(false);
        if (onClose) onClose();
      }, duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [innerVisible, onClose, duration]);

  if (typeof window === "undefined" || !isClient) {
    return null;
  }

  const toastElement = (
    <div className={toastVariants({ innerVisible, position })}>
      <div className="alert grid-flow-col-dense gap-2 rounded-full border-none bg-neutral-700">
        {IconComponent}
        <span>{message}</span>
      </div>
    </div>
  );

  return createPortal(toastElement, document.body);
}
