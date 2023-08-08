import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ToDo from './pages/ToDo';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: localStorage.getItem('access_token') ? <ToDo /> : <Signin />,
			},
			{
				path: '/signup',
				element: <Signup />,
			},
			{
				path: '/signin',
				element: <Signin />,
			},
			{
				path: '/todo',
				element: <ToDo />,
			},
		],
		errorElement: <NotFound />,
	},
]);

export default router;
