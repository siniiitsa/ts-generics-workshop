/*
  Оператор keyof повертає об'єднання всіх ключів типу.
  У поєднанні з extends він дозволяє обмежити параметр типу
  лише допустимими ключами певного об'єкта.
*/

/*
  Розглянемо функцію, яка отримує значення властивості об'єкта за ключем.
  Без обмежень ми не можемо гарантувати, що ключ K існує в об'єкті T:
*/

function getValue(obj: any, key: any): any {
  return obj[key];
}

const user = { id: 1, name: "Alice", active: true };

const name = getValue(user, "name"); // string
const id = getValue(user, "id"); // number
getValue(user, "missing"); // Помилка — ключ не існує в типі

/*
  T[K] — це індексований тип доступу. Він означає:
  "тип значення, яке знаходиться за ключем K в типі T".
  Завдяки цьому TypeScript точно знає тип поверненого значення.
*/

/*
  Інший приклад — функція, яка оновлює одне поле об'єкта:
*/

function setField(obj: any, key: any, value: any): any {
  return { ...obj, [key]: value };
}

const updated = setField(user, "name", "Bob"); // OK
setField(user, "name", 42); // Помилка — number не можна присвоїти string
