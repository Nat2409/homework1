// const numbers = [];

// function main() {
//   let input = prompt('ВВедите число');

//   // console.log('input', input);
//   // console.log('type', typeof input);

//   const toSummariseNumbers = function (number) {
//     number = Number(number);
//     numbers.push(number);
//     main();
//     // console.log('number', number);
//     // console.log('type number', typeof number);
//     // console.log('numbers', numbers);
//   };

//   if (input !== null) {
//     toSummariseNumbers(input);
//     return;
//   }

//   let total = 0;

//   for (let i = 0; i < numbers.length; i += 1) {
//     total = total + numbers[i];
//     // console.log('total', total);
//     // console.log(`Общая сумма чисел равна ${total}.`);
//     // }
//   }

//   console.log(`Общая сумма чисел равна ${total}.`);
// }

// // console.log(`Общая сумма чисел равна ${total}.`);
// // toSummariseNumbers(input);
// main();
// // console.log(main());
let input;
const numbers = [];
let total = 0;
const calc = function () {
  input = prompt('Введите число');

  if (input !== null) {
    input = Number(input);
    numbers.push(input);
    calc();
    return;
  }

  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  console.log(`Общая сумма чисел равна ${total}`);
};

calc();
