import React from "react";
import HeaderLoggedIn from "../components/HeaderLoggedIn";
import Sidebar from "../components/Sidebar";
import Stats from "../components/Stats";
import Collection from "../components/Collection";
import compass from "../icons/compass-outline.svg";
import statsChart from "../icons/stats-chart-outline.svg";

const Home = () => {
	return (
		<>
			<HeaderLoggedIn />
			<div className="main-container">
				<Sidebar />

				<div className="home-main">
					<h1>Home</h1>

					<section className="recents-div">
						<div className="recents-header">
							<img src={compass} />
							<p>Recent</p>
						</div>

						<Collection />
					</section>

					<section className="stats-div">
						<div className="stats-header">
							<img src={statsChart} />
							<p>Stats</p>
						</div>

						<Stats />
					</section>
				</div>
			</div>
		</>
	);
};

export default Home;
