import menuTemplates from '../templates/menu.hbs';
import menu from '../menu.json';

// console.log(menu);
const menuRef = document.querySelector('.js-menu');
// console.log(menuTemplates);
const markup = menuTemplates(menu);

// console.log(markup);
menuRef.insertAdjacentHTML('beforeend', markup);
