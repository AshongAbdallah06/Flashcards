import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileIcon from "../icons/person-circle-outline.svg";

const HeaderLoginSignup = () => {
	return (
		<header>
			<Link to="/home">
				<h1 className="logo">Brain Deck</h1>
			</Link>

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

export default HeaderLoginSignup;
