const checkForSpam = function (message) {
  const normalizeMessage = message.toLowerCase();
  // console.log(normalizeMessage);
  const collection = normalizeMessage.split(' ');
  return collection.includes('sale') || collection.includes('[spam]');
  // console.log(result);

  // let result = false;
  // // console.log(collection);
  // for (const item of collection) {
  //   if (item === 'sale' || item === 'spam') {
  //     result = true;
  //   }
  // }
  // return result;
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
