import Head from "next/head";
import type { PropsWithChildren } from "react";
import BottomNavigation from "./BottomNavigation";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Doss</title>
        <meta name="description" content="Duplicated version of Toss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center pb-24">
        {children}
        <BottomNavigation />
      </main>
    </>
  );
}
