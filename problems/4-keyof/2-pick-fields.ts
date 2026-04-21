/*
  Функція приймає об'єкт і масив ключів, та повертає новий об'єкт
  лише з вказаними полями.
  Замініть `any` на generic-параметри з keyof обмеженням.
*/

function pickFields(obj: any, keys: any): any {
  const result: any = {};
  for (const key of keys) {
    result[key] = obj[key];
  }
  return result;
}

const user = { id: 1, name: "Alice", email: "alice@example.com", age: 30 };

const preview = pickFields(user, ["id", "name"]);

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [Expect<Equal<typeof preview, { id: number; name: string }>>];

// @ts-expect-error
pickFields(user, ["id", "missing"]);
