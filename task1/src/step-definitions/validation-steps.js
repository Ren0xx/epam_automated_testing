import { Then } from '@wdio/cucumber-framework';
import { pages } from '../po';

import {
	assert as chaiAssert,
	expect as chaiExpect,
	should as chaiShould,
} from 'chai';

chaiShould();

// using Chai expect
Then('the error message should be {string}', async (expectedMessage) => {
	const emailError = await pages('login').loginForm.emailErrorMsg;
	const passwordError = await pages('login').loginForm.passwordErrorMsg;

	const emailVisible = await emailError.isExisting();
	const passwordVisible = await passwordError.isExisting();

	const emailText = emailVisible ? await emailError.getText() : '';
	const passwordText = passwordVisible ? await passwordError.getText() : '';

	chaiExpect(expectedMessage)
		.to.be.a('string')
		.and.to.be.oneOf([emailText, passwordText]);
});

Then(/^the "(.*)" text should( not)? be visible$/, async (text, not) => {
	await pages('home').assertTextVisibility(text, !not);
});

Then(
	'the {string} item should be {string} in the sorted items list',
	async (itemText, position) => {
		const sortedResults = pages('home').sortedResults;

		const card =
			position === 'last'
				? await sortedResults.lastCard
				: await sortedResults.firstCard;

		chaiAssert.isNotNull(card, `Expected a "${position}" card but got null`);

		const productName = await sortedResults.productName(card);
		chaiAssert.isNotNull(productName, 'productName element not found');

		await productName.waitForDisplayed({ timeout: 5000 });
		const actualText = await productName.getText();

		chaiAssert.strictEqual(actualText, itemText);
	},
);

// using Chai should
Then('the search input should be empty', async () => {
	const value = await pages('home').filters.isSearchFieldEmpty();
	value.should.eql(true);
});
