/*
  Функція приймає масив елементів та колбек, який перетворює кожен елемент в інший тип.
  Повертає новий масив перетворених елементів.
*/

function mapArray(list: any, cb: any): any {
  return list.map(cb);
}

const nums = mapArray(["1", "2", "3"], Number);
const lens = mapArray(["hello", "world"], (word) => word.length);
const flags = mapArray([1, 2, 3], (value) => value > 1);

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof nums, number[]>>,
  Expect<Equal<typeof lens, number[]>>,
  Expect<Equal<typeof flags, boolean[]>>,
];
