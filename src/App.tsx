import { Outlet } from 'react-router-dom';
import { createGlobalStyle, styled } from 'styled-components';
import AuthService from './services/auth';
import AuthProvider from './contexts/AuthContext';
import TokenStorage from './storage/token';

const tokenStorage = new TokenStorage();
const authService = new AuthService(tokenStorage);

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,body {
		width: 100%;
		min-height: 100vh;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	ul li, ol li {
		list-style: none;
	}

	button {
		cursor: pointer;
	}
`;

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
