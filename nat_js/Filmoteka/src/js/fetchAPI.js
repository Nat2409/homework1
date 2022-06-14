export default {
	baseUrl: 'https://api.themoviedb.org/3/',
	key: '3ca4f0fa98e22b27d06819a16b26fd68',

	popularMovie: 'movie/popular',
	searchMovie: 'search/movie',
	myKey: '?api_key=3ca4f0fa98e22b27d06819a16b26fd68',

	pageNumber: 1,
	numberOfPages: 0,
	// page: `&page=${this.pageNumber}`,

	// inputValue: '',
	// const query = '&query=';
	// const query = `&query=${inputValue}`;
	// idMovie: '',
	flag: false,
	genresArray: [],
	// detailsPageData: {},
	// renderFilms: [],

	incrementPage() {
		this.pageNumber += 1;
	},
	decrementPage() {
		if (this.pageNumber > 1) {
			this.pageNumber -= 1;
		}
	},
	resetPage() {
		this.pageNumber = 1;
	},

	fetchPopularMoviesList() {
		return fetch(
			this.baseUrl +
				this.popularMovie +
				this.myKey +
				`&page=${this.pageNumber}`,
		)
			.then(response => response.json())
			.catch(error => {
				console.warn(error);
			});
	},

	fetchDetailsMovie(idMovie) {
		return (
			fetch(this.baseUrl + `/movie/${idMovie}` + this.myKey)
				.then(response => response.json())
				// .then(data => {
				//   this.detailsPageData=data;
				//   // console.log(data);
				//   // renderDetailsPage(data);
				// })
				.catch(error => {
					console.warn(error);
				})
		);
	},

	fetchFilms(inputValue) {
		console.log('inputValue', inputValue);
		const query = `&query=${inputValue}`;
		const page = `&page=${this.pageNumber}`;
		// this.baseUrl + this.searchMovie + this.myKey + query + this.page,
		return (
			fetch(this.baseUrl + this.searchMovie + this.myKey + query + page)
				.then(response => response.json())
				// .then(data => this.renderMoviesGallery(data))
				.catch(error => {
					console.warn(error);
				})
		);
	},

	fetchGenres() {
		return fetch(this.baseUrl + 'genre/movie/list' + this.myKey)
			.then(response => response.json())
			.then(data => {
				// console.log(data);
				genresArray.push(...data.genres);
			})
			.catch(error => {
				console.warn(error);
			});
	},

	createCardFunc(data) {
		this.numberOfPages = data.total_pages;
		this.renderFilms = data.results.map(result => {
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
	},
};
