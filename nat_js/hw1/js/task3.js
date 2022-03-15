const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const wellcome = prompt('Enter your password');
// console.log(wellcome);
if (wellcome === null) {
  message = 'Отменено пользователем!';
  alert(message);
} else if (wellcome === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  alert(message);
} else {
  message = 'Доступ запрещен, неверный пароль!';
  alert(message);
}
