"use client";
import { useDebounce } from "ahooks";
import { useMemo, useState } from "react";

interface ContactItem {
  initials?: string;
  name: string;
  phoneNumber: string;
}

export default function TransferContact() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, { wait: 300 });
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

  const handleSearch = () => {
    const filtered = contactItems.filter((item) =>
      item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
    );

    setFilteredContacts(filtered);
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="검색/집적 입력"
        className="input input-bordered w-full"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch();
        }}
      />
      <div className="mt-4 flex flex-col gap-3">
        {filteredContacts.map((item) => (
          <div key={item.phoneNumber} className="flex items-center gap-2">
            <div className="avatar placeholder">
              <div className="h-10 w-10 rounded-full bg-neutral-focus text-neutral-content">
                <span>{item.initials ?? item.name[0]}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-medium text-neutral-300">{item.name}</div>
              <span className="text-neutral-400 text-sm">
                {item.phoneNumber}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
