// const titleRef = document.createElement('h1');

// titleRef.textContent = 'динамически созданий заголовок! Вау!!!';

// titleRef.classList.add('site-title');
// titleRef.id = 'title';

// console.dir(titleRef);

const products = [
  {
    name: 'QWE',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio molestias vero in laboriosam consequuntur at id veritatis commodi aliquam.',
    price: 2000,
    available: true,
  },
  {
    name: 'KJHKJHK',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio molestias vero in laboriosam consequuntur at id veritatis commodi aliquam.',
    price: 2000,
    available: false,
  },
  {
    name: 'PJGHG',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio molestias vero in laboriosam consequuntur at id veritatis commodi aliquam.',
    price: 5000,
    available: true,
  },
  {
    name: 'GFDHDR',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio molestias vero in laboriosam consequuntur at id veritatis commodi aliquam.',
    price: 7000,
    available: false,
  },
];
//
// console.log(parentContainerRef);

// const containerRef = document.createElement('div');
// containerRef.classList.add('product-card');

// const titleRef = document.createElement('h2');
// titleRef.textContent = product.name;
// titleRef.classList.add('product-card__name');

// const descriptionRef = document.createElement('p');
// descriptionRef.textContent = product.description;
// descriptionRef.classList.add('product-card__description');

// const priceRef = document.createElement('p');
// priceRef.textContent = `Price ${product.price} credits`;
// priceRef.classList.add('product-card__price');
// containerRef.append(titleRef, descriptionRef, priceRef);

const createProductCard = product => {
  // const parentContainerRef = document.createElement('div');
  // parentContainerRef.classList.add('products', 'js-products');

  const containerRef = document.createElement('div');
  containerRef.classList.add('product-card');

  const titleRef = document.createElement('h2');
  titleRef.textContent = product.name;

  const inStockClass = product.available
    ? 'product-card__name--available'
    : 'product-card__name--not-available';
  titleRef.classList.add('product-card__name', inStockClass);

  const descriptionRef = document.createElement('p');
  descriptionRef.textContent = product.description;
  descriptionRef.classList.add('product-card__description');

  const priceRef = document.createElement('p');
  priceRef.textContent = `Price ${product.price} credits`;
  priceRef.classList.add('product-card__price');
  containerRef.append(titleRef, descriptionRef, priceRef);
  // parentContainerRef.appendChild(containerRef);

  return containerRef;
};

// console.log(containerRef);
// console.log(titleRef);
// console.log(descriptionRef);
// console.log(priceRef);

// containerRef.appendChild(titleRef);
// containerRef.appendChild(descriptionRef);
// containerRef.appendChild(priceRef);
// parentContainerRef.appendChild(createProductCard());
// console.log(parentContainerRef);
// console.log(createProductCard(product));
const productCards = products.map(product => createProductCard(product));

console.table(products);
console.log(productCards);

const productListRef = document.querySelector('.js-products');
console.log(productListRef);
productListRef.append(...productCards);
