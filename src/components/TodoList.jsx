import React from "react";
import Todo from "./Todo";
import UpdateTodo from "./UpdateTodo";

const TodoList = ({
	todos,
	toggleComplete,
	deleteTodo,
	editTodo,
	enableEdit,
}) => {
	return (
		<>
			{todos.map((todo) =>
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
