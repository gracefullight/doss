import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { StackLayout } from "~/components/layout";

interface PaySettingItem {
  name: string;
  link: string;
}

export default function PaySetting() {
  const router = useRouter();
  const items: PaySettingItem[] = [
    { name: "결제수단", link: "/pay" },
    { name: "내 도스페이 쿠폰", link: "/pay" },
    { name: "결제 내역", link: "/pay" },
    { name: "자동결제", link: "/pay" },
    { name: "현금영수증 정보", link: "/pay" },
  ];

  const handleLink = async (link: string) => {
    await router.push(link);
  };

  return (
    <StackLayout title="도스페이 설정">
      <div className="flex flex-col gap-1 px-3">
        {items.map(({ name, link }) => (
          <div
            className="flex cursor-pointer select-none items-center justify-between rounded-xl px-2 py-1 active:bg-neutral-600"
            key={name}
            onClick={() => void handleLink(link)}
          >
            <div className="text-neutral-300">{name}</div>
            <button
              className="btn btn-square btn-sm btn-ghost"
              type="button"
              title={name}
            >
              <ChevronRightIcon className="w-4 fill-neutral-400" />
            </button>
          </div>
        ))}
      </div>
    </StackLayout>
  );
}
