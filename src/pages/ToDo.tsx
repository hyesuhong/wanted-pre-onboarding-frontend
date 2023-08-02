import ToDoList from '../components/ToDoList';

export default function ToDo() {
	return (
		<>
			<form>
				<input type='text' name='newTodo' data-testid='new-todo-input' />
				<button data-testid='new-todo-add-button'>추가</button>
			</form>
			<ul>
				<li>
					<ToDoList todo='TODO 1' />
				</li>
			</ul>
		</>
	);
}
