/*
  Інтерфейс описує пару "ключ — значення".
  Замініть `any` на два generic-параметри у інтерфейсі та функції.
*/

interface KeyValuePair {
  key: any;
  value: any;
}

function getValue(pair: KeyValuePair): any {
  return pair.value;
}

const p1: KeyValuePair = { key: "name", value: "Alice" };
const p2: KeyValuePair = { key: 1, value: true };
const v1 = getValue(p1);
const v2 = getValue(p2);

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof p1, KeyValuePair<string, string>>>,
  Expect<Equal<typeof p2, KeyValuePair<number, boolean>>>,
  Expect<Equal<typeof v1, string>>,
  Expect<Equal<typeof v2, boolean>>,
];
