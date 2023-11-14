"use client";

import { Toast } from "@doss/ui";
import { LandmarkIcon } from "lucide-react";
import { proxy, useSnapshot } from "valtio";

export const bankWelcomeToastState = proxy({ visible: false });

export default function BankWelcomeToast() {
  const { visible: toastVisible } = useSnapshot(bankWelcomeToastState);
  const handleClose = () => {
    bankWelcomeToastState.visible = false;
  };

  return (
    <Toast
      position="top"
      IconComponent={
        <LandmarkIcon name="landmark" size={24} className="text-blue-500" />
      }
      message="도스뱅크로 이동했어요"
      visible={toastVisible}
      onClose={handleClose}
    />
  );
}
