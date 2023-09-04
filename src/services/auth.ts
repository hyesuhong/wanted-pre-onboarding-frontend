import axios from 'axios';
import { BASE_PATH } from '../constants/api';
import TokenStorage from '../storage/token';

export interface ISignBody {
	email: string;
	password: string;
}

export default class AuthService {
	readonly tokenStorage;

	constructor(tokenStorage: TokenStorage) {
		this.tokenStorage = tokenStorage;
	}

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
