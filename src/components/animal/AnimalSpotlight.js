import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalSpotlight.css";

const AnimalSpotlight = (props) => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });

  useEffect(() => {
    AnimalManager.get(props.animalId).then((animal) => {
      setAnimal({
        name: animal.name,
        breed: animal.breed,
      });
    });
  }, [props.animalId]);

  return (
    <div className="animal-spotlight">
      <img src={require("./dog.png")} alt="My Dog" />
      <div>
        <h3>{animal.name}</h3>
        <p>{animal.breed}</p>
      </div>
    </div>
  );
};

export default AnimalSpotlight;
