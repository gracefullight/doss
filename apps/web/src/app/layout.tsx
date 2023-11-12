import "@doss/ui/styles.css";
import "~/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Noto_Sans_KR } from "next/font/google";
import { cookies } from "next/headers";

import type { Metadata, Viewport } from "next";
import { TRPCReactProvider } from "~/trpc/react";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Doss",
  description: "Duplicated version of Toss",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  manifest: "/manifest.webmanifest",
  verification: {
    google: "T-ff63rB7-5DJtELlhQ2o5v8ZouXl-ZYy_Hsf33WaB4",
  },
};

export const viewport: Viewport = {
  themeColor: "#333333",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`font-sans ${notoSansKR.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
        <Analytics />
      </body>
    </html>
  );
}
