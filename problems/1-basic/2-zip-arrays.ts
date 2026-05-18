/*
  Функція приймає два масиви(можливо, різних типів) та повертає масив кортежів,
  де кожен кортеж — пара елементів з обох масивів.
  Довжина результату — по коротшому масиву.
*/

function zipArrays<T, U>(a: T[], b: U[]): [T, U][] {
  const len = Math.min(a.length, b.length);
  const result: [T, U][] = [];
  for (let i = 0; i < len; i++) {
    const item: [T, U] = [a[i], b[i]];
    result.push(item);
  }
  return result;
}

const a = zipArrays([1, 2, 3], ["a", "b"]);
// => [[1, "a"], [2, "b"]]
const b = zipArrays([true, false], [10, 20]);
// => [[true, 10], [false, 20]]

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof a, [number, string][]>>,
  Expect<Equal<typeof b, [boolean, number][]>>,
];
