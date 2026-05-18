/*
  Функція приймає масив елементів та колбек, який перетворює кожен елемент в інший тип.
  Повертає новий масив перетворених елементів.
*/

function mapArray<T, U>(list: T[], cb: (item: T) => U): U[] {
  return list.map(cb);
}

const nums = mapArray(["1", "2", "3"], Number);
// => [1, 2, 3]
const lens = mapArray(["hello", "world"], (word) => word.length);
// => [5, 5]
const flags = mapArray([1, 2, 3], (value) => value > 1);
// => [false, true, true]

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof nums, number[]>>,
  Expect<Equal<typeof lens, number[]>>,
  Expect<Equal<typeof flags, boolean[]>>,
];
