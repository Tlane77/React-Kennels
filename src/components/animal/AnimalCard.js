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
          Name: <span className="card-petname">{props.animals.name}</span>
        </h3>
        <p>
          Breed: <span className="card-petname">{props.animals.breed}</span>
        </p>
        <p>
          Quote: <span className="card-petname">{props.animals.quote}</span>
        </p>
        <p>
          Picture: <span className="card-petname">{props.animals.picture}</span>
        </p>
        <button type="button" onClick={() => props.deleteAnimal(props.animals.id)}>Discharge</button>
      </div>
      </div>
    
  );
};

export default AnimalCard;
