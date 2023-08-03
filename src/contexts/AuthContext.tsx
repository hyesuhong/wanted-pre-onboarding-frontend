import {
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useMemo,
} from 'react';
import AuthService, { ISignBody } from '../services/auth';
import { useNavigate } from 'react-router-dom';

interface IAuthProvider {
	authService: AuthService;
	children?: ReactNode;
}

interface IAuthValue {
	signUp?: any;
	signIn?: any;
}

const AuthContext = createContext<IAuthValue>({});

export default function AuthProvider({ authService, children }: IAuthProvider) {
	const navigate = useNavigate();

	const signUp = useCallback(
		async ({ email, password }: ISignBody) => {
			await authService
				.signUp({ email, password })
				.then((res) => {
					if (res.status === 201) {
						navigate('/signin');
					}
				})
				.catch((error) => {
					console.error(error);
					// setErrorMsg('이미 존재하는 메일 주소 입니다.');
				});
		},
		[authService]
	);

	const signIn = useCallback(
		async ({ email, password }: ISignBody) => {
			await authService
				.signIn({ email, password })
				.then((res: any) => {
					// console.log(res);
					if (res.status === 200) {
						localStorage.setItem('access_token', res.data.access_token);
						navigate('/todo');
					}
				})
				.catch((error: any) => {
					console.error(error);
					// setErrorMsg('아이디 혹은 비밀번호가 다릅니다.');
				});
		},
		[authService]
	);

	const contextValue = useMemo(
		() => ({
			signUp,
			signIn,
		}),
		[signUp, signIn]
	);

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
