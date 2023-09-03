import { DateTime } from "luxon";

export function formatTimestamp(
  isoTimestamp: string,
  baseTime?: string,
): string {
  const timestamp = DateTime.fromISO(isoTimestamp);
  const now = baseTime ? DateTime.fromISO(baseTime) : DateTime.local();
  const { days } = now.diff(timestamp, ["days"]);

  if (days >= 2) {
    return timestamp.toFormat("M월 d일");
  }

  return timestamp.toRelative({ base: now }) ?? "";
}
