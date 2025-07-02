import { Given, When } from '@wdio/cucumber-framework';
import { pages } from '../po';

Given('I am on the {string} page', async (pageName) => {
	return pages(pageName).open();
});

When('I enter {string} as password', async (password) => {
	await pages('login').loginForm.passwordField.setValue(password);
});

When('I enter {string} as email', async (email) => {
	await pages('login').loginForm.emailField.setValue(email);
});

When('I click the login button', async () => {
	await pages('login').loginForm.clickLoginBtn();
});

When(/^I sort items by "([^"]*)"$/, async (sortOption) => {
	const select = await pages('home').filters.sortSelect;
	await select.waitForExist({ timeout: 5000 });

	const map = {
		'name (a-z)': 1,
		'name (z-a)': 2,
	};
	const index = map[sortOption.toLowerCase()] ?? 1;

	await browser.execute(
		(el, idx) => {
			el.selectedIndex = idx;
			el.dispatchEvent(new Event('change', { bubbles: true }));
		},
		select,
		index,
	);

	await browser.pause(1000);
});

When('I change the language to {string}', async (language) => {
	await pages('home').header.clickLangSelect();

	await browser.waitUntil(async () =>
		pages('home').header.isLangSelectExpanded(),
	);

	const option = await pages('home').header.langOption(language);
	await option.waitForClickable({ timeout: 3000 });
	await option.click();
});

When('I enter {string} as search phrase', async (search) => {
	await pages('home').filters.searchField.setValue(search);
});

When('I click the search button', async () => {
	await pages('home').filters.clickSearchBtn();
});

When('I click the search input clear button', async () => {
	await pages('home').filters.clickClearSearchBtn();
});
