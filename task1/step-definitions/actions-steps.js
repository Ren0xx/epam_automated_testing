import {Given, When} from "@wdio/cucumber-framework";


Given("I am on the {string} page", async (pageName) => {
    const path = !pageName || pageName === 'main' ? '/' : `/${pageName}`;
    await browser.url(path);
});

When('I enter {string} as password', async (password) => {
    await $('[data-test="password"]').setValue(password);
});

When('I enter {string} as email', async (email) => {
    await $('[data-test="email"]').setValue(email);
});

When('I click the login button', async () => {
    await $('[data-test="login-submit"]').click();

});
When(/^I sort items by "([^"]*)"$/, async (sortOption) => {
    const select = await $('[data-test="sort"]');
    await select.waitForExist({timeout: 5000});

    const map = {
        'name (a-z)': 1,
        'name (z-a)': 2,
    };
    const index = map[sortOption.toLowerCase()] ?? 1;

    await browser.execute((el, idx) => {
        el.selectedIndex = idx;
        el.dispatchEvent(new Event('change', {bubbles: true}));
    }, select, index);
});

When("I change the language to {string}", async (language) => {
    const btn = await $('#language');
    await btn.click();

    await browser.waitUntil(
        async () => (await btn.getAttribute('aria-expanded')) === 'true',
    );

    const lang = language.toLowerCase();
    const option = await $(`[data-test="lang-${lang}"]`);
    await option.waitForClickable({timeout: 3000});
    await option.click();
});

When("I enter {string} as search phrase", async (search) => {
    await $('[data-test="search-query"]').setValue(search);
})

When("I click the search button", async () => {
    await $('[data-test="search-submit"]').click();
})

When("I click the search input clear button", async () => {
    await $('[data-test="search-reset"]').click();
})