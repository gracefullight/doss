import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

interface InformationCardProps {
  title: string;
  handleLink?: () => void;
  imageUrl?: string;
  description?: ReactNode;
  IconComponent?: ReactNode;
}

export default function InformationCard({
  title,
  imageUrl,
  description,
  handleLink,
  IconComponent,
}: InformationCardProps) {
  return (
    <div
      className="flex cursor-pointer items-center justify-between px-5 py-3 active:bg-neutral-700"
      onClick={handleLink}
    >
      <div className="flex items-center gap-2">
        {IconComponent ? (
          <div className="rounded-full bg-neutral-700 p-1">{IconComponent}</div>
        ) : (
          imageUrl && (
            <div className="avatar">
              <div className="h-8 w-8 rounded-full">
                <Image
                  src={imageUrl}
                  alt="thumbnail"
                  loading="lazy"
                  decoding="async"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          )
        )}
        <div className="flex flex-col">
          <div className="text-neutral-400">{title}</div>
          {description && (
            <div className="flex gap-1 text-sm text-neutral-500">
              {description}
            </div>
          )}
        </div>
      </div>
      <button
        className="btn btn-square btn-sm btn-ghost"
        type="button"
        title="더보기"
      >
        <ChevronRightIcon
          name="chevron-right"
          className="text-neutral-400"
          size={20}
        />
      </button>
    </div>
  );
}
