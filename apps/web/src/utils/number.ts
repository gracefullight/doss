export function formatNumber(num: number): string {
  const formatter = new Intl.NumberFormat("en-US");
  return formatter.format(num);
}

export const formatPercent = (
  num: number,
  minimumFractionDigits = 1,
): string => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: minimumFractionDigits,
  });

  return formatter.format(num);
};
