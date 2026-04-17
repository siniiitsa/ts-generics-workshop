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

const c = zipArrays([1, 2, 3], ["a", "b"]);
// значення c → [[1, "a"], [2, "b"]]

const d = zipArrays([true, false], [10, 20]);
// значення d → [[true, 10], [false, 20]]
