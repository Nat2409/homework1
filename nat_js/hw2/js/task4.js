const text = 'Vestibulum facilisis, purus nec pulvinar iaculis.';
// console.log(text.length);
// text.length = 40;
// console.log(text);
const formatString = function (string) {
  // твой код
  let length = string.length;
  // console.log(length);
  if (length <= 40) {
    // console.log(string);
    return string;
  } else {
    // string.length = 40;
    // console.log(`${string} ...`);
    const split = text.split('');
    split.length = 40;
    // console.log(split.join(''), '...');
    return `${split.join('')} ...`;
  }
};

// formatString('Curabitur ligula sapien, tincidunt non.');
// formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
  )
);
