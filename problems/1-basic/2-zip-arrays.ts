// Функція приймає два масиви(можливо, різних типів) та повертає масив кортежів,
// де кожен кортеж — пара елементів з обох масивів.
// Довжина результату — по коротшому масиву.

function zipArrays(a: any, b: any): any {
  const len = Math.min(a.length, b.length);
  const result = [];
  for (let i = 0; i < len; i++) {
    result.push([a[i], b[i]]);
  }
  return result;
}

const a = zipArrays([1, 2, 3], ["a", "b"]);
// значення a → [[1, "a"], [2, "b"]]

const b = zipArrays([true, false], [10, 20]);
// значення b → [[true, 10], [false, 20]]
