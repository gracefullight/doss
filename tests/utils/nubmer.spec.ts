import { expect, test } from "@playwright/test";
import { formatNumber, formatPercent } from "~/utils/number";

test.describe("formatNumber", () => {
  test("formats numbers correctly", () => {
    expect(formatNumber(123456.789)).toBe("123,456.789");
    expect(formatNumber(0)).toBe("0");
    expect(formatNumber(-123456.789)).toBe("-123,456.789");
  });
});

test.describe("formatPercent", () => {
  test("formats percentages correctly", () => {
    expect(formatPercent(0.45678)).toBe("45.7%");
    expect(formatPercent(0)).toBe("0.0%");
    expect(formatPercent(-0.45678)).toBe("-45.7%");
  });
});
