import React, { useState, useEffect } from "react";
//import the components we will need
import OwnerCard from "./OwnerCard";
import OwnerManager from "../../modules/OwnerManager";

const OwnerList = (props) => {
  // The initial state is an empty array
  const [owner, setOwner] = useState([]);

  const getOwner = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return OwnerManager.getAll().then((OwnerFromAPI) => {
      setOwner(OwnerFromAPI);
    });
  };

  const deleteOwner = (id) => {
    OwnerManager.delete(id).then(() => OwnerManager.getAll().then(setOwner));
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getOwner();
  }, []);
  

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {/* //add this button above your display of owner cards */}
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/owners/new");
          }}
        >
          New Owner
        </button>
      </section>
      {owner.map((owner) => (
        <OwnerCard
          key={owner.id}
          owners={owner}
          deleteOwner={deleteOwner}
          {...props}
        />
      ))}
    </div>
  );
};
export default OwnerList;
