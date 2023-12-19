"use client";

import {
  ArrowUpDownIcon,
  BanknoteIcon,
  CarFrontIcon,
  ChevronRightIcon,
  CircleDollarSignIcon,
  CreditCardIcon,
  EyeOffIcon,
  LifeBuoyIcon,
  LockKeyholeIcon,
  PlusIcon,
  SettingsIcon,
  ShieldIcon,
  TrendingDownIcon,
  WarehouseIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { BottomSheetDialog } from "~/components/layout";

interface BottomSheetSettingItem {
  name: string;
  IconComponent: ReactNode;
  extraText?: string;
}

export default function Extra() {
  const settings: BottomSheetSettingItem[] = [
    {
      name: "자산 목록 편집",
      IconComponent: <ArrowUpDownIcon name="arrow-up-down" size={20} />,
    },
    {
      name: "금액 숨기기",
      IconComponent: <EyeOffIcon name="eye-off" size={20} />,
    },
    {
      name: "비밀번호 인증",
      IconComponent: <LockKeyholeIcon name="lock-keyhole" size={20} />,
      extraText: "거래 내역 볼 때",
    },
  ];

  const assetSettings: BottomSheetSettingItem[] = [
    {
      name: "은행",
      IconComponent: <BanknoteIcon name="bank-note" size={20} />,
    },
    {
      name: "카드",
      IconComponent: (
        <CreditCardIcon
          name="credit-card"
          size={20}
          className="text-blue-500"
        />
      ),
    },
    {
      name: "증권",
      IconComponent: (
        <TrendingDownIcon
          name="trending-down"
          size={20}
          className="text-blue-500"
        />
      ),
    },
    {
      name: "포인트·페이 머니",
      IconComponent: (
        <CircleDollarSignIcon
          name="circle-dollar-sign"
          size={20}
          className="text-blue-500"
        />
      ),
    },
    {
      name: "보험",
      IconComponent: (
        <ShieldIcon name="shield" size={20} className="text-blue-500" />
      ),
    },
    {
      name: "할부금융(캐피탈)",
      IconComponent: (
        <LifeBuoyIcon name="life-buoy" size={20} className="text-blue-500" />
      ),
    },
    {
      name: "부동산",
      IconComponent: (
        <WarehouseIcon name="ware-house" size={20} className="text-blue-500" />
      ),
    },
    {
      name: "자동차",
      IconComponent: (
        <CarFrontIcon name="car-front" size={20} className="text-blue-500" />
      ),
    },
  ];

  const handleHomeSetting = () => {
    window.modalHomeSetting.showModal();
  };

  const handleAddAsset = () => {
    window.modalAddAsset.showModal();
  };

  return (
    <div className="mt-4 flex items-center gap-4">
      <button
        className="btn border-none bg-neutral-800 hover:bg-neutral-900"
        type="button"
        onClick={handleHomeSetting}
      >
        <SettingsIcon name="settings" size={20} />
        화면 설정
      </button>
      <button
        className="btn border-none bg-neutral-800 hover:bg-neutral-900"
        type="button"
        onClick={handleAddAsset}
      >
        <PlusIcon name="plus" size={20} />
        자산 추가
      </button>
      <BottomSheetDialog id="modalHomeSetting" title="홈 화면 설정">
        {settings.map((setting) => (
          <div
            key={setting.name}
            className="flex cursor-pointer select-none flex-row items-center justify-between rounded-lg px-2 py-2 active:bg-neutral-700"
          >
            <div className="flex flex-row gap-2">
              {setting.IconComponent}
              <div className="text-neutral-300">{setting.name}</div>
            </div>
            <div className="flex flex-row items-center">
              {setting.extraText && (
                <span className="text-info">{setting.extraText}</span>
              )}
              <button
                className="btn btn-square btn-ghost btn-sm"
                type="button"
                title="더보기"
              >
                <ChevronRightIcon name="chevron-right" size={16} />
              </button>
            </div>
          </div>
        ))}
      </BottomSheetDialog>
      <BottomSheetDialog id="modalAddAsset" title="자산 추가">
        {assetSettings.map((setting) => (
          <div
            key={setting.name}
            className="flex cursor-pointer select-none flex-row items-center justify-between rounded-lg px-2 py-2 active:bg-neutral-700"
          >
            <div className="flex flex-row items-center gap-2">
              {setting.IconComponent}
              <div className="text-neutral-300">{setting.name}</div>
            </div>
          </div>
        ))}
      </BottomSheetDialog>
    </div>
  );
}
