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

    async shouldTextBeVisible(text) {
        await expect($('body')).toHaveText(expect.stringContaining(text));
    }

    async shouldTextNotBeVisible(text) {
        await expect($('body')).not.toHaveText(expect.stringContaining(text));
    }
}

export default BasePage;
