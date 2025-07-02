import LoginPage from '../pages/login.page.js';
import HomePage from '../pages/home.page.js';

/**
 * @param name {'login' | 'home'}
 */
export function pages(name) {
	const items = {
		login: new LoginPage(),
		home: new HomePage(),
	};
	return items[name.toLowerCase()];
}
