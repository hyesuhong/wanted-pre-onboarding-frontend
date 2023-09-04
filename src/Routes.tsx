import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ToDo from './pages/ToDo';
import { ROUTES } from './constants/routes';
import { tokenLoader } from './utils/routerLoader';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: ROUTES.SIGNUP,
				element: <Signup />,
				loader: tokenLoader,
			},
			{
				path: ROUTES.SIGNIN,
				element: <Signin />,
				loader: tokenLoader,
			},
			{
				path: ROUTES.TODO,
				element: <ToDo />,
				loader: tokenLoader,
			},
		],
		loader: tokenLoader,
		errorElement: <NotFound />,
	},
]);

export default router;
