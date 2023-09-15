import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import type { ElementType, ReactNode } from "react";

interface InformationCardProps {
  title: string;
  handleLink?: () => void;
  imageUrl?: string;
  description?: ReactNode;
  IconComponent?: ElementType;
  iconProps?: object;
}

export default function InformationCard({
  title,
  imageUrl,
  description,
  handleLink,
  IconComponent,
  iconProps,
}: InformationCardProps) {
  return (
    <div
      className="flex cursor-pointer items-center justify-between px-5 py-3 active:bg-neutral-700"
      onClick={handleLink}
    >
      <div className="flex items-center gap-2">
        {IconComponent ? (
          <div className="rounded-full bg-neutral-700 p-1">
            <IconComponent {...iconProps} />
          </div>
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
        <ChevronRightIcon className="w-4 fill-neutral-400" />
      </button>
    </div>
  );
}
