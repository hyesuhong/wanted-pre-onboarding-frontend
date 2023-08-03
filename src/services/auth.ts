import axios from 'axios';
import { BASE_PATH } from './constants';

export interface ISignBody {
	email: string;
	password: string;
}

export default class AuthService {
	async signUp({ email, password }: ISignBody) {
		return await axios.post(
			`${BASE_PATH}/auth/signup`,
			{
				email,
				password,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	}

	async signIn({ email, password }: ISignBody) {
		return await axios.post(
			`${BASE_PATH}/auth/signin`,
			{
				email,
				password,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	}
}

// export const postSignUp = async (body: ISignBody) => {
// 	const { email, password } = body;
// 	return await axios.post(
// 		`${BASE_PATH}/auth/signup`,
// 		{
// 			email,
// 			password,
// 		},
// 		{
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		}
// 	);
// };

// export const postSignIn = async (body: ISignBody) => {
// 	const { email, password } = body;
// 	return await axios.post(
// 		`${BASE_PATH}/auth/signin`,
// 		{
// 			email,
// 			password,
// 		},
// 		{
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		}
// 	);
// };
