import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { proxy, useSnapshot } from "valtio";
import { Toast } from "~/components/shared";

export const feedbackToastState = proxy({ visible: false });

export default function FeedbackToast() {
  const { visible: toastVisible } = useSnapshot(feedbackToastState);

  const handleClose = () => {
    feedbackToastState.visible = false;
  };

  return (
    <Toast
      icon={<CheckCircleIcon className="fill-success" />}
      message="소중한 의견 보내주셔서 감사해요."
      visible={toastVisible}
      onClose={handleClose}
    />
  );
}
