import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import UpdateTodo from "./UpdateTodo";

const TodoList = ({
	todos,
	toggleComplete,
	deleteTodo,
	editTodo,
	enableEdit,
}) => {
	const [activeTodos, setActiveTodos] = useState([]);
	const [completeTodos, setCompleteTodos] = useState([]);

	useEffect(() => {
		setActiveTodos(todos.filter((todo) => todo.isComplete === false));
		setCompleteTodos(todos.filter((todo) => todo.isComplete === true));
	}, [todos]);

	return (
		<>
			{activeTodos.map((todo) =>
				todo.isEditing ? (
					<UpdateTodo currentTodo={todo} editTodo={editTodo} />
				) : (
					<Todo
						todo={todo}
						toggleComplete={toggleComplete}
						deleteTodo={deleteTodo}
						enableEdit={enableEdit}
					/>
				)
			)}
      {completeTodos.map((todo) =>
				todo.isEditing ? (
					<UpdateTodo currentTodo={todo} editTodo={editTodo} />
				) : (
					<Todo
						todo={todo}
						toggleComplete={toggleComplete}
						deleteTodo={deleteTodo}
						enableEdit={enableEdit}
					/>
				)
			)}
		</>
	);
};

export default TodoList;
