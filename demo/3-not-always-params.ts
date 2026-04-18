/*
  Розглянувши попередні приклади, у нас може скластися хибне враження, що параметри
  типів необхідні лише для типізації параметрів функції, але це не завжди так.
  Наприклад, наша функція може не приймати жодних параметрів, але все одно працювати\
  із даними загального типу:
*/

function createArray(): any[] {
  return [] as any[];
}

const arr = createArray();

function getElement(selector: string): any {
  return document.querySelector(selector);
}

const div = getElement("div");
