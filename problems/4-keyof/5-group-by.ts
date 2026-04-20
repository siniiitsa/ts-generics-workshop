/*
  Функція приймає масив об'єктів і ключ, та повертає об'єкт,
  згрупований за значенням цього ключа.
  Замініть `any` на generic-параметри з keyof обмеженням.
*/

function groupBy(arr: any[], key: any): any {
  return arr.reduce((groups, item) => {
    const groupKey = item[key];
    return { ...groups, [groupKey]: [...(groups[groupKey] ?? []), item] };
  }, {});
}

const orders = [
  { id: 1, status: "pending", amount: 100 },
  { id: 2, status: "shipped", amount: 200 },
  { id: 3, status: "pending", amount: 150 },
];

const byStatus = groupBy(orders, "status"); // OK
groupBy(orders, "missing"); // має бути помилка TypeScript
