import React from "react";
import { Link } from "react-router-dom";
// import "../Kennel.css";
import "./Location.css";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location.png")} alt="Location" />
        </picture>
        <h3>
          Location:{" "}
          <span className="card-locationname">{props.locations.name}</span>
        </h3>
        <p>Title: Island of Pets</p>
        <p>
          Quote:{" "}
          <span className="card-locationname">{props.locations.quote}</span>
        </p>
        <p>
          Picture:{" "}
          <span className="card-locationname">{props.locations.picture}</span>
        </p>
        <button
          type="button"
          onClick={() => props.deleteLocation(props.locations.id)}
        >
          Discharge
        </button>
        <Link to={`/locations/${props.locations.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;
