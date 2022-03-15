const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// for (const ingredient of ingredients) {
//   const list = document.createElement('li');
//   list.textContent = ingredient;
//   console.log(list);
// }
// console.log(list);
const listRef = ingredients.map(element => {
  const list = document.createElement('li');
  list.textContent = element;
  return list;
});
console.log(listRef);
const containerRef = document.querySelector('#ingredients');
// console.log(containerRef);
containerRef.append(...listRef);
console.log(containerRef);
