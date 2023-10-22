import { describe, expect, it } from "vitest";
import { formatNumber, formatPercent, getDiscountRate } from "~/utils/number";

describe("@formatNumber", () => {
  it("formats numbers correctly", () => {
    expect(formatNumber(123456.789)).toBe("123,456.789");
    expect(formatNumber(0)).toBe("0");
    expect(formatNumber(-123456.789)).toBe("-123,456.789");
  });

  it("formats numbers with different minimumFractionDigits", () => {
    expect(formatNumber(12, 0)).toBe("12");
    expect(formatNumber(12, 2)).toBe("12.00");
  });
});

describe("@formatPercent", () => {
  it("formats percentages correctly", () => {
    expect(formatPercent(0.45678)).toBe("45.7%");
    expect(formatPercent(0)).toBe("0.0%");
    expect(formatPercent(-0.45678)).toBe("-45.7%");
  });

  it("formats percentages with different minimumFractionDigits", () => {
    expect(formatPercent(0.45678)).toBe("45.7%");
    expect(formatPercent(0.45678, 0)).toBe("46%");
    expect(formatPercent(0.45678, 2)).toBe("45.68%");
  });
});

describe("@getDiscountRate", () => {
  it("should return the correct discount rate for given regular and discount prices", () => {
    expect(getDiscountRate(10000, 9000)).toBe("10%");
    expect(getDiscountRate(10000, 0)).toBe("100%");
    expect(getDiscountRate(10000, 10000)).toBe("0%");
  });

  it("should handle edge cases", () => {
    expect(getDiscountRate(0, 0)).toBe("0%");
    expect(getDiscountRate(10000, 11000)).toBe("0%");
  });
});
