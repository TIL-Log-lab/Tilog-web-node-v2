export function backgroundColor(color: string): string {
  return `#${color}`;
}
export function getBrightness(hex: string): boolean {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}
export function seededColor(seed: string): string {
  const result = Math.floor(
    Math.abs(Math.sin(parseInt(seed, 10)) * 16777215)
  ).toString(16);
  if (result.length < 6) {
    const repeatCount = 6 - result.length;
    return result + "0".repeat(repeatCount);
  }
  return result;
}
