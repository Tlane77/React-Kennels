import React, { useState, useEffect } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "./OwnerSpotlight.css";

const OwnerSpotlight = (props) => {
  const [owner, setOwner] = useState({ name: "", quote: "" });

  useEffect(() => {
    OwnerManager.get(props.ownerId).then((owner) => {
      setOwner({
        name: owner.name,
        quote: owner.breed,
      });
    });
  }, [props.ownerId]);

  return (
    <div className="owner-spotlight">
      <img src={require("./owner.png")} alt="Owner" />
      <div>
        <h3>{owner.name}</h3>
        <p>{owner.quote}</p>
      </div>
    </div>
  );
};

export default OwnerSpotlight;
