"use client";

import { useInterval } from "ahooks";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { formatNumber } from "~/utils/number";

export default function StockIndexBanner() {
  const items = [
    { stockIndex: "환율", value: 1310, isBlack: true },
    { stockIndex: "나스닥", value: 13492.52, isBlack: false },
    { stockIndex: "S&P500", value: 4348.33, isBlack: false },
    { stockIndex: "다우존스", value: 33747.23, isBlack: false },
  ];

  const [currentItem, setCurrentItem] = useState(0);
  const router = useRouter();
  const clearBanner = useInterval(() => {
    setCurrentItem((prevItem) => {
      if (prevItem >= items.length - 1) {
        return 0;
      } else {
        return prevItem + 1;
      }
    });
  }, 3000);

  useEffect(() => () => clearBanner(), [clearBanner]);

  const handleIndexLink = () => {
    router.push("/stock/major-indexes");
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentItem}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        onClick={handleIndexLink}
        className="cursor-pointer select-none"
      >
        <span className="mr-1 text-neutral-500">
          {items[currentItem]?.stockIndex}
        </span>
        <span
          className={items[currentItem]?.isBlack ? "text-error" : "text-info"}
        >
          {formatNumber(items[currentItem]?.value ?? 0)}
        </span>
      </motion.div>
    </AnimatePresence>
  );
}
