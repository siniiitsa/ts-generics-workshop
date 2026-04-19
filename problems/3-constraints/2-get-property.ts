/*
  Функція приймає об'єкт і ключ, та повертає значення за цим ключем.
  Замініть `any` на generic-параметри з extends-обмеженнями.
*/

function getProperty(obj: any, key: any): any {
  return obj[key];
}

const user = { name: "Alice", age: 30 };

const userName = getProperty(user, "name"); // очікуваний тип → string
const userAge = getProperty(user, "age"); // очікуваний тип → number
const userLastName = getProperty(user, "lastName"); // має бути помилка TypeScript
