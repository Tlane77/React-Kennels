import React from "react";
import { Link } from "react-router-dom";
// import "../Kennel.css";
import "./Location.css";
import { firstLetterCase } from "../../modules/helpers";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img
            className="locationImg"
            src={require(`./${props.locations.picture}`)}
            alt="Location"
          />
        </picture>
        <h3>
          Location:{" "}
          <span className="card-locationName">
            {firstLetterCase(props.locations.name)}
          </span>
        </h3>
        <p>Title: Island of Pets</p>
        <p>
          Quote:{" "}
          <span className="card-locationName">{props.locations.quote}</span>
        </p>
        <button
          type="button"
          onClick={() =>
            props.history.push(`/locations/${props.locations.id}/edit`)
          }
        >
          Edit
        </button>

        <button
          type="button"
          onClick={() => props.deleteLocation(props.locations.id)}
        >
          Discharge
        </button>
        <Link to={`/locations/${props.locations.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => {
            props.history.push(`/locations/${props.locations.id}/details`);
          }}
        >
          Employees
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
