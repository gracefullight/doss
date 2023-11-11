"use client";

import { Cog6ToothIcon, CommandLineIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function PayHeader() {
  const router = useRouter();
  const handlePaySetting = () => {
    router.push("/pay/setting");
  };

  return (
    <div className="sticky top-0 z-50 flex justify-end bg-neutral-800 px-4 pt-2">
      <button className="btn btn-square btn-ghost" title="페이" type="button">
        <CommandLineIcon className="w-6" />
      </button>
      <button
        className="btn btn-square btn-ghost"
        title="설정"
        type="button"
        onClick={() => handlePaySetting()}
      >
        <Cog6ToothIcon className="w-6" />
      </button>
    </div>
  );
}
