import {
  deleteNonNumbersFromString,
  mapStringToNumbersArray,
  keepFirstAndLastElement,
  sumDecimalNumbers,
  sumNumbers
} from "./day1.ts";
import { names } from "./names.ts";

describe("general test", () => {
  it("should test removeAlphaNumerical", () => {
    const str = "abc123def456";
    const result = deleteNonNumbersFromString(str);
    expect(result).toBe("123456");
  });

  it("should test mapStringToNumber", () => {
    const str = "123456";
    const result = mapStringToNumbersArray(str);
    expect(result).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should keep first and last element of array", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const result = keepFirstAndLastElement(arr);
    expect(result).toStrictEqual([1, 6]);
  });

  it("should keepFirstAndLastElement if there is only one", () => {
    const arr = [1];
    const result = keepFirstAndLastElement(arr);
    expect(result).toStrictEqual([1, 1]);
  });

  it("should work even without numbers", () => {
    const res = keepFirstAndLastElement(["a"]);
    expect(res).toStrictEqual(["a", "a"]);
  });

  it("should throw on empty array", () => {
    const arr: number[] = [];
    expect(() => {
      keepFirstAndLastElement(arr);
    }).toThrow();
  });

  it("should sum these two elements", () => {
    const arr: [number, number] = [1, 6];
    const result = sumDecimalNumbers(arr);
    expect(result).toBe(16);
  });

  it("should iterate on names", () => {
    const listOfNumbers = names.map((name) => {
      const nameWithoutLetters = deleteNonNumbersFromString(name);
      const nameAsArray = mapStringToNumbersArray(nameWithoutLetters);
      const [first, last] = keepFirstAndLastElement(nameAsArray);
      return sumDecimalNumbers([first, last]);
    });
    const sum = sumNumbers(listOfNumbers);
    expect(sum).toBe(53921);
  });
});
