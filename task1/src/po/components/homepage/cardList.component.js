import BaseComponent from '../common/base.component.js';

class CardList extends BaseComponent {
	constructor(selector) {
		super(selector);
	}

	get cards() {
		return this.rootEl.$$('.card');
	}

	get firstCard() {
		return this.cards[0];
	}

	get lastCard() {
		return this.cards[this.cards.length - 1];
	}

	static createSearchResults() {
		return new this('[data-test="search_completed"]');
	}

	static createSortResults() {
		return new this('[data-test="sorting_completed"]');
	}

	productName(card) {
		return card.$('[data-test="product-name"]');
	}
}

export default CardList;
