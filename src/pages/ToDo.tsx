import { styled } from 'styled-components';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import Title from '../components/ui/Title';
import { useAuth } from '../contexts/AuthContext';
import TodoService, { ITodo } from '../services/todo';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UList = styled.ul`
	width: 260px;
	max-height: 400px;
	overflow-x: hidden;
	overflow-y: auto;

	& > li {
		display: flex;
		align-items: center;

		&:not(:last-child) {
			margin-bottom: 10px;
		}

		& input[type='text'] {
			flex: 1;
		}

		& button {
			flex: 0 0 42px;
			margin-left: 5px;
		}
	}
`;

export default function ToDo() {
	const { tokenStorage } = useAuth();
	const todoService = useMemo(() => {
		return new TodoService(tokenStorage!);
	}, [tokenStorage]);
	const [todos, setTodos] = useState<ITodo[]>([]);
	const navigate = useNavigate();

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
		if (!tokenStorage?.getToken()) {
			alert('로그인을 먼저 진행해주세요.');
			navigate('/signin');
		} else {
			todoService
				.getTodos()
				.then((res) => {
					// console.log(res);
					if (res.status === 200) {
						setTodos(res.data);
					}
				})
				.catch((error) => console.error(error));
		}
	}, [tokenStorage, todoService, navigate]);

	return (
		<>
			<Title title='Todo List' />
			<ToDoForm createTodo={createTodo} />
			<UList>
				{todos.map((todo) => (
					<li key={todo.id}>
						<ToDoList
							todo={todo}
							updateTodo={updateTodo}
							deleteTodo={deleteTodo}
						/>
					</li>
				))}
			</UList>
		</>
	);
}
