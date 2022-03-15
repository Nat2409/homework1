const categor = categories.querySelectorAll('.item');
console.log(`В списке ${categor.length} категорий`);
// console.log(categor);
const categoriesRef = document.querySelector('#categories');
// console.log(categoriesRef);

// console.log(categoriesRef.children);
categor.forEach(element => {
  console.log('Категория: ', element.firstElementChild.textContent);
  console.log('Количество элементов: ', element.querySelectorAll('li').length);
});
