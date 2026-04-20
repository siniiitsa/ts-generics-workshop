/*
  Функція приймає два об'єкти і об'єднує їх в один.
  Замініть `any` на два generic-параметри з extends-обмеженнями.
*/

function merge(a: any, b: any): any {
  return { ...a, ...b };
}

const result = merge({ name: "Alice" }, { age: 30 });

const config = merge({ debug: true }, { timeout: 5000, retries: 3 });

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<(typeof result)["name"], string>>,
  Expect<Equal<(typeof result)["age"], number>>,
  Expect<Equal<(typeof config)["debug"], boolean>>,
  Expect<Equal<(typeof config)["timeout"], number>>,
  Expect<Equal<(typeof config)["retries"], number>>,
];

// @ts-expect-error
merge({ name: "Alice" }, 42);
