import React from "react";
import { Link } from "react-router-dom";
// import "../Kennel.css";
import "./Animal.css";
import { firstLetterCase } from "../../modules/helpers";
const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require(`./${props.animals.picture}`)} alt="My Dog" />
        </picture>
        <h3>
          Name:{" "}
          <span className="card-petName">
            {firstLetterCase(props.animals.name)}
          </span>
        </h3>
        <p>
          Breed: <span className="card-petName">{props.animals.breed}</span>
        </p>
        <p>
          Quote: <span className="card-petName">{props.animals.quote}</span>
        </p>
        <button
          type="button"
          onClick={() =>
            props.history.push(`/animals/${props.animals.id}/edit`)
          }
        >
          Edit
        </button>

        <button
          type="button"
          onClick={() => props.deleteAnimal(props.animals.id)}
        >
          Discharge
        </button>
        <Link to={`/animals/${props.animals.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default AnimalCard;
