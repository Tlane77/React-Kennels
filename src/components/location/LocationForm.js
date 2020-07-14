import React, { useState } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationForm.css";

const LocationForm = (props) => {
  const [location, setLocation] = useState({ name: "", title: "", quote: "", picture: "./location.png" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create location object, invoke the LocationManager post method, and redirect to the full location list
   */
  const constructNewLocation = (evt) => {
    evt.preventDefault();
    if (location.name === "" || location.title === ""|| location.quote === ""|| location.picture === "") {
      window.alert("Please input an location name and location");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
        LocationManager.post(location).then(() =>
        props.history.push("/locations")
      );
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Location name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="Location"
              placeholder="Location"
            />
            <label htmlFor="Location">Location</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewLocation}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationForm;
