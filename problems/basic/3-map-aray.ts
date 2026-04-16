// Функція приймає масив елементів та колбек, який перетворює кожен елемент в інший тип.
// Повертає новий масив перетворених елементів.

function mapArray(list: any, cb: any): any[] {
  return list.map(cb);
}

const nums = mapArray(["1", "2", "3"], Number);
// тип nums → number[]

const lengths = mapArray(["hello", "world"], (word) => word.length);
// тип lengths → number[]
