import React, { useState, useEffect } from "react";
//import the components we will need
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";

const LocationList = () => {
  // The initial state is an empty array
  const [location, setLocation] = useState([]);

  const getLocation = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return LocationManager.getAll().then((locationFromAPI) => {
      setLocation(locationFromAPI);
    });
  };
  const deleteLocation = (id) => {
    LocationManager.delete(id).then(() =>
      LocationManager.getAll().then(setLocation)
    );
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getLocation();
  }, []);
  

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {location.map((location) => (
        <LocationCard key={location.id} locations={location} 
       deleteLocation = { deleteLocation }/>
      ))}
    </div>
  );
};
export default LocationList;
