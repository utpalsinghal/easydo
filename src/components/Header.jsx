import React from "react";
import logo from '../images/logo.png';

const Header = () => {
	return (
		<div className='header'>
      <img src={logo} alt="Logo" className="logo"/>
			<p className='title'>EasyDo: A Todo app</p>
		</div>
	);
};

export default Header;
