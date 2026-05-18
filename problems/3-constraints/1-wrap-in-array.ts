/*
  Функція приймає значення типу `string | number` і загортає його в масив.
  Замініть `any` на generic з extends обмеженням.
*/

type WidenStringOrNumber<T extends string | number> = T extends string
  ? string
  : number;

function wrapInArray<T extends string | number>(
  value: T,
): [WidenStringOrNumber<T>] {
  return [value] as [WidenStringOrNumber<T>];
}

const strArr = wrapInArray("hello");
// => ["hello"]
const numArr = wrapInArray(42);
// => [42]

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof strArr, [string]>>,
  Expect<Equal<typeof numArr, [number]>>,
];

// @ts-expect-error
wrapInArray(true);
