"use client";

import { ScanBarcodeIcon, SearchIcon, SettingsIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PayHeader() {
  const router = useRouter();
  const handlePaySetting = () => {
    router.push("/pay/setting");
  };

  return (
    <div className="sticky top-0 z-50 flex justify-end bg-neutral-800 px-4 pt-2">
      <button className="btn btn-square btn-ghost" title="페이" type="button">
        <SearchIcon name="search" size={24} />
      </button>
      <button className="btn btn-square btn-ghost" title="스캔" type="button">
        <ScanBarcodeIcon name="scan-barcode" size={24} />
      </button>
      {/* TODO: 카드 스캔 내부로 */}
      <button
        className="btn btn-square btn-ghost"
        title="설정"
        type="button"
        onClick={() => handlePaySetting()}
      >
        <SettingsIcon name="settings" size={24} />
      </button>
    </div>
  );
}
