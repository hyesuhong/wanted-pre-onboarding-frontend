const KEY = 'access_token';

export default class TokenStorage {
	saveToken(token: string) {
		localStorage.setItem(KEY, token);
	}

	getToken() {
		return localStorage.getItem(KEY);
	}

	clearToken() {
		localStorage.removeItem(KEY);
	}
}
