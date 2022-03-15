const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  // твой код
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }

  return false;
};
// console.log(isLoginValid('Ajax'));
const isLoginUnique = function (allLogins, login) {
  return allLogins.includes(login);

  // for (const one of allLogins) {
  //   if (one === login) {
  //     return true;
  //   }
  //   return false;
  // } // твой код
};
// console.log(isLoginUnique(logins, 'Ajax'));

const addLogin = function (allLogins, login) {
  // твой код
  if (isLoginValid(login) === false) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }

  if (isLoginUnique(allLogins, login) === false) {
    return 'Такой логин уже используется!';
  }

  allLogins.push(login);
  return 'Логин успешно добавлен!';
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
