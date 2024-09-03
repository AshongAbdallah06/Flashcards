import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-links">
        <NavLink
          to="/home"
          className="sb sb-home-link"
          activeClassName="active"
        >
          <img src="/icons/home-outline.svg" />
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/cards"
          className="sb sb-cards-link"
          activeClassName="active"
        >
          <img src="/icons/albums-outline.svg" />
          <p>Flashcards</p>
        </NavLink>
        <NavLink
          to="/study"
          className="sb sb-study-link"
          activeClassName="active"
        >
          <img src="/icons/school-outline.svg" />
          <p>Study</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
