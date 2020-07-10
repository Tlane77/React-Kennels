import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import EmployeeDetail from "./employee/EmployeeDetail";
import OwnerDetail from "./owner/OwnerDetail";
// import AnimalCard from "./animal/AnimalCard";
// only include these once they are built - previous practice exercise
// import LocationCard from "./location/LocationCard";
// import EmployeeCard from "./employee/EmployeeCard";
// import OwnerCard from "./owner/OwnerCard";
// import AnimalList from "./animal/AnimalList";
// import AnimalCard from "./animal/AnimalCard";


const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />
      {/* Make sure you add the `exact` attribute here */}
      <Route
        exact
        path="/animals"
        render={(props) => {
          return <AnimalList />;
        }}
      />
      <Route
        path="/animals/:animalId(\d+)"
        render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
          );
        }}
      />
      <Route
        exact
        path="/locations"
        render={(props) => {
          return <LocationList />;
        }}
      />
      <Route
        path="/locations/:locationId(\d+)"
        render={(props) => {
          // Pass the locationId to the LocationDetailComponent
          return (
            <LocationDetail locationId={parseInt(props.match.params.locationId)}
            />
          );
        }}
      />
      {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
      <Route
        exact
        path="/employees"
        render={(props) => {
          return <EmployeeList />;
        }}
      />
      <Route
        path="/employees/:employeeId(\d+)"
        render={(props) => {
          // Pass the employeeId to the EmployeeDetailComponent
          return (
            <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} />
          );
        }}
        />
      <Route
        exact
        path="/owners"
        render={(props) => {
          return <OwnerList />;
        }}
      />
      <Route
        path="/owners/:ownerId(\d+)"
        render={(props) => {
          // Pass the ownerId to the OwnerDetailComponent
          return (
            <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} />
          );
        }}
        />
    </React.Fragment>
  );
};

export default ApplicationViews;
