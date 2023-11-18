import clsx from "clsx";
import type { ReactNode } from "react";
import { MultilineText } from "../MultilineText";

interface CarouselItem {
  subheader: string;
  title: string;
  icon: ReactNode;
}

export interface ServiceCarouselProps {
  items: CarouselItem[];
  isDark?: boolean;
}

export function ServiceCarousel({
  items,
  isDark = false,
}: ServiceCarouselProps) {
  return (
    <div className="carousel rounded-box max-w-full space-x-4 self-start">
      {items.map((item, index) => (
        <div className="carousel-item" key={index}>
          <div
            className={clsx(
              "flex w-32 cursor-pointer flex-col justify-between gap-2 rounded-2xl p-4",
              isDark ? "bg-neutral-800" : "bg-neutral-700",
            )}
          >
            <div className="flex flex-col gap-2">
              <span className="text-sm text-neutral-400">{item.subheader}</span>
              <span className="text-lg font-medium">
                <MultilineText>{item.title}</MultilineText>
              </span>
            </div>
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
