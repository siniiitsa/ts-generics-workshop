/*
  Якщо ми ще раз уважно подивимося на наш останній приклад, то можемо побачити,
  що він має одну проблему. Нам нічого не заважає для параметру типу DOM елементу
  використати тип, який не має сенсу в цьому контексті.

  Щоб вирішити цю проблему, ми можемо використати обмеження через оператор extends:
*/

function getElement<T>(selector: string): T | null {
  return document.querySelector(selector) as T | null;
}

const div = getElement<number>("div");

/*
  Тепер, при спробі використати несумісний тип, компілятор видасть нам попередження.
  T extends Element означає, що тип T повинен бути підтипом базового типу Element.
*/

/*
  Розглянемо ще один приклад:
*/

interface Lengthy {
  length: number;
}

function getLen<T extends Lengthy>(item: T): number {
  return item.length;
}

const len1 = getLen("hello");
const len2 = getLen([1, 2, 3, 4]);
const len3 = getLen(42);
