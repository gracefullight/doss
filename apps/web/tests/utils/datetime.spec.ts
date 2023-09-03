import { describe, expect, it } from "vitest";
import { formatTimestamp } from "~/utils/datetime";

describe("@formatTimestamp", () => {
  const baseTime = "2023-09-03T12:00:00Z";

  it('should return "몇시간 전" when the difference is less than a day', () => {
    const isoTimestamp = "2023-09-03T09:00:00Z";
    const result = formatTimestamp(isoTimestamp, baseTime);
    expect(result).toEqual("3시간 전");
  });

  it('should return "1일 전" when the difference is one day', () => {
    const isoTimestamp = "2023-09-02T12:00:00Z";
    const result = formatTimestamp(isoTimestamp, baseTime);
    expect(result).toEqual("1일 전");
  });

  it('should return "M월 d일" when the difference is two or more days', () => {
    const isoTimestamp = "2023-09-01T12:00:00Z";
    const result = formatTimestamp(isoTimestamp, baseTime);
    expect(result).toEqual("9월 1일");
  });
});
