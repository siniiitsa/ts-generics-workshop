/*
  Інтерфейси, як і функції, можуть мати параметри типу.
  Це дозволяє описувати структури даних, які працюють з різними типами,
  зберігаючи при цьому типову безпеку.
*/

interface Box {
  value: any;
}

const numberBox: Box = { value: 42 };
const stringBox: Box = { value: "hello" };

/*
  Параметрів типу може бути декілька.
  Наприклад, інтерфейс для пари значень:
*/

interface Pair {
  first: any;
  second: any;
}

const point: Pair = { first: 10, second: 20 };
const entry: Pair = { first: "active", second: true };
