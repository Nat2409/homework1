const credits = 23580;
const pricePerDroid = 3000;

const buyDroids = prompt('How many droids do you want to buy?');

const quantity = Number(buyDroids);

if (buyDroids === null) {
  console.log('Отменено пользователем!');
} else {
  const totalPrice = 3000 * quantity;

  if (totalPrice >> credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    const balance = credits - totalPrice;
    console.log(
      `Вы купили ${quantity} дроидов, на счету осталось ${balance} кредитов.`
    );
  }
}
