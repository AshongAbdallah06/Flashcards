import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import home from "../icons/home-outline.svg";
import albums from "../icons/albums-outline.svg";
import school from "../icons/school-outline.svg";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-links">
        <NavLink
          to="/home"
          className="sb sb-home-link"
          activeClassName="active"
        >
          <img src={home} />
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/cards"
          className="sb sb-cards-link"
          activeClassName="active"
        >
          <img src={albums} />
          <p>Flashcards</p>

        </NavLink>
        <NavLink
          to="/study"
          className="sb sb-study-link"
          activeClassName="active"
        >
          <img src={school} />
          <p>Study</p>

        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;