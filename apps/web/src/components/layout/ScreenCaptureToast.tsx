import { InformationCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function ScreenCaptureToast() {
  const [toastVisible, setToastVisible] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // ? https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values
      if (event.key === "PrintScreen") {
        setToastVisible(true);

        setTimeout(() => {
          setToastVisible(false);
        }, 2000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={clsx(`toast toast-center z-50`, !toastVisible && "hidden")}>
      <div className="alert rounded-full border-none bg-neutral-700">
        <InformationCircleIcon className="fill-warning w-6" />
        <span>화면 캡쳐를 감지했어요.</span>
      </div>
    </div>
  );
}
