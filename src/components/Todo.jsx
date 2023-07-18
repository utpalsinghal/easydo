import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Todo = ({ todo, toggleComplete, deleteTodo, enableEdit }) => {
	const [isDeleteHovering, setIsDeleteHovering] = useState(false);
	const checkboxChange = () => {
		toggleComplete(todo.id);
	};
	const handleDelete = () => {
		if (window.confirm(`Click 'OK' to confirm deleting the below task:\n"${todo.task}"`)) {
			deleteTodo(todo.id);
		}
	};
	const handleEditButton = () => {
		enableEdit(todo.id);
	};
	const handleMouseOver = () => {
		setIsDeleteHovering(true);
	};
	const handleMouseOut = () => {
		setIsDeleteHovering(false);
	};

	return (
		<div className='todo'>
			<input
				type='checkbox'
				onChange={checkboxChange}
				checked={todo.isComplete}
			/>
			<span className={"task" + (todo.isComplete ? " todo-complete" : "")}>
				{todo.task}
			</span>
			{!todo.isComplete && (
				<FontAwesomeIcon
					icon={faPenToSquare}
					onClick={handleEditButton}
					className='edit-btn'
				/>
			)}
			<FontAwesomeIcon
				icon={faTrashCan}
				onClick={handleDelete}
				className='del-btn'
				shake={isDeleteHovering ? true : false}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
			/>
		</div>
	);
};

export default Todo;
