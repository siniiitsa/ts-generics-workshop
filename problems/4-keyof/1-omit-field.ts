/*
  Функція приймає об'єкт і ключ, та повертає новий об'єкт без цього поля.
  Замініть `any` на generic-параметри з keyof обмеженням,
  щоб повернений тип точно відображав відсутність видаленого поля.
*/

function omitField(obj: any, key: any): any {
  const { [key]: _, ...rest } = obj;
  return rest;
}

const user = { id: 1, name: "Alice", age: 30 };

const withoutAge = omitField(user, "age");

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [Expect<Equal<typeof withoutAge, { id: number; name: string }>>];

// @ts-expect-error
omitField(user, "missing");
