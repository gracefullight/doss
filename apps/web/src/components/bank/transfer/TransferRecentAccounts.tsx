import clsx from "clsx";
import { orderBy } from "lodash-es";
import { StarIcon } from "lucide-react";

interface Account {
  type: string;
  name: string;
  initials?: string;
  accountNumber?: string;
  phoneNumber?: string;
  isFavorite: boolean;
}

export default function TransferRecentAccounts() {
  const items: Account[] = [
    {
      type: "banking",
      name: "내 저축예금",
      initials: "SH",
      accountNumber: "SH 110000222333344",
      isFavorite: false,
    },
    {
      type: "contact",
      name: "은광",
      phoneNumber: "010-1234-5678",
      isFavorite: true,
    },
  ];

  const sortedRecentItems = orderBy(items, ["isFavorite"], ["desc"]);

  return (
    <div className="mt-6 flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="font-medium text-neutral-300">최근 보낸 계좌</h2>
      </div>
      <div className="flex flex-col gap-3">
        {sortedRecentItems.map((item) => (
          <div
            key={`${item.type}_${
              item.type === "banking" ? item.accountNumber : item.phoneNumber
            }`}
            className="flex justify-between"
          >
            <div className="flex items-center gap-2">
              <div className="avatar placeholder">
                <div className="h-10 w-10 rounded-full bg-neutral-focus text-neutral-content">
                  <span>{item.initials ?? item.name[0]}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-medium text-neutral-300">{item.name}</div>
                <span className="text-neutral-400 text-sm">
                  {item.type === "banking"
                    ? item.accountNumber
                    : item.phoneNumber}
                </span>
              </div>
            </div>
            <button
              className="btn btn-square btn-ghost btn-sm"
              type="button"
              title="최근 계좌 즐겨찾기"
            >
              <StarIcon
                name="star"
                className={clsx(item.isFavorite && "text-blue-500")}
                size={24}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
