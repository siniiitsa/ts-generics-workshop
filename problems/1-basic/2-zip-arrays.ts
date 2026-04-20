/*
  Функція приймає два масиви(можливо, різних типів) та повертає масив кортежів,
  де кожен кортеж — пара елементів з обох масивів.
  Довжина результату — по коротшому масиву.
*/

function zipArrays(a: any, b: any): any {
  const len = Math.min(a.length, b.length);
  const result = [];
  for (let i = 0; i < len; i++) {
    result.push([a[i], b[i]]);
  }
  return result;
}

const a = zipArrays([1, 2, 3], ["a", "b"]);
const b = zipArrays([true, false], [10, 20]);

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof a, [number, string][]>>,
  Expect<Equal<typeof b, [boolean, number][]>>,
];
