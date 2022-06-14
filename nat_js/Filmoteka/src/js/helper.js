'use strict';
const galleryRef = document.querySelector('.home-page__list--js');

let genres = [];
let pageNumber = 1;
let renderFilms = '';

const baseUrl = 'https://api.themoviedb.org/3/';
const searchMovie = 'search/movie';
const popularMovie = 'movie/popular';
// const query = `&query=${searchQuery}`;
const page = `&page=${pageNumber}`;
const myKey = '?api_key=3ca4f0fa98e22b27d06819a16b26fd68';

function createCardFunc(imgPath, filmTitle, movieId) {
	const galleryItem = document.createElement('li');
	galleryItem.classList.add('home-page__item');
	const itemBox = document.createElement('div');
	itemBox.classList.add('item__photo-card');
	const itemImg = document.createElement('img');
	itemImg.classList.add('item__photo');
	itemImg.setAttribute('src', imgPath);
	itemImg.setAttribute('alt', movieId);
	const itemTitle = document.createElement('p');
	itemTitle.classList.add('item__title');
	itemTitle.textContent = filmTitle;
	itemBox.appendChild(itemImg);
	itemBox.appendChild(itemTitle);
	galleryItem.appendChild(itemBox);
	galleryRef.appendChild(galleryItem);

	return galleryRef;
}

createCardFunc();
galleryRef.addEventListener('click', activeDetailsPage);

function activeDetailsPage(event) {
	// if (event.target===)
	// const film = event.target;
}
