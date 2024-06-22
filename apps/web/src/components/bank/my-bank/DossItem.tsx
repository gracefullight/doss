import Image from "next/image";
import Link from "next/link";
import { formatNumber } from "~/utils/number";

export default function DossItem() {
  return (
    <div className="flex cursor-pointer select-none items-center justify-between rounded-xl p-2 active:bg-neutral-600">
      <Link href="/">
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
            <span className="text-neutral-400 text-sm">도스뱅크 통장</span>
            <div className="flex flex-row space-x-2">
              <span className="font-medium text-lg">
                {formatNumber(100000)}원
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
