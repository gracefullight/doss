import {
  BanknotesIcon,
  CreditCardIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import { Fragment } from "react";

export default function ServiceCarousel() {
  const items = [
    {
      subheader: "59개 금융사",
      title: "대출 한도\n조회",
      icon: <PlayCircleIcon className="w-8 self-end fill-success" />,
    },
    {
      subheader: "최근",
      title: "내 부동산\n시세 조회",
      icon: <CreditCardIcon className="w-8 self-end fill-info" />,
    },
    {
      subheader: "자주",
      title: "이번 주 미션",
      icon: <BanknotesIcon className="w-8 self-end" />,
    },
    { subheader: "인기", title: "더보기", icon: null },
  ];

  return (
    <div className=" carousel rounded-box max-w-full space-x-4 self-start">
      {items.map((item, index) => (
        <div className="carousel-item" key={index}>
          <div className="flex w-32 cursor-pointer flex-col justify-between gap-2 rounded-lg bg-neutral-800 p-4">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-neutral-400">{item.subheader}</span>
              <span className="text-lg font-medium">
                {item.title.split("\n").map((str, i) => (
                  <Fragment key={i}>
                    {i > 0 && <br />}
                    {str}
                  </Fragment>
                ))}
              </span>
            </div>
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
