import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderLoginSignup = () => {
	const [link, setLink] = useState("");

	useEffect(() => {
		if (window.location.pathname === "/login") {
			setLink("login");
		} else if (window.location.pathname === "/signup") {
			setLink("signup");
		}
	}, []);
	return (
		<header>
			<h1 className="logo">Brain Deck</h1>

			<ul>
				<li>About</li>
				<Link to={link === "login" ? "/signup" : "/login"}>
					<li>{link === "login" ? "Signup" : "Login"}</li>
				</Link>
			</ul>
		</header>
	);
};

export default HeaderLoginSignup;
