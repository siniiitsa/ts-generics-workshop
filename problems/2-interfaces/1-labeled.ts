/*
  Інтерфейс описує елемент з текстовою міткою.
  Замініть `any` на generic-параметр у інтерфейсі та функції.
*/

interface Labeled {
  label: string;
  item: any;
}

function getItem(labeled: Labeled): any {
  return labeled.item;
}

const numLabeled: Labeled = { label: "age", item: 30 };
// очікуваний тип numLabeled → Labeled<number>

const boolLabeled: Labeled = { label: "active", item: true };
// очікуваний тип boolLabeled → Labeled<boolean>

const numb = getItem(numLabeled); // очікуваний тип → number
const bool = getItem(boolLabeled); // очікуваний тип → boolean
