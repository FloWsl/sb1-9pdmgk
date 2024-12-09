export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(Math.round(num));
}

export function formatEfficiency(num: number): string {
  return num.toFixed(3);
}

export function formatPercentage(num: number): string {
  return `${Math.round(num)}%`;
}