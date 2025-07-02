import BasePage from './base.page.js';
import { CardList, Filters, Header } from '../components';

class Homepage extends BasePage {
	constructor() {
		super('/');
		this.header = new Header();
		this.filters = new Filters();
		this.searchResults = CardList.createSearchResults();
		this.sortedResults = CardList.createSortResults();
	}
}

export default Homepage;
