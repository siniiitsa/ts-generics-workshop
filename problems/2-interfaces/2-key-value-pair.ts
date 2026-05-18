/*
  Інтерфейс описує пару "ключ — значення".
  Замініть `any` на два generic-параметри у інтерфейсі та функції.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

function getValue<K, V>(pair: KeyValuePair<K, V>): V {
  return pair.value;
}

const p1: KeyValuePair<string, string> = { key: "name", value: "Alice" };
const p2: KeyValuePair<number, boolean> = { key: 1, value: true };
const v1 = getValue(p1);
// => "Alice"
const v2 = getValue(p2);
// => true

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof p1, KeyValuePair<string, string>>>,
  Expect<Equal<typeof p2, KeyValuePair<number, boolean>>>,
  Expect<Equal<typeof v1, string>>,
  Expect<Equal<typeof v2, boolean>>,
];
