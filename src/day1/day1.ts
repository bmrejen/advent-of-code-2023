export function deleteNonNumbersFromString(str: string): string {
  return str.replace(/[^0-9]/g, "");
}

export function mapStringToNumbersArray(str: string): number[] {
  return str.split("").map(deleteNonNumbersFromString).map(Number);
}

export function keepFirstAndLastElement<T, U = T>(arr: (T | U)[]): [T | U, T | U] {
  if (arr.length === 0) {
    throw new Error("arr is empty");
  }
  const first = arr[0];
  const last = arr[arr.length - 1] || first;
  return [first, last];
}

export function sumDecimalNumbers(arr: [number, number]): number {
  return Number(String(arr[0]) + String(arr[1]));
}

export function sumNumbers(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}
