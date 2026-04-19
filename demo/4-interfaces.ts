/*
  Інтерфейси, як і функції, можуть мати параметри типу.
  Це дозволяє описувати структури даних, які працюють з різними типами,
  зберігаючи при цьому типову безпеку.
*/

interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 42 };
const stringBox: Box<string> = { value: "hello" };

/*
  Параметрів типу може бути декілька.
  Наприклад, інтерфейс для пари значень:
*/

interface Pair<A, B> {
  first: A;
  second: B;
}

const point: Pair<number, number> = { first: 10, second: 20 };
const entry: Pair<string, boolean> = { first: "active", second: true };
