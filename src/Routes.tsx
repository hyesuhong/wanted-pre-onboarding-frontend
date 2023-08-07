import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Signin from './pages/Signin';
import ToDo from './pages/ToDo';

const checkAuthToken = ({ request }: { request: Request }) => {
	const { pathname } = new URL(request.url);

	const token = localStorage.getItem('access_token');

	if (pathname.includes('sign')) {
		if (token) return redirect('/todo');
	} else {
		if (!token) return redirect('/signin');
	}

	return null;
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <Home />,
				loader: () => {
					const token = localStorage.getItem('access_token');

					if (token) {
						return <Signin />;
					} else {
						return <ToDo />;
					}
				},
			},
			{
				path: '/signup',
				element: <Signup />,
				loader: checkAuthToken,
			},
			{
				path: '/signin',
				element: <Signin />,
				loader: checkAuthToken,
			},
			{
				path: '/todo',
				element: <ToDo />,
				loader: checkAuthToken,
			},
		],
		errorElement: <NotFound />,
	},
]);

export default router;
