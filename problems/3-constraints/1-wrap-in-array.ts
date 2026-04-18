// Функція приймає значення типу string або number і загортає його в масив.
// Замініть `any` на generic з extends-обмеженням.

function wrapInArray(value: any): any[] {
  return [value];
}

const strArr = wrapInArray("hello"); // очікуваний тип → string[]
const numArr = wrapInArray(42); // очікуваний тип → number[]
const boolArr = wrapInArray(true); // має бути помилка TypeScript
