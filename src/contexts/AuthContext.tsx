import {
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService, { ISignBody } from '../services/auth';
import TokenStorage from '../storage/token';

interface IAuthProvider {
	authService: AuthService;
	children?: ReactNode;
}

interface IAuthValue {
	signUp?: any;
	signIn?: any;
	tokenStorage?: TokenStorage;
}

const AuthContext = createContext<IAuthValue>({});

export default function AuthProvider({ authService, children }: IAuthProvider) {
	const navigate = useNavigate();

	const tokenStorage = authService.tokenStorage;

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
		[authService, navigate]
	);

	const signIn = useCallback(
		async ({ email, password }: ISignBody) => {
			await authService
				.signIn({ email, password })
				.then((res: any) => {
					// console.log(res);
					if (res.status === 200) {
						tokenStorage.saveToken(res.data.access_token);
						navigate('/todo');
					}
				})
				.catch((error: any) => {
					console.error(error);
					// setErrorMsg('아이디 혹은 비밀번호가 다릅니다.');
				});
		},
		[authService, navigate, tokenStorage]
	);

	const contextValue = useMemo(
		() => ({
			signUp,
			signIn,
			tokenStorage,
		}),
		[signUp, signIn, tokenStorage]
	);

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
