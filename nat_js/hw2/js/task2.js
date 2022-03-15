// const text = 'Proin sociis natoque et magnis parturient montes mus';
// // const words = text.split(' ');
// console.log(text.split(' ').length);
const calculateEngravingPrice = function (message, pricePerWord) {
  // твой код
  const split = message.split(' ').length;
  const totalPrice = split * pricePerWord;
  console.log(totalPrice);
  // return totalPrice;
};

calculateEngravingPrice(
  'Proin sociis natoque et magnis parturient montes mus',
  10
);

calculateEngravingPrice(
  'Proin sociis natoque et magnis parturient montes mus',
  20
);

calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40);

calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20);
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)
// ); // 120
