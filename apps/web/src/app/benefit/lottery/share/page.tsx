"use client";

import { CloverIcon } from "lucide-react";
import { DateTime } from "luxon";
import Head from "next/head";
import { useRef } from "react";
import { StackLayout, StackLayoutNavbar } from "~/components/layout";
import { PATH_LOTTERY } from "~/constants";
import { useScreenshot } from "~/hooks";
import { shareUrl } from "~/utils/share";

export default function BenefitLotteryShare() {
  const imageDivRef = useRef<HTMLDivElement>(null);
  const [, takeScreenshot] = useScreenshot();

  const greenGradientBackground =
    "bg-gradient-to-t from-emerald-300 to-lime-100";
  const today = DateTime.now().toFormat("yyyy-MM-dd");
  const handleSave = async () => {
    const lotteryImageBlob = await takeScreenshot(imageDivRef.current);
    if (lotteryImageBlob) {
      const imageUrl = URL.createObjectURL(lotteryImageBlob);

      const downloadLink = document.createElement("a");
      downloadLink.href = imageUrl;
      downloadLink.download = `lottery_${today}.png`;

      document.body.appendChild(downloadLink);
      downloadLink.click();

      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(imageUrl);
    }
  };

  return (
    <>
      <Head>
        <meta name="theme-color" content="transparent" />
      </Head>
      <StackLayout customBackgroundColor={greenGradientBackground}>
        <StackLayoutNavbar />
        <div className="-mt-24 flex flex-grow flex-col items-center justify-center">
          <div
            className="flex w-full flex-col items-center p-5"
            ref={imageDivRef}
          >
            <div className="flex w-full flex-col rounded-lg bg-blue-50 px-4 py-5">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 text-sm">
                  행운복권 | {today}
                </span>
                <CloverIcon
                  name="clover"
                  className="text-green-500"
                  size={32}
                />
              </div>
              <h2 className="font-semibold text-lg text-neutral-900">
                매사가 딱딱 맞아 떨어지네요. 자신감과 용기를 가지고 움직이세요.
              </h2>
              <div className="divider after:bg-neutral-200 before:bg-neutral-200" />
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-neutral-400">성공운</span>
                  <span className="text-neutral-500">매우 좋음</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-400">
                    행운을 줄 귀인의 초성
                  </span>
                  <span className="text-neutral-500">ㅇㄱ</span>
                </div>
              </div>
            </div>
            <div className="my-3 font-bold text-lg text-white">doss</div>
          </div>
          <div className="flex w-full flex-col gap-2 px-5">
            <button
              className="btn btn-block btn-info rounded-xl"
              type="button"
              onClick={handleSave}
            >
              사진으로 저장하기
            </button>
            <button
              className="btn btn-block rounded-xl border-none bg-white text-info hover:bg-neutral-100"
              type="button"
              onClick={() =>
                void shareUrl("도스 행운복권을 열어보세요", PATH_LOTTERY)
              }
            >
              친구에게 행운복권 알려주기
            </button>
          </div>
        </div>
      </StackLayout>
    </>
  );
}
