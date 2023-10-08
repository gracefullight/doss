import clsx from "clsx";
import { useState } from "react";
import { BankWelcomeToast } from "~/components/bank";
import { StackLayout } from "~/components/layout";

export default function Bank() {
  const [tabIndex, setTabIndex] = useState(0);
  const navItems = [{ title: "설정", link: "/bank/setting" }];

  return (
    <StackLayout items={navItems} isLightBackground>
      <div className="flex flex-col bg-neutral-800">
        <div className="tabs w-full bg-neutral-800 px-5">
          <a
            className={clsx(
              `tab tab-bordered tab-lg w-1/2`,
              tabIndex === 0 && "tab-active",
            )}
            onClick={() => setTabIndex(0)}
          >
            내 도스뱅크
          </a>
          <a
            className={clsx(
              `tab tab-bordered tab-lg w-1/2`,
              tabIndex === 1 && "tab-active",
            )}
            onClick={() => setTabIndex(1)}
          >
            상품 찾기
          </a>
        </div>
      </div>
      <BankWelcomeToast />
    </StackLayout>
  );
}
