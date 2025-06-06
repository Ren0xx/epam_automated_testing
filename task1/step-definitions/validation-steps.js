import {Then} from "@wdio/cucumber-framework";

import {assert as chaiAssert, expect as chaiExpect, should as chaiShould} from "chai";

chaiShould();

// using Chai expect
Then("the error message should be {string}", async (expectedMessage) => {
    const emailError = await $('[data-test="email-error"]');
    const passwordError = await $('[data-test="password-error"]');

    const emailVisible = await emailError.isExisting();
    const passwordVisible = await passwordError.isExisting();

    const emailText = emailVisible ? await emailError.getText() : "";
    const passwordText = passwordVisible ? await passwordError.getText() : "";

    chaiExpect(expectedMessage)
        .to.be.a("string")
        .and.to.be.oneOf([emailText, passwordText]);
});

// using default WDIO expect - no changes
Then(/^the "(.*)" text should( not)? be visible$/, async (text, not) => {
    const body = await $('body');

    if (not) {
        await expect(body).not.toHaveText(expect.stringContaining(text));
    } else {
        await expect(body).toHaveText(expect.stringContaining(text));
    }
});

// using Chai assert
Then("the {string} item should be {string} in the items list", async (itemText, position) => {
    const cards = await $$(".container .card");

    let index;
    if (position === "first") index = 0;
    else if (position === "last") index = cards.length - 1;
    else index = parseInt(position, 10) - 1;

    const card = cards[index];
    const nameElem = await card.$('[data-test="product-name"]');
    await nameElem.waitForDisplayed({timeout: 5000});

    const actualText = await nameElem.getText();
    chaiAssert.strictEqual(actualText, itemText);
});

// using Chai should
Then("the search input should be empty", async () => {
    const input = await $('[data-test="search-query"]');
    const value = await input.getValue();
    value.should.eql("");
});