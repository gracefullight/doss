import clsx from "clsx";
import { ReactElement, cloneElement, useEffect } from "react";

interface ToastProps {
  icon: ReactElement;
  message: string;
  visible: boolean;
  duration?: number; // in milliseconds
  onClose?: () => void;
}

export default function Toast({
  icon,
  message,
  visible,
  duration = 2000,
  onClose,
}: ToastProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        if (onClose) onClose();
        visible = false;
      }, duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [visible]);

  return (
    <div className={clsx("toast toast-center z-50", !visible && "hidden")}>
      <div className="alert grid-flow-col-dense gap-2 rounded-full border-none bg-neutral-700">
        {cloneElement(icon, {
          className: clsx("w-6", icon.props.className),
        })}
        <span>{message}</span>
      </div>
    </div>
  );
}
