import type { PropsWithChildren } from "react";
import { BottomNavigation, ScreenCaptureToast } from "~/components/layout";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="flex flex-col items-center justify-center bg-base-100 pb-24">
      {children}
      <BottomNavigation />
      <ScreenCaptureToast />
    </main>
  );
}
