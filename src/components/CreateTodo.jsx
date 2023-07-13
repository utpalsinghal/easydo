import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CreateTodo = () => {
	return (
		<>
			<h1>Your future starts here!</h1>
			<input
				type='text'
				placeholder='Next task? Bring on the excitement!'
			></input>
			<FontAwesomeIcon icon={faSquarePlus} />
		</>
	);
};

export default CreateTodo;
