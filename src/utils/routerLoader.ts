import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import TokenStorage from '../storage/token';

export const tokenLoader = ({ request }: LoaderFunctionArgs) => {
	const { url } = request;
	const targetUrl = url.split('/')[3];

	const token = new TokenStorage().getToken();

	if (!targetUrl) {
		return token ? redirect(ROUTES.TODO) : redirect(ROUTES.SIGNIN);
	} else {
		if (targetUrl.includes('sign') && token) {
			return redirect(ROUTES.TODO);
		}

		if (targetUrl.includes('todo') && !token) {
			return redirect(ROUTES.SIGNIN);
		}
	}

	return null;
};
