const baseUrl =
	'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

export default {
	query: '',
	page: 1,
	perPage: '12',
	key: '27577262-b565faafd07aa24e5c2800c8c',
	searchQuery() {
		const requestParam = `&q=${this.query}`;
		const numberOfPage = `&page=${this.page}`;
		const quantityPerPage = `&per_page=${this.perPage}`;
		const myKey = `&key=${this.key}`;
		console.log(
			baseUrl + requestParam + numberOfPage + quantityPerPage + myKey,
		);
		return fetch(
			baseUrl + requestParam + numberOfPage + quantityPerPage + myKey,
		)
			.then(response => response.json())
			.catch(console.warn);
	},
	// pageIncrement: (this.page += 1),
	incrementPage() {
		this.page += 1;
	},
	resetPage() {
		this.page = 1;
	},
};
