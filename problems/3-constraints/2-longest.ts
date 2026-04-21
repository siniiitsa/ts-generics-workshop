/*
  Функція приймає два аргументи, що мають властивість `length`, та повертає той,
  що є довшим. Замініть `any` на generic-параметр з extends-обмеженням.
*/

function longest(a: any, b: any): any {
  return a.length >= b.length ? a : b;
}

const longerArray = longest([1, 2, 3], [1, 2]);
const longerString = longest("typescript", "js");

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof longerArray, number[]>>,
  Expect<Equal<typeof longerString, string>>,
];

// @ts-expect-error
longest(10, 20);
