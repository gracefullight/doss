"use client";

import { Toast } from "@doss/ui";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { proxy, useSnapshot } from "valtio";

export const feedbackToastState = proxy({ visible: false });

export default function FeedbackToast() {
  const { visible: toastVisible } = useSnapshot(feedbackToastState);

  const handleClose = () => {
    feedbackToastState.visible = false;
  };

  return (
    <Toast
      IconComponent={CheckCircleIcon}
      iconColor="fill-green-500"
      message="소중한 의견 보내주셔서 감사해요."
      visible={toastVisible}
      onClose={handleClose}
    />
  );
}
