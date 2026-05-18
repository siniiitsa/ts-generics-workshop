/*
  Функція приймає масив об'єктів і ключ, та повертає об'єкт,
  згрупований за значенням цього ключа.
  Замініть `any` на generic-параметри з keyof обмеженням.
*/

function groupBy<T extends object, K extends keyof T>(
  arr: T[],
  key: K,
): Record<string, T[]> {
  return arr.reduce<Record<string, T[]>>((groups, item) => {
    const groupKey = String(item[key]);
    return { ...groups, [groupKey]: [...(groups[groupKey] ?? []), item] };
  }, {});
}

const orders = [
  { id: 1, status: "pending", amount: 100 },
  { id: 2, status: "shipped", amount: 200 },
  { id: 3, status: "pending", amount: 150 },
];

const byStatus = groupBy(orders, "status");
// => {
//      pending: [{ id: 1, status: "pending", amount: 100 }, { id: 3, status: "pending", amount: 150 }],
//      shipped: [{ id: 2, status: "shipped", amount: 200 }],
//    }

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof byStatus, Record<string, (typeof orders)[number][]>>>,
];

// @ts-expect-error
groupBy(orders, "missing");
