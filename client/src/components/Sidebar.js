import React from "react";
import { NavLink } from "react-router-dom";
import "../components/styles/sidebar.css"
import home from "../icons/home-outline.svg"
import album from "../icons/albums-outline.svg"
import study from "../icons/school-outline.svg"

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-links">
        <NavLink
          to="/home"
          className="sb sb-home-link"

        >
          <img src={home} alt="home" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/cards"
          className="sb sb-cards-link active"
        >
          <img src={album} alt="album"/>
          <span>Flashcards</span>
        </NavLink>
        <NavLink
          to="/study"
          className="sb sb-study-link"
        >
          <img src={study} alt="study" />
          <span>Study</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;