/*
  Функція приймає об'єкт і ключ, та повертає новий об'єкт без цього поля.
  Замініть `any` на generic-параметри з keyof обмеженням,
  щоб повернений тип точно відображав відсутність видаленого поля.
*/

function omitField<T extends object, K extends keyof T>(obj: T, key: K): Omit<T, K> {
  const { [key]: _, ...rest } = obj;
  return rest;
}

const user = { id: 1, name: "Alice", age: 30 };

const withoutAge = omitField(user, "age");
// => { id: 1, name: "Alice" }

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [Expect<Equal<typeof withoutAge, { id: number; name: string }>>];

// @ts-expect-error
omitField(user, "missing");
