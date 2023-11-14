"use client";

import { Toast } from "@doss/ui";
import { InfoIcon } from "lucide-react";
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
      IconComponent={
        <InfoIcon name="info" size={24} className="text-yellow-500" />
      }
      message="화면 캡쳐를 감지했어요."
      visible={toastVisible}
    />
  );
}
