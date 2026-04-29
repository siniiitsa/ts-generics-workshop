/*
  Функція приймає об'єкт і ключ, та повертає значення за цим ключем.
  Замініть `any` на generic-параметри з extends-обмеженнями.
*/

function getProperty(obj: any, key: any): any {
  return obj[key];
}

const user = { name: "Alice", age: 30 };

const userName = getProperty(user, "name");
// => "Alice"
const userAge = getProperty(user, "age");
// => 30

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof userName, string>>,
  Expect<Equal<typeof userAge, number>>,
];

// @ts-expect-error
getProperty(user, "lastName");
