export function formatNumber(num: number): string {
  const formatter = new Intl.NumberFormat("en-US");
  return formatter.format(num);
}

export function formatPercent(num: number, minimumFractionDigits = 1): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: minimumFractionDigits,
  });

  return formatter.format(num);
}

export function getDiscountRate(original: number, discount: number) {
  if (original <= 0 || discount > original) {
    return formatPercent(0, 0);
  }

  return formatPercent((original - discount) / original, 0);
}
