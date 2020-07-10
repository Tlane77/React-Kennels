
import React from "react";
import "./Owner.css";
import { Link } from "react-router-dom";
// import "../Kennel.css";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img
            className="ownerImg"
            src={require(`${props.owners.picture}`)}
            alt="Owners"
          />
        </picture>
        <h3>
          Owner: <span className="card-ownername">{props.owners.name}</span>
        </h3>
        <p>It's all about the Love!</p>
        <p>
          Quote: <span className="card-ownername">{props.owners.quote}</span>
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
