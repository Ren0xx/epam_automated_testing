import BaseComponent from "../common/base.component.js";

class LoginForm extends BaseComponent {

    constructor() {
        super('.auth-container')
    }

    get emailField() {
        return this.rootEl.$('[data-test="email"]')
    }

    get passwordField() {
        return this.rootEl.$('[data-test="password"]')
    }

    get loginBtn() {
        return this.rootEl.$('[data-test="login-submit"]')
    }

    get passwordErrorMsg() {
        return this.rootEl.$('[data-test="password-error"]')
    }

    get emailErrorMsg() {
        return this.rootEl.$('[data-test="email-error"]')
    }

    async clickLoginBtn() {
        await this.loginBtn.click();
    }

}

export default LoginForm
