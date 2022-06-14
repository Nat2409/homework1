'use strict';
import fetchAPI from './fetchAPI';
import galleryPopularMoviesTemplate from '../templates/homePage-item-template.hbs';
import libraryPageTemplate from '../templates/libraryPageTemplate.hbs';
import detailsTemplate from '../templates/detailsPage.hbs';

const galleryRef = document.querySelector('.home-page__list--js');

galleryRef.addEventListener('click', activeDetailsPage);

fetchAPI.fetchPopularMoviesList().then(data => {
	console.log('popularData:', data);
	createCardFunc(data);
	// renderPopularMoviesGallery(data);
});

function renderDetailsPage(data) {
	const dataMovie = {};
	// const { genres, poster_path } = data;
	const genresList = data.genres.map(genre => ' ' + genre.name.toLowerCase());
	const imgPath = data.poster_path;
	const release = data.release_date.substring(0, 4);
	// if (data.release_date === '') {
	// 	release = 'coming soon';
	// }
	// const popularityMovie = Number.parseInt(data.popularity);
	const popularityMovie = data.popularity;
	const titleOrigin = data.original_title;
	const titleMovie = data.title;
	const voteAverage = data.vote_average;
	const voteCount = data.vote_count;
	const overviewMovie = data.overview;

	// const dataMovie = {
	// 	...data,
	// 	genres: genres.map(),
	// };

	dataMovie.genres = genresList;
	dataMovie.poster_path = imgPath;
	dataMovie.release_date = release;
	dataMovie.popularity = popularityMovie;
	dataMovie.original_title = titleOrigin;
	dataMovie.title = titleMovie;
	dataMovie.vote_average = voteAverage;
	dataMovie.vote_count = voteCount;
	dataMovie.overview = overviewMovie;

	const markupMovie = detailsTemplate(dataMovie);
	galleryRef.insertAdjacentHTML('beforeend', markupMovie);
}

function activeDetailsPage(event) {
	if (event.target.offsetParent.nodeName === 'LI') {
		// paginationRef.classList.add('pagination-opacity');
		const idMovie = event.target.offsetParent.id;
		console.log(event.target.offsetParent.id);
		galleryRef.innerHTML = '';

		// paginationRef.classList.add('pagination-opacity');

		fetchAPI.fetchDetailsMovie(idMovie).then(data => {
			renderDetailsPage(data);
		});
	}
}

function renderlibraryPage(renderFilms) {
	const markup = libraryPageTemplate(renderFilms);
	galleryRef.insertAdjacentHTML('beforeend', markup);
}

function renderPopularMoviesGallery(renderFilms) {
	const markup = galleryPopularMoviesTemplate(renderFilms);
	galleryRef.insertAdjacentHTML('beforeend', markup);
}

function createCardFunc(data) {
	fetchAPI.numberOfPages = data.total_pages;
	const renderFilms = data.results.map(result => {
		let results = new Object();
		results.id = result.id;

		results.backdrop_path = result.backdrop_path;
		if (result.backdrop_path === null) {
			results.backdrop_path = '/6qWHzcmnGpCwwyfYBH6rTuLJmm8.jpg';
		}

		results.release_date = result.release_date.substring(0, 4);
		if (result.release_date === '') {
			results.release_date = 'coming soon';
		}
		results.original_title = result.original_title;
		results.title = result.title;
		results.vote_average = result.vote_average;
		return results;
	});

	renderPopularMoviesGallery(renderFilms);
	// renderlibraryPage(renderFilms);
}
