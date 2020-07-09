import React from "react";
import "../Kennel.css";

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img
            src={require("./dog.png")} 
            alt="My Dog"
          />
        </picture>
        <h3>
                  Name: <span className="card-petname">{props.name}</span>
        </h3>
        <p>Breed: Poodle</p>
      </div>
    </div>
  );
};

export default AnimalCard;
