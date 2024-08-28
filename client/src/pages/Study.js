import React from "react";
import Header_Logged_In from "../components/Header_Logged_In";
import hint from "../icons/help-circle-outline.svg";

const Study = () => {
	return (
		<>
			<Header_Logged_In />

			<div className="study-mode-container">
				<div className="study-mode">
					<div className="progress">
						<span className="number">1</span>
						<span className="bar">
							<input type="range"></input>
						</span>
						<span className="number">40</span>
					</div>

					<div className="card">
						<p className="collection-name">Collection Name</p>

						<div className="q-and-a">
							<p className="question">What is the first letter of the alphabets?</p>
							<p className="answer">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut
								labore, eum corporis dignissimos nam quis aliquid molestiae iusto,
								nesciunt odio minus magni! Laboriosam suscipit exercitationem,
								voluptatibus excepturi obcaecati possimus.
							</p>
						</div>

						<div className="hint">
							<img
								src={hint}
								alt="hint"
								title="Hint"
								className="hint-icon"
							/>
						</div>
					</div>

					<div className="buttons">
						<button className="skip">Skip</button>
						<button className="flip">Flip Card</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Study;
