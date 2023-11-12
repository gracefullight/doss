import type { PropsWithChildren } from "react";
import { BottomNavigation, ScreenCaptureToast } from "~/components/layout";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="bg-base-100 flex flex-col items-center justify-center pb-24">
      {children}
      <BottomNavigation />
      <ScreenCaptureToast />
    </main>
  );
}
