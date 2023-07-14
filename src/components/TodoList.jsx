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
		<div>
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
		</div>
	);
};

export default TodoList;
