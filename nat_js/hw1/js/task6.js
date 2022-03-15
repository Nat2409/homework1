let total = 0;

do {
  let input = prompt('Ведите число');

  if (input === null) {
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    console.log('Было введено не число, пропускаем текущую итерацию');
    continue;
  }

  total += input;
} while (true);

alert(`Общая сумма чисел равна ${total}`);

// Bezkone4niy cykl

// let input;
// do {
//   let input = prompt('Ведите число');
// input = Number(input);
// } while (input !== null);

// let input = prompt('Ведите число');
// let input = Number(prompt('Ведите число'));
// console.log(input);
// console.log(typeof input);

// let input;
// let total = 0;
// input = prompt('Ведите число');

// if (input !== null) {
//   do {
//     input = Number(input);
//     console.log(input);
//     total += input;
//     console.log(total);
//   } while (input === null);
// } else {
//   alert('Общая сумма чисел равна ${total}');
// }

// do{
//   input = prompt('Ведите число');
//   input = Number(input);
//   total+=input;
//   console.log(total);
// } while(input === )
