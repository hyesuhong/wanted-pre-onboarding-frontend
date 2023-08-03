import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import AuthService from './services/auth';
import AuthProvider from './contexts/AuthContext';

const authService = new AuthService();

function App() {
	return (
		<>
			<AuthProvider authService={authService}>
				<Header />
				<main>
					<Outlet />
				</main>
			</AuthProvider>
		</>
	);
}

export default App;
