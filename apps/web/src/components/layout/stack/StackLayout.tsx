import clsx from "clsx";
import type { PropsWithChildren } from "react";
import ScreenCaptureToast from "~/components/layout/ScreenCaptureToast";

interface StackLayoutProps {
  customBackgroundColor?: string;
}

function StackLayout({
  children,
  customBackgroundColor,
}: PropsWithChildren<StackLayoutProps>) {
  const backgroundColor = customBackgroundColor ?? "bg-base-100";

  return (
    <main className={clsx("flex min-h-screen flex-col", backgroundColor)}>
      {children}
      <ScreenCaptureToast />
    </main>
  );
}

export default StackLayout;
