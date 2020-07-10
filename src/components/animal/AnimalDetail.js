import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";

const AnimalDetail = (props) => {
  const [animal, setAnimal] = useState({ name: "", breed: "", quote: "", picture: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId).then((animal) => {
      setAnimal({
        animals: animal.name,
        breed: animal.breed,
      });
    });
  }, [props.animalId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.png")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{animal.name}</span>
        </h3>
        <p>Breed: {animal.breed}</p>
      </div>
    </div>
  );
};
// Remember to show individual animals in url use id(http://localhost:3000/animals/1) aka route parameter
export default AnimalDetail;
