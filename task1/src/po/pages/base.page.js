class BasePage {
    /**
     * @param {string} url
     */
    constructor(url) {
        this.url = url;
    }

    open() {
        return browser.url(this.url);
    }

    async assertTextVisibility(text, shouldBeVisible) {
        const elements = await $$('body *');
        const matchingElement = await elements.find(async (el) => {
            const elText = await el.getText();
            return elText.includes(text);
        });

        if (!matchingElement) {
            if (shouldBeVisible) {
                throw new Error(`Expected "${text}" to be visible, but it was not found.`);
            }
            return;
        }

        await browser.waitUntil(
            async () => (await matchingElement.isDisplayed()) === shouldBeVisible,
            {
                timeout: 5000,
                timeoutMsg: `Expected "${text}" to be ${shouldBeVisible ? 'visible' : 'not visible'}`,
            }
        );

        shouldBeVisible
            ? await expect(matchingElement).toBeDisplayed()
            : await expect(matchingElement).not.toBeDisplayed();
    }

}

export default BasePage;
