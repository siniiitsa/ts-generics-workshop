// Функція приймає два об'єкти та повертає новий об'єкт, що містить усі властивості обох.

function merge(a: any, b: any): any {
  return { ...a, ...b };
}

const result = merge({ name: "Sergiy" }, { age: 25 });
// result.name → "Sergiy"
// result.age → 25
