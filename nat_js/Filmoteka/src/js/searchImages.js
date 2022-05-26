import apiService from './servises/apiService';
import galleryItemTemplate from '../templates/gallery-item-template.hbs';
import mySuccess from './servises/pnotify';
// import '@pnotify/core/dist/BrightTheme.css';

const refs = {
	input: document.querySelector('#search-form'),
	button: document.querySelector('.load-more'),
	gallery: document.querySelector('.gallery'),
};
const _ = require('lodash');
const element = document.getElementById('my-element-selector');

refs.input.addEventListener('input', _.debounce(inputHandler, 3000));
refs.button.addEventListener('click', buttonHandler);

function inputHandler(event) {
	clearListItems();
	apiService.resetPage();
	const inputValue = event.target.value;

	apiService.query = inputValue;
	const fetchValue = apiService.searchQuery();

	fetchValue.then(data => incertGalleryOfImages(data)).catch('error');
}

function incertGalleryOfImages(data) {
	const markup = galleryItemTemplate(data);
	refs.gallery.insertAdjacentHTML('beforeend', markup);
	element.scrollIntoView({
		behavior: 'smooth',
		block: 'end',
	});
}

function clearListItems() {
	refs.gallery.innerHTML = '';
}

function buttonHandler(event) {
	console.log('завантажити наступну серію картинок!');
	mySuccess();
	apiService.incrementPage();
	apiService
		.searchQuery()
		.then(data => incertGalleryOfImages(data))
		.catch('error');
}

//  function scroll(event) {
// 	console.log('галерея загружена');
// 	element.scrollIntoView({
// 		behavior: 'smooth',
// 		block: 'end',
// 	});
// }
// // const { error } = require('@pnotify/core');
