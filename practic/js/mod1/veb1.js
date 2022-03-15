let balance = 1000;
const payment = 2000;

console.log(
  `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`
);
if (balance >= payment) {
  balance = balance - payment;
  console.log('Все хорошо! Снимаем деньги, спасибо за покупку!');
  console.log(`на счету осталось ${balance} кредитов`);
} else {
  console.log('На счету не достаточно средств для проведения операции!');
}
