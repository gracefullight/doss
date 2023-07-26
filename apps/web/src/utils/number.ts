export function formatNumber(num: number): string {
  const formatter = new Intl.NumberFormat("en-US");
  return formatter.format(num);
}

export const formatPercent = (num: number): string => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 1,
  });

  return formatter.format(num);
};
