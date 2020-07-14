import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationSpotlight.css";

const LocationSpotlight = (props) => {
  const [location, setLocation] = useState({ name: "", quote: "" });

  useEffect(() => {
    LocationManager.get(props.locationId).then((location) => {
      setLocation({
        name: location.name,
        quote: location.quote,
      });
    });
  }, [props.locationId]);

  return (
    <div className="location-spotlight">
      <img src={require("./location.png")} alt="Location" />
      <div>
        <h3>{location.name}</h3>
        <p>{location.quote}</p>
      </div>
    </div>
  );
};

export default LocationSpotlight;
