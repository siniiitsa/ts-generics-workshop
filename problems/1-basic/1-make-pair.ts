/*
  Функція приймає два аргументи(можливо, різних типів) і повертає їх як кортеж.
*/

function makePair(a: any, b: any): any {
  return [a, b];
}

const a = makePair(1, "hello"); // очікуваний тип a → [number, string]
const b = makePair(true, 42); // очікуваний тип b → [boolean, number]
