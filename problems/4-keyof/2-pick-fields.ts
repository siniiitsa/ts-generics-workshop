/*
  Функція приймає об'єкт і масив ключів, та повертає новий об'єкт
  лише з вказаними полями.
  Замініть `any` на generic-параметри з keyof обмеженням.
*/

function pickFields(obj: any, keys: any[]): any {
  const result: any = {};
  for (const key of keys) {
    result[key] = obj[key];
  }
  return result;
}

const user = { id: 1, name: "Alice", email: "alice@example.com", age: 30 };

const preview = pickFields(user, ["id", "name"]); // очікуваний тип → { id: number; name: string }
// pickFields(user, ["id", "missing"]);              // має бути помилка TypeScript
