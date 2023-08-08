import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import GlobalFont from './styles/fonts';
import AuthService from './services/auth';
import AuthProvider from './contexts/AuthContext';
import TokenStorage from './storage/token';

const tokenStorage = new TokenStorage();
const authService = new AuthService(tokenStorage);

const Main = styled.main`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

function App() {
	return (
		<>
			<GlobalFont />
			<GlobalStyle />
			<AuthProvider authService={authService}>
				<Main>
					<Outlet />
				</Main>
			</AuthProvider>
		</>
	);
}

export default App;
