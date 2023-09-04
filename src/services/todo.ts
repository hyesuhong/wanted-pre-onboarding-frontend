import axios from 'axios';
import { BASE_PATH } from '../constants/api';
import TokenStorage from '../storage/token';

export interface ITodo {
	id: number;
	todo: string;
	isCompleted: boolean;
	userId: number;
}

export default class TodoService {
	readonly access_token;

	constructor(tokenStorage: TokenStorage) {
		this.access_token = tokenStorage.getToken();
	}

	async getTodos() {
		return await axios.get(`${BASE_PATH}/todos`, {
			headers: {
				Authorization: `Bearer ${this.access_token}`,
			},
		});
	}

	async createTodo(todo: string) {
		return await axios.post(
			`${BASE_PATH}/todos`,
			{ todo },
			{
				headers: {
					Authorization: `Bearer ${this.access_token}`,
					'Content-Type': 'application/json',
				},
			}
		);
	}

	async updateTodo(id: number, todo: string, isCompleted: boolean) {
		const url = `${BASE_PATH}/todos/${id}`;
		return await axios.put(
			url,
			{ todo, isCompleted },
			{
				headers: {
					Authorization: `Bearer ${this.access_token}`,
					'Content-Type': 'application/json',
				},
			}
		);
	}

	async deleteTodo(id: number) {
		const url = `${BASE_PATH}/todos/${id}`;
		return await axios.delete(url, {
			headers: {
				Authorization: `Bearer ${this.access_token}`,
			},
		});
	}
}

export const createTodo = {
	url: `${BASE_PATH}/todos`,
	needAuth: true,
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
};
/* 
Method: POST
Headers:
	Authorization: Bearer access_token
	Content-Type: application/json
Body:
	todo: string
---
RES
status: 201 Created
*/

export const getTodos = {
	url: `${BASE_PATH}/todos`,
	needAuth: true,
	method: 'GET',
	headers: {},
};
/* 
Method: GET
Headers:
	Authorization: Bearer access_token
---
RES
status: 200 OK
*/

export const updateTodo = {
	url: `${BASE_PATH}/todos/:id`,
	needID: true,
	needAuth: true,
	method: 'PUT',
	headers: {
		'Content-Type': 'application/json',
	},
};
/* 
Method: PUT
Headers:
	Authorization: Bearer access_token
	Content-Type: application/json
Body:
	todo: string
	isCompleted: boolean
---
RES
status: 200 OK
*/

export const deleteTodo = {
	url: `${BASE_PATH}/todos/:id`,
	needID: true,
	needAuth: true,
	method: 'DELETE',
	headers: {},
};
/* 
Method: DELETE
Headers:
	Authorization: Bearer access_token
---
RES
status: 204 No Content
*/
