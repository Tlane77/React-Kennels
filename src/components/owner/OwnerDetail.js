import React, { useState, useEffect } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "./OwnerDetail.css";

const OwnerDetail = (props) => {
  const [owner, setOwner] = useState({
    name: "",
    quote: "",
    picture: "owner.png"
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.get(props.ownerId).then((owner) => {
      setOwner({
        owners: owner.name,
        quote: owner.quote,
        picture: owner.picture
      });
      setIsLoading(false);
    });
  }, [props.ownerId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    OwnerManager.delete(props.ownerId).then(() =>
      props.history.push("/owners")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require(`./${owner.picture}`)} alt="Owner" />
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{owner.name}</span>
        </h3>
        <p>Quote: {owner.quote}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
};
// Remember to show individual animals in url use id(http://localhost:3000/animals/1) aka route parameter
export default OwnerDetail;
