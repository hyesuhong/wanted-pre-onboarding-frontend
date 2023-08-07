import { useState } from 'react';
import { ITodo } from '../services/todo';
import InputField from './ui/InputField';
import Button from './ui/Button';
import Checkbox from './ui/Checkbox';

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
					<InputField
						type='text'
						testId='modify-input'
						value={todoText}
						onChange={onEdit}
					/>
					<Button testId='submit-button' onClick={onUpdate} $elSize='small'>
						제출
					</Button>
					<Button
						testId='cancel-button'
						onClick={() => setEditmode(false)}
						$elSize='small'
						$isPrimary={false}
					>
						취소
					</Button>
				</>
			) : (
				<>
					<Checkbox
						itemId={id}
						checked={isCompleted}
						onChange={onChange}
						todoText={todoText}
					/>

					<Button
						testId='modify-button'
						onClick={() => setEditmode(true)}
						$elSize='small'
					>
						수정
					</Button>
					<Button
						testId='delete-button'
						onClick={onDelete}
						$elSize='small'
						$isPrimary={false}
					>
						삭제
					</Button>
				</>
			)}
		</>
	);
}
