import fetchCountries from './servises/fetchCountries';

import '@pnotify/core/dist/BrightTheme.css';

import listOfCountriesTemplate from '../templates/list-of-countries-tempalte.hbs';
import countryTemplate from '../templates/country-templates.hbs';

const refs = {
	input: document.querySelector('#form-js'),
	oneCountry: document.querySelector('#one-country'),
	listOfCountries: document.querySelector('#list-of-countries'),
	pnotifyRef: document.querySelector('.pnotify'),
};

const _ = require('lodash');
const { error } = require('@pnotify/core');

refs.input.addEventListener('input', _.debounce(inputHandler, 2000));

function inputHandler(event) {
	clearListItems();
	const inputValue = event.target.value;
	console.log(inputValue);

	fetchCountries.query = inputValue;
	const fetchValue = fetchCountries.searchQuery();
	console.log(fetchValue);
	fetchValue
		.then(data => {
			if (data.length > 10) {
				console.log('too much countries we find');
				const myError = error({
					text: 'Too many matches found. Please, enter a more specific query!',
				});
				return myError;
			}

			if (data.length > 1 && data.length < 10) {
				console.log('we need return list of find countries');
				console.log(data);

				return incertListOfCountries(data);
			}

			if (data.length == 1) {
				console.log(data);
				return incertOneCountry(data);
			}
		})
		.catch('error');
}

function incertListOfCountries(data) {
	const names = data.map(element => element.name);
	console.dir(names);
	const markupList = listOfCountriesTemplate(names);
	console.log(markupList);
	return refs.listOfCountries.insertAdjacentHTML('beforeend', markupList);
}

function incertOneCountry(data) {
	const markup = countryTemplate(data);
	console.log(markup);
	return refs.oneCountry.insertAdjacentHTML('beforeend', markup);
}

function clearListItems() {
	refs.listOfCountries.innerHTML = '';
	refs.oneCountry.innerHTML = '';
}
