import ToDoList from '../components/ToDoList';
import { useAuth } from '../contexts/AuthContext';
import TodoService, { ITodo } from '../services/todo';
import { useEffect, useState } from 'react';

export default function ToDo() {
	const { tokenStorage } = useAuth();

	const todoService = new TodoService(tokenStorage!);

	const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		todoService
			.getTodos()
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					setTodos(res.data);
				}
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<>
			<form>
				<input type='text' name='newTodo' data-testid='new-todo-input' />
				<button data-testid='new-todo-add-button'>추가</button>
			</form>
			<ul>
				{todos.map((todo) => (
					<li>
						<ToDoList todo={todo} />
					</li>
				))}
			</ul>
		</>
	);
}
