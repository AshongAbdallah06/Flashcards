import React from "react";
import { Link } from "react-router-dom";
import home from "../icons/home-outline.svg";
import albums from "../icons/albums-outline.svg";
import school from "../icons/school-outline.svg";

const Sidebar = () => {
	return (
		<div className="side-bar">
			<div className="side-bar-links">
				<Link
					to="/home"
					className="sb-link"
				>
					<img src={home} />
					<p>Home</p>
				</Link>
				<Link
					to="/cards"
					className="sb-link"
				>
					<img src={albums} />
					<p>Flashcards</p>
				</Link>
				<Link
					to="/study/1"
					className="sb-link"
				>
					<img src={school} />
					<p>Study</p>
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
