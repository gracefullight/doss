"use client";
import { debounce } from "lodash";
import { useMemo, useState } from "react";

interface ContactItem {
  initials?: string;
  name: string;
  phoneNumber: string;
}

export default function TransferContact() {
  const [searchTerm, setSearchTerm] = useState("");
  const contactItems = useMemo<ContactItem[]>(
    () => [
      {
        name: "은광",
        phoneNumber: "010-1234-5678",
      },
      {
        initials: "JH",
        name: "지현",
        phoneNumber: "010-9876-5432",
      },
    ],
    [],
  );
  const [filteredContacts, setFilteredContacts] =
    useState<ContactItem[]>(contactItems);

  const handleSearch = debounce((term: string) => {
    const filtered = contactItems.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase()),
    );
    setFilteredContacts(filtered);
  }, 300);

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="검색/집적 입력"
        className="input input-bordered w-full"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <div className="mt-4 flex flex-col gap-3">
        {filteredContacts.map((item) => (
          <div key={item.phoneNumber} className="flex items-center gap-2">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content h-10 w-10 rounded-full">
                <span>{item.initials ?? item.name[0]}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-medium text-neutral-300">{item.name}</div>
              <span className="text-sm text-neutral-400">
                {item.phoneNumber}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
