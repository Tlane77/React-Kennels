import React, { useState, useEffect } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "./OwnerForm.css";

const OwnerEditForm = (props) => {
  const [owner, setOwner] = useState({
    name: "",
    quote: "",
    picture: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  const updateExistingOwner = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedOwner = {
      id: props.match.params.ownerId,
      name: owner.name,
      quote: owner.quote,
      picture: owner.picture,
    };

    OwnerManager.update(editedOwner).then(() =>
      props.history.push("/owners")
    );
  };

  useEffect(() => {
    OwnerManager.get(props.match.params.ownerId).then((owner) => {
      setOwner(owner);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={owner.name}
            />
            <label htmlFor="name">Owner name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="quote"
              value={owner.quote}
            />
            <label htmlFor="quote">quote</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingOwner}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerEditForm;
