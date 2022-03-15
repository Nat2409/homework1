const findBestEmployee = function (employees) {
  const results = Object.values(employees);
  console.log(results);
  console.log(results[0]);
  let index = 0;
  let max = results[index];

  for (let i = 1; i < results.length; i += 1) {
    if (max < results[i]) {
      max = results[i];
      index = i;
    }
  }
  return Object.keys(employees)[index];
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
