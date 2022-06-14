import fetchAPI from './fetchAPI';
import galleryPopularMoviesTemplate from '../templates/homePage-item-template.hbs';
import libraryPageTemplate from '../templates/libraryPageTemplate.hbs';
import detailsTemplate from '../templates/detailsPage.hbs';
import searchFilmsTemplate from '../templates/searchFilmsTemplate.hbs';

const galleryRef = document.querySelector('.home-page__list--js');

const formRef = document.querySelector('.main__form-js');
const inputRef = document.querySelector('input[type="text"]');
const paginationRef = document.querySelector('.pagination-js');
const prewBtnRef = document.querySelector('.pagination__btn-prew-js');
const nextBtnRef = document.querySelector('.pagination__btn-next-js');
const numberOfPageRef = document.querySelector('.pagination__page-js');
const formErrorRef = document.querySelector('.form_error-js');
const _ = require('lodash');
let inputValue = '';
// inputRef.addEventListener('input', _.debounce(searchQuery, 3000));
inputRef.addEventListener('input', searchQuery);
formRef.addEventListener('submit', searchFilms);
paginationRef.addEventListener('click', paginationNavigation);

numberOfPageRef.textContent = `${fetchAPI.pageNumber}`;
if (fetchAPI.pageNumber === 1) {
	prewBtnRef.classList.add('pagination-opacity');
}

function searchQuery(event) {
	inputValue = event.target.value;

	// fetchAPI
	// 	.fetchFilms(inputValue)
	// 	.then(data => renderSearchFilmsGallery(data))
	// 	.catch(error => {
	// 		console.warn(error);
	// 	});
}

function searchFilms(event) {
	event.preventDefault();
	paginationRef.classList.remove('pagination-opacity');
	fetchAPI.resetPage();
	numberOfPageRef.textContent = `${fetchAPI.pageNumber}`;
	if (fetchAPI.pageNumber === 1) {
		prewBtnRef.classList.add('pagination-opacity');
	}
	console.log('pageNumber', fetchAPI.pageNumber);
	// paginationRef.classList.remove('pagination-opacity');

	if (inputValue === '') {
		fetchAPI.fetchPopularMoviesList().then(data => {
			renderSearchFilmsGallery(data);
			// console.log('dataWhenEmpty', data);
			// fetchAPI.createCardFunc(data);
			// const gallery = searchFilmsTemplate(fetchAPI.renderFilms);
			// galleryRef.insertAdjacentHTML('beforeend', gallery);
			// renderPopularMoviesGallery(data);
		});
		return;
	}

	fetchAPI
		.fetchFilms(inputValue)
		.then(data => renderSearchFilmsGallery(data))
		.catch(error => {
			console.warn(error);
		});

	// const newData = fetchAPI.renderFilms;
	// console.log('newData:', newData);
	// renderPopularMoviesGallery(newData);
	// fetchAPI.incrementPage();
	// fetchAPI.fetchFilms(inputValue).then(data => console.log(data));
	// console.log('event.currenttarget.value:', event.currenttarget.value);
}
function renderSearchFilmsGallery(data) {
	console.log('data:', data);
	console.log('data.results:', data.results);
	console.log('data.results.length:', data.results.length);
	formErrorRef.classList.remove('form_error-opacity');
	galleryRef.innerHTML = '';
	if (data.results.length < 20) {
		paginationRef.classList.add('pagination-opacity');
	}
	if (data.results.length === 0) {
		formErrorRef.classList.add('form_error-opacity');

		console.log('empty:', error);
		return;
	}

	fetchAPI.createCardFunc(data);
	const markup = libraryPageTemplate(fetchAPI.renderFilms);
	galleryRef.insertAdjacentHTML('beforeend', markup);
	// fetchAPI.incrementPage();
}

function paginationNavigation(event) {
	console.log('eventId:', event.target.id);
	let btnId = event.target.id;

	if (btnId === 'btn-prew') {
		console.log('we pushed prew button');
		fetchAPI.decrementPage();
		console.log('pageNamber', fetchAPI.pageNumber);
		console.log('inputValue', inputValue);

		fetchAPI
			.fetchPopularMoviesList()
			.then(data => renderSearchFilmsGallery(data))
			.catch(error => {
				console.warn(error);
			});
		if (inputValue !== '') {
			fetchAPI
				.fetchFilms(inputValue)
				.then(data => renderSearchFilmsGallery(data))
				.catch(error => {
					console.warn(error);
				});
		}
		// fetchAPI
		// 	.fetchFilms(inputValue)
		// 	.then(data => renderSearchFilmsGallery(data))
		// 	.catch(error => {
		// 		console.warn(error);
		// 	});
	}
	if (btnId === 'btn-next') {
		console.log('we pushed next button');
		fetchAPI.incrementPage();
		console.log('pageNumber', fetchAPI.pageNumber);
		// if ((inputValue = '')) {
		fetchAPI
			.fetchPopularMoviesList()
			.then(data => renderSearchFilmsGallery(data))
			.catch(error => {
				console.warn(error);
			});
		if (inputValue !== '') {
			fetchAPI
				.fetchFilms(inputValue)
				.then(data => renderSearchFilmsGallery(data))
				.catch(error => {
					console.warn(error);
				});
		}
	}
	numberOfPageRef.textContent = `${fetchAPI.pageNumber}`;
	// if (fetchAPI.pageNumber === 1) {
	// 	prewBtnRef.classList.add('pagination-opacity');
	// }
	if (fetchAPI.pageNumber > 1) {
		prewBtnRef.classList.remove('pagination-opacity');
	}
	if (fetchAPI.pageNumber === 1) {
		prewBtnRef.classList.add('pagination-opacity');
	}
	if (fetchAPI.pageNumber === fetchAPI.numberOfPages) {
		nextBtnRef.classList.add('pagination-opacity');
	}
	if (fetchAPI.pageNumber < fetchAPI.numberOfPages) {
		nextBtnRef.classList.remove('pagination-opacity');
	}
}
