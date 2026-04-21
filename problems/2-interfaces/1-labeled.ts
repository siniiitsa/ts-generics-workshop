/*
  Інтерфейс описує елемент з текстовою міткою.
  Замініть `any` на generic-параметр у інтерфейсі та функції.
*/

interface Labeled {
  label: string;
  item: any;
}

function getItem(labeled: Labeled): any {
  return labeled.item;
}

const numLabeled: Labeled = { label: "age", item: 30 };
const boolLabeled: Labeled = { label: "active", item: true };
const numb = getItem(numLabeled);
const bool = getItem(boolLabeled);

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof numLabeled, Labeled<number>>>,
  Expect<Equal<typeof boolLabeled, Labeled<boolean>>>,
  Expect<Equal<typeof numb, number>>,
  Expect<Equal<typeof bool, boolean>>,
];
