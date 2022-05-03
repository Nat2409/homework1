// import tableRowTemplate from '../templates/swapi-table-row.hbs';

// const baseUrl = 'https://swapi.dev/api/';
// const tableBody = document.querySelector('#swapi-planets tbody');
// // GET 'https://swapi.dev/api/people/1'

// fetch('https://swapi.dev/api/planets')
// 	.then(response => {
// 		console.log(response);
// 		return response.json();
// 	})
// 	.then(data => {
// 		// console.log(data);
// 		const markup = data.results
// 			.map(planet => tableRowTemplate(planet))
// 			.join('');
// 		console.log(markup);

// 		tableBody.insertAdjacentHTML('beforeend', markup);
// 	});
