import React from "react";
import "../styles/stats.css";

const Stats = () => {
  return (
    <div className="recent-stats">
      <div className="stats-card studied" id="">
        <p>Studied</p>
        <h3>100</h3>
        <p>Cards Today</p>
      </div>
      <div className="stats-card time" id="">
        <p>Time</p>
        <h3>10</h3>
        <p>Minutes</p>
      </div>
      <div className="stats-card accuracy" id="">
        <p>Got</p>
        <h3>20</h3>
        <p>Cards Wrong</p>
      </div>
    </div>
  );
};

export default Stats;
