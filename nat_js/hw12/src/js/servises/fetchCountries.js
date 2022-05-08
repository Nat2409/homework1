const baseUrl = 'https://restcountries.com/v2/name';

export default {
	query: '',

	searchQuery() {
		const requestParam = `/${this.query}`;
		return fetch(baseUrl + requestParam)
			.then(response => response.json())
			.catch(console.warn);
	},
};
