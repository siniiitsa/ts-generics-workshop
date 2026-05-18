/*
  Функція приймає два аргументи, що мають властивість `length`, та повертає той,
  що є довшим. Замініть `any` на generic-параметр з extends-обмеженням.
*/

type WidenString<T> = T extends string ? string : T;

function longest<T extends { length: number }>(a: T, b: T): WidenString<T> {
  return (a.length >= b.length ? a : b) as WidenString<T>;
}

const longerArray = longest([1, 2, 3], [1, 2]);
// => [1, 2, 3]
const longerString = longest("typescript", "js");
// => "typescript"

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof longerArray, number[]>>,
  Expect<Equal<typeof longerString, string>>,
];

// @ts-expect-error
longest(10, 20);
