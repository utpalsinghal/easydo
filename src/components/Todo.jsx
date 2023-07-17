import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Todo = ({ todo, toggleComplete, deleteTodo, enableEdit }) => {
	const checkboxChange = () => {
		toggleComplete(todo.id);
	};
	const handleDelete = () => {
		deleteTodo(todo.id);
	};
	const handleEditButton = () => {
		enableEdit(todo.id);
	};

	return (
		<div>
			<input
				type='checkbox'
				onChange={checkboxChange}
				checked={todo.isComplete}
			/>
			<span>{todo.task}</span>
			{!todo.isComplete && (
				<FontAwesomeIcon
					icon={faPenToSquare}
					style={{ color: "#0f7b79" }}
					onClick={handleEditButton}
				/>
			)}
			<FontAwesomeIcon
				icon={faTrashCan}
				style={{ color: "#0f7b79" }}
				onClick={handleDelete}
			/>
		</div>
	);
};

export default Todo;
