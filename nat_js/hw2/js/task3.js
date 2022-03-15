'use stict';

const findLongestWord = function (string) {
  // твой код
  const words = string.split(' ');

  // console.log(words.length);
  let longestWord = words[0];
  // console.log(words[1].length);
  //  let longestWordLength=word[0].length;

  for (let i = 1; i < words.length; i += 1) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
      // console.log('longestWord 2', longestWord);
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
