import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";

const LocationDetail = (props) => {
  const [location, setLocation] = useState({ name: "", quote: "", picture: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.get(props.locationId).then((location) => {
      setLocation({
        locations: location.name,
        quote: location.quote,
      });
    });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location.png")} alt="Location" />
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{location.name}</span>
        </h3>
        <p>Quote: {location.quote}</p>
      </div>
    </div>
  );
};
// Remember to show individual animals in url use id(http://localhost:3000/animals/1) aka route parameter
export default LocationDetail;
