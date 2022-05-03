import newsService from './services/news-service';
import spinner from './services/spinner';

import articleListItemsTemplate from '../templates/article-list-item.hbs    ';

const refs = {
	searchForm: document.querySelector('#search-form'),
	articleList: document.querySelector('#article-list'),
	loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function searchFormSubmitHandler(e) {
	e.preventDefault();

	console.dir(e.currentTarget);

	const form = e.currentTarget;
	const input = form.elements.query;
	const inputValue = input.value;
	clearListItems();

	newsService.resetPage();

	console.log(inputValue);

	newsService.searchQuery = inputValue;

	spinner.show();

	newsService
		.fetchArticles()
		.then(articles => {
			const markup = buildListItemsMarkup(articles);

			console.log(markup);
			spinner.hide();
			insertListItems(markup);
		})
		.catch(error => {
			console.warn(error);
		});

	input.value = '';
}

function insertListItems(items) {
	refs.articleList.insertAdjacentHTML('beforeend', items);
}

function loadMoreBtnHandler() {
	spinner.show();
	newsService
		.fetchArticles()
		.then(articles => {
			const markup = buildListItemsMarkup(articles);

			console.log(markup);
			spinner.hide();
			insertListItems(markup);
		})
		.catch(error => {
			console.warn(error);
		});
}
function buildListItemsMarkup(items) {
	return articleListItemsTemplate(items);
}

function clearListItems() {
	refs.articleList.innerHTML = '';
}
