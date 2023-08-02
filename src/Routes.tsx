import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Signin from './pages/Signin';
import ToDo from './pages/ToDo';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '', element: <Home /> },
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
