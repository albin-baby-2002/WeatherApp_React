export function formatCoordinate(coordinate: number) {
  const sign = coordinate >= 0 ? "+" : "-";

  const absoluteValue = Math.abs(coordinate).toFixed(4);

  return `${sign}${absoluteValue}`;
}