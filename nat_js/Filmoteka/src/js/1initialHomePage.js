'use strict';
import galleryTemplate from '../templates/homePage-item-template.hbs';

const galleryRef = document.querySelector('.home-page__list--js');
const galleryItemRef = document.querySelector('.home-page__item-js');

// galleryItemRef.addEventListener('click', activeDetailsPage);

//Search vs popular
// 'https://api.themoviedb.org/3/search/movie?api_key=3ca4f0fa98e22b27d06819a16b26fd68&query=%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB&page=1'

// https://api.themoviedb.org/3/movie/popular?api_key=3ca4f0fa98e22b27d06819a16b26fd68

const baseUrl = 'https://api.themoviedb.org/3/';
const searchMovie = 'search/movie';
const popularMovie = 'movie/popular';
const query = `&query=${searchQuery}`;
const page = `&page=${pageNumber}`;
const myKey = '?api_key=3ca4f0fa98e22b27d06819a16b26fd68';
const renderFilms = '';
let genres = [];
let pageNumber = 1;
const searchQuery = 'love';
// console.log(baseUrl + 'genre/movie/list' + myKey);

// function fetchPopularMoviesList() {
// 	return fetch(baseUrl + popularMovie + myKey)
// 		.then(response => response.json())
// 		.then(data => renderGallery(data))
// 		.catch(console.warn);
// }

fetchPopularMoviesList();

function fetchGenres() {
	return fetch(baseUrl + 'genre/movie/list' + myKey)
		.then(response => response.json)
		.then(genres => {
			console.log('genres:', genres);
		})
		.catch(console.warn);
}
console.log(fetchGenres());
// console.log(galleryRef);

function renderGallery(data) {
	// console.log(data);

	const markup = galleryTemplate(data);
	galleryRef.insertAdjacentHTML('beforeend', markup);
}

function createCardFunc(imgPath, filmTitle, movieId) {}
function activeDetailsPage(movieId, selectFilm = false) {}

// for detailsPage
// import detailsTemplate from '../templates/detailsPage.hbs';
// function renderDetailsPage(data) {
// 	const markup = detailsTemplate(data);
// 	galleryRef.insertAdjacentHTML('beforeend', markup);
// }

// function fetchPopularMoviesList() {
// 	return fetch(baseUrl + popularMovie + myKey)
// 		.then(response => response.json())
// 		.then(data => renderDetailsPage(data))
// 		.catch(console.warn);
// }

import libraryPageTemplate from '../templates/libraryPageTemplate.hbs';
function renderlibraryPage(data) {
	const markup = libraryPageTemplate(data);
	// console.log(data);
	// console.log(markup);
	galleryRef.insertAdjacentHTML('beforeend', markup);
}

function fetchPopularMoviesList() {
	return fetch(baseUrl + popularMovie + myKey)
		.then(response => response.json())
		.then(data => renderlibraryPage(data))
		.catch(console.warn);
}
