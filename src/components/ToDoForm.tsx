import { useState } from 'react';

interface Props {
	createTodo: (todo: string) => Promise<void>;
}

export default function ToDoForm({ createTodo }: Props) {
	const [todo, setTodo] = useState('');

	const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		await createTodo(todo);

		setTodo('');
	};

	const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { value },
		} = ev;

		setTodo(value);
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				name='newTodo'
				data-testid='new-todo-input'
				value={todo}
				onChange={onChange}
			/>
			<button data-testid='new-todo-add-button'>추가</button>
		</form>
	);
}
