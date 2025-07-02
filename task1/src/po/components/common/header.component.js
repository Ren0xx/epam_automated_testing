import BaseComponent from './base.component.js';

class HeaderComponent extends BaseComponent {
	constructor() {
		super('#navbarSupportedContent');
	}

	get langSelect() {
		return this.rootEl.$('[data-test="language-select"]');
	}

	langOption(lang) {
		return this.rootEl.$(`[data-test="lang-${lang.toLowerCase()}"]`);
	}

	async isLangSelectExpanded() {
		const expanded = await this.langSelect.getAttribute('aria-expanded');
		return expanded === 'true';
	}

	async clickLangSelect() {
		await this.langSelect.click();
	}
}

export default HeaderComponent;
