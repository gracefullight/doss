import type { PropsWithChildren } from "react";
import BottomNavigation from "./BottomNavigation";
import ScreenCaptureToast from "./ScreenCaptureToast";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="bg-base-100 flex flex-col items-center justify-center pb-24">
      {children}
      <BottomNavigation />
      <ScreenCaptureToast />
    </main>
  );
}
