import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

const CreateTodo = ({ addTodo }) => {
	const [newTodo, setNewTodo] = useState("");
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const handleAdd = () => {
		addTodo(newTodo);
		setNewTodo("");
		inputRef.current.focus();
	};

	const handleKeyUp = (e) => {
		if (e.key === "Enter") {
			handleAdd();
		}
	};

	return (
		<div className="todo todo-input">
			<input
				type='text'
				placeholder='Next task? Bring on the excitement!'
				onChange={(e) => setNewTodo(e.target.value)}
				value={newTodo}
				onKeyUp={handleKeyUp}
				ref={inputRef}
			/>
			<FontAwesomeIcon
				icon={faPlus}
				onClick={handleAdd}
				className="add-btn"
			/>
		</div>
	);
};

export default CreateTodo;
