import type { PropsWithChildren, ReactNode } from "react";

interface BottomSheetDialogProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function BottomSheetDialog({
  id,
  title,
  children,
}: PropsWithChildren<BottomSheetDialogProps>) {
  return (
    <dialog id={id} className="modal modal-bottom">
      <div className="modal-box px-0">
        <h2 className="px-5 text-lg font-medium text-neutral-200">{title}</h2>
        <div className="mb-1 mt-4 flex flex-col px-3">{children}</div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="submit">close</button>
      </form>
    </dialog>
  );
}
