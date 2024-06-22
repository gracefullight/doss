import { cva } from "class-variance-authority";
import type { ReactNode } from "react";
import { MultilineText } from "../MultilineText";

interface CarouselItem {
  subheader: string;
  title: string;
  IconComponent: ReactNode;
  handleClick?: () => void;
}

export interface ServiceCarouselProps {
  items: CarouselItem[];
  isDark?: boolean;
}

const carouselItemVariants = cva(
  "flex w-32 cursor-pointer flex-col justify-between gap-2 rounded-2xl p-4",
  {
    variants: {
      isDark: {
        true: "bg-neutral-800",
        false: "bg-neutral-700",
      },
    },
    defaultVariants: {
      isDark: false,
    },
  },
);

export function ServiceCarousel({
  items,
  isDark = false,
}: ServiceCarouselProps) {
  return (
    <div className="carousel max-w-full space-x-4 self-start rounded-box">
      {items.map((item) => (
        <div key={item.title} className="carousel-item">
          <div
            className={carouselItemVariants({ isDark })}
            onClick={item.handleClick}
          >
            <div className="flex flex-col gap-2">
              <span className="text-neutral-400 text-sm">{item.subheader}</span>
              <span className="font-medium text-lg">
                <MultilineText>{item.title}</MultilineText>
              </span>
            </div>
            {item.IconComponent}
          </div>
        </div>
      ))}
    </div>
  );
}
