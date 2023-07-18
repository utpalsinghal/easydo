import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

const UpdateTodo = ({ currentTodo, editTodo }) => {
	const [newTodo, setNewTodo] = useState(currentTodo.task);
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);
	const handleEdit = () => {
		editTodo(currentTodo.id, newTodo);
	};
	const handleKeyUp = (e) => {
		if (e.key === "Enter") {
			handleEdit();
		} else if(e.key === "Escape") {
			editTodo(currentTodo.id, currentTodo.task);
		}
	};
	const handleClickingOutside = () => {
		editTodo(currentTodo.id, newTodo);
	};

	return (
		<div className='todo todo-update'>
			<input
				type='text'
				placeholder="Task update: What's the haps?"
				onChange={(e) => setNewTodo(e.target.value)}
				value={newTodo}
				onKeyUp={handleKeyUp}
				onBlur={handleClickingOutside}
				ref={inputRef}
			/>
			<FontAwesomeIcon
				icon={faCheck}
				onClick={handleEdit}
				className="add-btn"
			/>
		</div>
	);
};

export default UpdateTodo;
