/*
  Функція приймає два об'єкти і об'єднує їх в один.
  Замініть `any` на два generic-параметри з extends-обмеженнями.
*/

function merge(a: any, b: any): any {
  return { ...a, ...b };
}

const result = merge({ name: "Alice" }, { age: 30 });

const config = merge({ debug: true }, { timeout: 5000, retries: 3 });
