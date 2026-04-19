/*
  Інтерфейс описує пару "ключ — значення".
  Замініть `any` на два generic-параметри у інтерфейсі та функції.
*/

interface KeyValuePair {
  key: any;
  value: any;
}

function getValue(pair: KeyValuePair): any {
  return pair.value;
}

const p1: KeyValuePair = { key: "name", value: "Alice" };
// очікуваний тип p1 → KeyValuePair<string, string>

const p2: KeyValuePair = { key: 1, value: true };
// очікуваний тип p2 → KeyValuePair<number, boolean>

const v1 = getValue(p1); // очікуваний тип → string
const v2 = getValue(p2); // очікуваний тип → boolean
