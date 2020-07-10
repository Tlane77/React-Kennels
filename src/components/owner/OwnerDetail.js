import React, { useState, useEffect } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "./OwnerDetail.css";

const OwnerDetail = (props) => {
  const [owner, setOwner] = useState({
    name: "",
    quote: "",
    picture: ""
  });

  useEffect(() => {
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.get(props.ownerId).then((owner) => {
      setOwner({
        owners: owner.name,
        quote: owner.quote,
        picture: owner.picture
      });
    });
  }, [props.ownerId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./owner.png")} alt="Owner" />
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{owner.name}</span>
        </h3>
        <p>Quote: {owner.quote}</p>
      </div>
    </div>
  );
};
// Remember to show individual animals in url use id(http://localhost:3000/animals/1) aka route parameter
export default OwnerDetail;
