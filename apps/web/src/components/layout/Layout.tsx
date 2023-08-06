import Head from "next/head";
import type { PropsWithChildren } from "react";
import BottomNavigation from "./BottomNavigation";
import ScreenCaptureToast from "./ScreenCaptureToast";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Doss</title>
        <meta name="description" content="Duplicated version of Toss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-base-100 flex flex-col items-center justify-center pb-24">
        {children}
        <BottomNavigation />
        <ScreenCaptureToast />
      </main>
    </>
  );
}
