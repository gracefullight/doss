// NewsCard.tsx
import { formatTimestamp } from "~/utils/datetime";
import { formatPercent } from "~/utils/number";

interface NewsCardProps {
  tags: { name: string; rate: number }[];
  title: string;
  source: string;
  timestamp: string;
  imageUrl?: string;
  handleLink?: () => void;
}

export default function NewsCard({
  tags,
  title,
  source,
  timestamp,
  imageUrl,
  handleLink,
}: NewsCardProps) {
  return (
    <div
      className="flex cursor-pointer select-none flex-col gap-1"
      onClick={handleLink}
    >
      <div className="flex gap-2">
        {tags.map((tag, index) => (
          <span
            className={`text-sm ${tag.rate > 0 ? "text-error" : "text-info"}`}
            key={index}
          >
            {tag.name} {formatPercent(tag.rate)}
          </span>
        ))}
      </div>
      <div className="flex justify-between gap-1">
        <div className="flex flex-col gap-1">
          <div className="font-medium text-neutral-300">{title}</div>
          <span className="text-sm text-neutral-500">
            {source} · {formatTimestamp(timestamp)}
          </span>
        </div>
        {imageUrl && (
          <img src={imageUrl} alt="기사 이미지" className="w-16 rounded-lg" />
        )}
      </div>
    </div>
  );
}
