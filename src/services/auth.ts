import axios, { AxiosError, AxiosResponse } from 'axios';
import { BASE_PATH } from './constants';

export type successFC = (response: AxiosResponse) => void;
export type errorFC = (error: AxiosError) => void;

interface ISignBody {
	email: string;
	password: string;
}

export const postSignUp = async (body: ISignBody) => {
	const { email, password } = body;
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
};

export const postSignIn = async (body: ISignBody) => {
	const { email, password } = body;
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
};

// export const postSignIn = {
// 	url: `${BASE_PATH}/auth/signin`,
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// };
/* 
Headers:
	Content-Type: application/json
Body:
	email: string
	password: string
---
RES
status: 200 OK
*/
