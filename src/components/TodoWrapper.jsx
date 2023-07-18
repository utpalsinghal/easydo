import React, { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);
	const [totalTodoCount, setTotalTodoCount] = useState(0);
	const [completeTodoCount, setCompleteTodoCount] = useState(0);

	useEffect(() => {
		setTotalTodoCount(todos.length);
		let completeCount = 0;
		todos.map((todo) => {
			if (todo.isComplete === true) {
				completeCount++;
			}
		});
		setCompleteTodoCount(completeCount);
	}, [todos]);

	const addTodo = (todo) => {
		if (validateTask(todo)) {
			setTodos([
				...todos,
				{ id: uuidv4(), task: todo, isComplete: false, isEditing: false },
			]);
		}
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
		if (validateTask(value)) {
			setTodos(
				todos.map((todo) =>
					todo.id === id ? { ...todo, task: value, isEditing: false } : todo
				)
			);
		}
	};

	const validateTask = (task) => {
		if (task === "" || task === null || task === undefined) {
			alert("The task value cannot be empty!");
			return false;
		}
		return true;
	};

	return (
		<div className='wrapper'>
			<h1 className='tagline'>Your future starts here!</h1>
			<p className='counter'>
				{completeTodoCount === totalTodoCount && totalTodoCount !== 0
					? "Wuhoo! All tasks completed."
					: totalTodoCount === 0
					? "Add a new task to start"
					: `${completeTodoCount}/${totalTodoCount} tasks completed`}
			</p>
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
