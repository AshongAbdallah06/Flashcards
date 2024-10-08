import React, { useState } from "react";
import "../styles/cards.css";
import HeaderLoggedIn from "../components/HeaderLoggedIn";
import Sidebar from "../components/Sidebar";
import Collection from "../components/Collection";
import CreateCollectionOverlay from "../components/CreateCollectionOverlay";
import add from "../icons/add-outline.svg";

const Cards = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [collections, setCollections] = useState([]);

  const handleCreateNewClick = () => {
    setShowOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  return (
    <div>
      <HeaderLoggedIn />
      <div className="main-container">
        <Sidebar />
        <div className="cards-main">
          <div className="cards-header">
            <h1>Your cards</h1>
            <button onClick={handleCreateNewClick}>
              <img className="create-new-image" src={add} />
              Create new
            </button>
          </div>

          <div className="collections-div">
            <div>
              <Collection />
            </div>
            <div className="add-more">
              <p>Add more set to appear here</p>
            </div>
          </div>
        </div>
      </div>
      {showOverlay && <CreateCollectionOverlay onClose={handleOverlayClose} />}
    </div>
  );
};

export default Cards;
