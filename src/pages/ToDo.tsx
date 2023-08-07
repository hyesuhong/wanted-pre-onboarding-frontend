import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import { useAuth } from '../contexts/AuthContext';
import TodoService, { ITodo } from '../services/todo';
import { useEffect, useState } from 'react';

export default function ToDo() {
	const { tokenStorage } = useAuth();
	const todoService = new TodoService(tokenStorage!);
	const [todos, setTodos] = useState<ITodo[]>([]);

	const createTodo = async (todo: string) => {
		await todoService
			.createTodo(todo)
			.then((res) => {
				// console.log(res);
				if (res.status === 201) {
					setTodos((prev) => [...prev, res.data]);
				}
			})
			.catch((error) => console.error(error));
	};

	const updateTodo = async (id: number, todo: string, isCompleted: boolean) => {
		await todoService
			.updateTodo(id, todo, isCompleted)
			.then((res) => {
				if (res.status === 200) {
					// console.log(res);
					const { id } = res.data;
					setTodos((prev) => {
						const targetIndex = prev.findIndex((item) => item.id === id);
						const newTodo = res.data;
						return [
							...prev.slice(0, targetIndex),
							newTodo,
							...prev.slice(targetIndex + 1),
						];
					});
				}
			})
			.catch(console.error);
	};

	const deleteTodo = async (id: number) => {
		await todoService
			.deleteTodo(id)
			.then((res) => {
				// console.log(res);
				if (res.status === 204) {
					setTodos((prev) => {
						const targetIndex = prev.findIndex((item) => item.id === id);
						return [
							...prev.slice(0, targetIndex),
							...prev.slice(targetIndex + 1),
						];
					});
				}
			})
			.catch(console.error);
	};

	useEffect(() => {
		todoService
			.getTodos()
			.then((res) => {
				// console.log(res);
				if (res.status === 200) {
					setTodos(res.data);
				}
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<>
			<ToDoForm createTodo={createTodo} />
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<ToDoList
							todo={todo}
							updateTodo={updateTodo}
							deleteTodo={deleteTodo}
						/>
					</li>
				))}
			</ul>
		</>
	);
}
