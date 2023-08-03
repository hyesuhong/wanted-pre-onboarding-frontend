import { useState } from 'react';
import { ITodo } from '../services/todo';

interface IToDoList {
	todo: ITodo;
}
export default function ToDoList({ todo }: IToDoList) {
	const { id, todo: text, isCompleted, userId } = todo;
	const [editmode, setEditmode] = useState(false);

	return (
		<>
			{editmode ? (
				<>
					<input data-testid='modify-input' />
					<button
						data-testid='submit-button'
						onClick={() => setEditmode(false)}
					>
						제출
					</button>
					<button data-testid='cancel-button'>취소</button>
				</>
			) : (
				<>
					<label>
						<input type='checkbox' />
						<span>{text}</span>
					</label>
					<button data-testid='modify-button' onClick={() => setEditmode(true)}>
						수정
					</button>
					<button data-testid='delete-button'>삭제</button>
				</>
			)}
		</>
	);
}
