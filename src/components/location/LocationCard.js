import React from "react";
import "../Kennel.css";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location.png")} alt="Location" />
        </picture>
        <h3>
          Location: <span className="card-locationname">Island of Pets</span>
        </h3>
        <p>Title: Island of Pets</p>
      </div>
    </div>
  );
};

export default LocationCard;
