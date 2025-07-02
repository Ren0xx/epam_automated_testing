import BasePage from './base.page.js';
import { LoginForm } from '../components/';

class LoginPage extends BasePage {
	constructor() {
		super('auth/login');
		this.loginForm = new LoginForm();
	}
}

export default LoginPage;
