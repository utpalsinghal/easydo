import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const CreateTodo = ({ addTodo }) => {
	const [newTodo, setNewTodo] = useState("");

	const handleAdd = () => {
		addTodo(newTodo);
		setNewTodo("");
	};

	const handleKeyUp = (e) => {
		if (e.key === "Enter") {
			handleAdd();
		}
	};

	return (
		<>
			<input
				type='text'
				placeholder='Next task? Bring on the excitement!'
				onChange={(e) => setNewTodo(e.target.value)}
				value={newTodo}
				onKeyUp={handleKeyUp}
			/>
			<FontAwesomeIcon icon={faSquarePlus} onClick={handleAdd} />
		</>
	);
};

export default CreateTodo;
