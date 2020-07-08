import React from "react";
import "../Kennel.css";

const OwnerCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./owner.png")} alt="Owner" />
        </picture>
        <h3>
          Owner: <span className="card-ownername">Dwight</span>
        </h3>
        <p>It's all about the Love!</p>
      </div>
    </div>
  );
};

export default OwnerCard;
