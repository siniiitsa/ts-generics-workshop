/*
  Функція приймає об'єкт, ключ і функцію-трансформер,
  та повертає оновлену копію об'єкта з трансформованим значенням поля.
  Замініть `any` на generic-параметри з keyof обмеженням,
  щоб тип аргументу і результату трансформера відповідали типу поля.
*/

function mapField(obj: any, key: any, fn: any): any {
  return { ...obj, [key]: fn(obj[key]) };
}

const user = { name: "Alice", age: 30 };

const uppercased = mapField(user, "name", (s: string) => s.toUpperCase());
const incremented = mapField(user, "age", (n: number) => n + 1);

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof uppercased, { name: string; age: number }>>,
  Expect<Equal<typeof incremented, { name: string; age: number }>>,
];

// @ts-expect-error
mapField(user, "age", (n: number) => String(n));
// @ts-expect-error
mapField(user, "missing", (x) => x);
