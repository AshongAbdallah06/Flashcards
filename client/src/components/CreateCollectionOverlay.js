import React, { useState } from "react";
import "../styles/overlay.css";

const CreateCollectionOverlay = ({ onClose, onSubmit }) => {
  const [collectionName, setCollectionName] = useState("");

  const handleSubmit = () => {
    onSubmit(collectionName);
    onClose();
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="close-button-div">
          <button onClick={onClose}>
            <img src="../icons/close-circle-outline.svg" />
            Close
          </button>
        </div>
        <div className="collection-box-header">
          <h2>Enter name of the collection</h2>
        </div>

        <div className="input-collection-div">
          <input
            type="text"
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
          />
          <button onClick={handleSubmit}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default CreateCollectionOverlay;
