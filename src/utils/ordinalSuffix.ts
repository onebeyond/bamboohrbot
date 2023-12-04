export function ordinalSuffix(n: number): string {
  const lastDigit = n % 10;
  const last2Digits = n % 100;
  if (lastDigit === 1 && last2Digits !== 11) {
    return `${n}st`;
  }
  if (lastDigit === 2 && last2Digits !== 12) {
    return `${n}nd`;
  }
  if (lastDigit === 3 && last2Digits !== 13) {
    return `${n}rd`;
  }
  return `${n}th`;
}
