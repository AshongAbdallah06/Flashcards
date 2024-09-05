import React from "react";
//import { Link } from "react-router-dom";
import "../styles/home.css";
import "../styles/sidebar.css";
import HeaderLoggedIn from "../components/HeaderLoggedIn";
import Sidebar from "../components/Sidebar";
import Stats from "../components/Stats";
import Collection from "../components/Collection";
import compass from "../icons/compass-outline.svg";
import statschart from "../icons/stats-chart-outline.svg";

const Home = () => {
  return (
    <div>
      <HeaderLoggedIn />
      <div className="main-container">
        <Sidebar />
        <div className="home-main">
          <h1>Home</h1>
          <div className="recents-div">
            <div>
              <div className="recents-header">
                <img src={compass} />
                <p className="recents-text">Recent</p>
              </div>

              <Collection />
            </div>
          </div>

          <div className="stats-div">
            <div>
              <div className="stats-header">
                <img src={statschart} />
                <p className="stats-text">Stats</p>
              </div>
              <Stats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
