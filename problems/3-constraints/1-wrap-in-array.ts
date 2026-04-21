/*
  Функція приймає значення типу `string | number` і загортає його в масив.
  Замініть `any` на generic з extends обмеженням.
*/

function wrapInArray(value: any): any {
  return [value];
}

const strArr = wrapInArray("hello");
const numArr = wrapInArray(42);

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof strArr, [string]>>,
  Expect<Equal<typeof numArr, [number]>>,
];

// @ts-expect-error
wrapInArray(true);
