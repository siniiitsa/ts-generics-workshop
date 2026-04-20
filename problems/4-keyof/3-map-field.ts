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

const uppercased = mapField(user, "name", (s: string) => s.toUpperCase()); // OK
const incremented = mapField(user, "age", (n: number) => n + 1); // OK
mapField(user, "age", (n: number) => String(n)); // має бути помилка TypeScript — fn повертає string замість number
mapField(user, "missing", (x: any) => x); // має бути помилка TypeScript
