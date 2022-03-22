const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const createGalery = images.map(element => {
  const galeryListRef = document.createElement('li');
  galeryListRef.classList.add('list-style');
  const galeryItem = document.createElement('img');

  galeryItem.setAttribute('src', element.url);
  galeryItem.setAttribute('alt', element.alt);
  // galeryListRef.appendChild(galeryItem);
  galeryListRef.insertAdjacentElement('afterbegin', galeryItem);

  return galeryListRef;
});
console.log(createGalery);
const gallery = document.querySelector('#gallery');
gallery.append(...createGalery);
// gallery.insertAdjacentElement('afterbegin', createGalery);
gallery.classList.add('gallery-style');
console.log(gallery);
// const a = 5;
// gallery.insertAdjacentHTML('afterbegin', `<h1>Hello${a}</h1>`);
