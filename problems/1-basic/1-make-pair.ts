/*
  Функція приймає два аргументи(можливо, різних типів) і повертає їх як кортеж.
*/

function makePair(a: any, b: any): any {
  return [a, b];
}

const a = makePair(1, "hello");
const b = makePair(true, 42);

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof a, [number, string]>>,
  Expect<Equal<typeof b, [boolean, number]>>,
];
