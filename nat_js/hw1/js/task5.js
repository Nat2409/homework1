let price;
const delivery = prompt('Узнать стоимость доставки в вашу страну');

switch (delivery.toLowerCase()) {
  case 'китай':
    price = 100;
    console.log(`Доставка в Китай будет стоить ${price} кредитов`);
    break;

  case 'чили':
    price = 250;
    console.log(`Доставка в Чили будет стоить ${price} кредитов`);
    break;

  case 'австралия':
    price = 170;
    console.log(
      `Доставка в Австралию будет стоить ${price} кредитов`
      // `Доставка в ${delivery.toUpperCase()} будет стоить 170 кредитов`
    );
    break;

  case 'индия':
    price = 80;
    console.log(`Доставка в Индию будет стоить ${price} кредитов`);
    break;

  case 'ямайка':
    price = 120;
    console.log(`Доставка в Ямайку будет стоить ${price} кредитов`);
    break;

  default:
    console.log('В вашей стране доставка не доступна');
    break;
}
// console.log(
//   `Доставка в ${delivery.toUpperCase()} будет стоить ${price} кредитов`
// );
