import React from "react";
import "./Owner.css";
// import "../Kennel.css";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./owner.png")} alt="Owner" />
        </picture>
        <h3>
          Owner: <span className="card-ownername">{props.name}</span>
        </h3>
        <p>It's all about the Love!</p>
        <p>
          Quote: <span className="card-ownername">{props.quote}</span>
        </p>
        <p>
          Picture: <span className="card-ownername">{props.picture}</span>
        </p>
      </div>
    </div>
  );
};

export default OwnerCard;
