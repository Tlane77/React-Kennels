import React from "react";
// import "../Kennel.css";
import "./Animal.css";
const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.png")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.name}</span>
        </h3>
        <p>
          Breed: <span className="card-petname">{props.breed}</span>
        </p>
        <p>
          Quote: <span className="card-petname">{props.quote}</span>
        </p>
        <p>
          Picture: <span className="card-petname">{props.picture}</span>
        </p>
      </div>
    </div>
  );
};

export default AnimalCard;
