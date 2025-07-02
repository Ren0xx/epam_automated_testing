import BaseComponent from '../common/base.component.js';

class FiltersComponent extends BaseComponent {
	constructor() {
		super('#filters');
	}

	get sortSelect() {
		return this.rootEl.$('[data-test="sort"]');
	}

	get searchField() {
		return this.rootEl.$('[data-test="search-query"]');
	}

	get searchSubmitBtn() {
		return this.rootEl.$('[data-test="search-submit"]');
	}

	get clearSearchFieldBtn() {
		return this.rootEl.$('[data-test="search-reset"]');
	}

	async clickSearchBtn() {
		await this.searchSubmitBtn.click();
	}

	async clickClearSearchBtn() {
		await this.clearSearchFieldBtn.click();
	}

	async isSearchFieldEmpty() {
		const value = await this.searchField.getValue();
		return value === '';
	}
}

export default FiltersComponent;
