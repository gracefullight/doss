import { Toast } from "@doss/ui";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function ScreenCaptureToast() {
  const [toastVisible, setToastVisible] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // ? https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values
      if (event.key === "PrintScreen") {
        setToastVisible(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Toast
      icon={<InformationCircleIcon className="fill-warning" />}
      message="화면 캡쳐를 감지했어요."
      visible={toastVisible}
    />
  );
}
