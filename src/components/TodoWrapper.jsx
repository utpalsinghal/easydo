import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		setTodos([
			...todos,
			{ id: uuidv4(), task: todo, isComplete: false, isEditing: false },
		]);
	};

	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
			)
		);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const enableEdit = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isEditing: true } : todo
			)
		);
	};

	const editTodo = (id, value) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, task: value, isEditing: false } : todo
			)
		);
	};

	return (
		<div className='wrapper'>
			<h1 className='tagline'>Your future starts here!</h1>
			<div className='todo-form'>
				<CreateTodo addTodo={addTodo} />
				<TodoList
					todos={todos}
					toggleComplete={toggleComplete}
					deleteTodo={deleteTodo}
					editTodo={editTodo}
					enableEdit={enableEdit}
				/>
			</div>
		</div>
	);
};

export default TodoWrapper;
