import Image from "next/image";
import { useRouter } from "next/router";
import { formatNumber } from "~/utils/number";

export default function DossItem() {
  const router = useRouter();
  return (
    <div
      className="flex cursor-pointer select-none items-center justify-between rounded-xl p-2 active:bg-neutral-600"
      onClick={() => void router.push("/")}
    >
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="h-10 w-10 rounded-full bg-neutral-700 p-2">
            <Image
              src="/apple-touch-icon.png"
              alt="thumbnail"
              loading="lazy"
              decoding="async"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-neutral-400">도스뱅크 통장</span>
          <div className="flex flex-row space-x-2">
            <span className="text-lg font-medium">
              {formatNumber(100000)}원
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
