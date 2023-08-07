import { useState } from 'react';
import { styled } from 'styled-components';
import InputField from './ui/InputField';
import Button from './ui/Button';

const Form = styled.form`
	width: 260px;

	display: flex;
	gap: 10px;

	margin-bottom: 20px;

	& > input {
		flex: 1;
	}
`;

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
		<Form onSubmit={onSubmit}>
			<InputField
				type='text'
				name='newTodo'
				testId='new-todo-input'
				value={todo}
				onChange={onChange}
			/>
			<Button testId='new-todo-add-button' disabled={todo === ''}>
				추가
			</Button>
		</Form>
	);
}
