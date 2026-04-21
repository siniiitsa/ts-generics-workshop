/*
  Функція приймає масив об'єктів і ключ, та повертає масив,
  відсортований за значенням цього ключа.
  Замініть `any` на generic-параметри з keyof обмеженням.
*/

function sortBy(arr: any, key: any): any {
  return [...arr].sort((a, b) =>
    a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0,
  );
}

const users = [
  { name: "Charlie", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
];

const byAge = sortBy(users, "age");
const byName = sortBy(users, "name");

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof byAge, typeof users>>,
  Expect<Equal<typeof byName, typeof users>>,
];

// @ts-expect-error
sortBy(users, "missing");
