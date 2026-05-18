/*
  Інтерфейс описує елемент з текстовою міткою.
  Замініть `any` на generic-параметр у інтерфейсі та функції.
*/

interface Labeled<T> {
  label: string;
  item: T;
}

function getItem<T>(labeled: Labeled<T>): T {
  return labeled.item;
}

const numLabeled: Labeled<number> = { label: "age", item: 30 };
const boolLabeled: Labeled<boolean> = { label: "active", item: true };
const numb = getItem(numLabeled);
// => 30
const bool = getItem(boolLabeled);
// => true

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof numLabeled, Labeled<number>>>,
  Expect<Equal<typeof boolLabeled, Labeled<boolean>>>,
  Expect<Equal<typeof numb, number>>,
  Expect<Equal<typeof bool, boolean>>,
];
