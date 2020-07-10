import { Link } from "react-router-dom";
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
          Owner: <span className="card-ownername">{props.owners.name}</span>
        </h3>
        <p>It's all about the Love!</p>
        <p>
          Quote: <span className="card-ownername">{props.owners.quote}</span>
        </p>
        <p>
          Picture:{" "}
          <span className="card-ownername">{props.owners.picture}</span>
        </p>
        <button
          type="button"
          onClick={() => props.deleteOwner(props.owners.id)}
        >
          Discharge
        </button>
        <Link to={`/owners/${props.owners.id}`}>
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default OwnerCard;
