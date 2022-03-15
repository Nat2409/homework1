const animals = ['Mango', 'Poly', 'Ajax'];

console.log(animals);
console.log(animals.length);
console.log(typeof animals.length);
const logItems = function (array) {
  let i = 1;
  for (let i = 1; i <= array.length; i += 1) {
    console.log(`${i} - ${array[i - 1]}`);
  }
  // return `${i} - ${animals[i - 1]}`;
};
logItems(animals);
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
