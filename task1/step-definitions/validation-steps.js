import {Then} from "@wdio/cucumber-framework";

Then('the error message should be {string}', async (expectedMessage) => {
    const emailError = await $('[data-test="email-error"]');
    const passwordError = await $('[data-test="password-error"]');

    const emailVisible = await emailError.isExisting()
    const passwordVisible = await passwordError.isExisting();

    const emailText = emailVisible ? await emailError.getText() : '';
    const passwordText = passwordVisible ? await passwordError.getText() : '';

    expect(
        emailText === expectedMessage || passwordText === expectedMessage
    ).toBe(true);
});

Then(/^the "(.*)" text should( not)? be visible$/, async (text, not) => {
    const body = await $('body');

    if (not) {
        await expect(body).not.toHaveText(expect.stringContaining(text));
    } else {
        await expect(body).toHaveText(expect.stringContaining(text));
    }
});

Then('the {string} item should be {string} in the items list', async (itemText, position) => {
    const cards = await $$('.container .card');

    let index;
    if (position === 'first') index = 0;
    else if (position === 'last') index = cards.length - 1;
    else index = parseInt(position, 10) - 1;

    const card = cards[index];
    const nameElem = await card.$('[data-test="product-name"]');
    await nameElem.waitForDisplayed({timeout: 5000});

    await expect(nameElem).toHaveText(itemText);
});

Then("the search input should be empty", async () => {
    const input = await $('[data-test="search-query"]');
    await expect(input).toHaveValue('');
});