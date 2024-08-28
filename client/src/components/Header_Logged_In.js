import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileIcon from "../icons/person-circle-outline.svg";

const Header_Login_Signup = () => {
	return (
		<header>
			<h1 className="logo">Brain Deck</h1>

			<ul>
				<li>johndoe@google.com</li>
				<Link to="/profile">
					<img
						src={profileIcon}
						alt="profile-icon"
						className="profile-icon"
					/>
				</Link>
			</ul>
		</header>
	);
};

export default Header_Login_Signup;
