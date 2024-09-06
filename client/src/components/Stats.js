import React from "react";

const Stats = () => {
	return (
		<section className="recent-stats">
			<div className="stats-card studied">
				<p>Studied</p>
				<h3>100</h3>
				<p>Cards Today</p>
			</div>

			<div className="stats-card time">
				<p>Time</p>
				<h3>10</h3>
				<p>Minutes</p>
			</div>

			<div className="stats-card accuracy">
				<p>Got</p>
				<h3>20</h3>
				<p>Cards Wrong</p>
			</div>
		</section>
	);
};

export default Stats;
