import { useState } from 'react';
import { ITodo } from '../services/todo';

interface IToDoList {
	todo: ITodo;
	updateTodo: (id: number, todo: string, isCompleted: boolean) => Promise<void>;
	deleteTodo: (id: number) => Promise<void>;
}

export default function ToDoList({ todo, updateTodo, deleteTodo }: IToDoList) {
	const { id, todo: text, isCompleted, userId } = todo;
	const [editmode, setEditmode] = useState(false);
	const [todoText, setTodoText] = useState(text);

	const onChange = async (ev: React.ChangeEvent<HTMLInputElement>) => {
		await updateTodo(id, todoText, ev.target.checked);
	};

	const onEdit = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { value },
		} = ev;
		setTodoText(value);
	};

	const onUpdate = async () => {
		await updateTodo(id, todoText, isCompleted);

		setEditmode(false);
	};

	const onDelete = async () => {
		await deleteTodo(id);
	};

	return (
		<>
			{editmode ? (
				<>
					<input
						data-testid='modify-input'
						value={todoText}
						onChange={onEdit}
					/>
					<button data-testid='submit-button' onClick={onUpdate}>
						제출
					</button>
					<button
						data-testid='cancel-button'
						onClick={() => setEditmode(false)}
					>
						취소
					</button>
				</>
			) : (
				<>
					<label>
						<input
							type='checkbox'
							value={id}
							checked={isCompleted}
							onChange={onChange}
						/>
						<span>{todoText}</span>
					</label>
					<button data-testid='modify-button' onClick={() => setEditmode(true)}>
						수정
					</button>
					<button data-testid='delete-button' onClick={onDelete}>
						삭제
					</button>
				</>
			)}
		</>
	);
}
