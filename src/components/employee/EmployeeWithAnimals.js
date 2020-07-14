import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import AnimalCard from "../animal/AnimalCard";

const EmployeeWithAnimals = (props) => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    //got here now make call to get employee with animal
    EmployeeManager.getWithAnimals(props.match.params.employeeId).then(
      (APIResult) => {
        setEmployee(APIResult);
        setAnimals(APIResult.animals);
      }
    );
  }, [props.match.params.employeeId]);

  return (
    <div className="card">
      <p>Employee: {employee.name}</p>
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} {...props} />
      ))}
    </div>
  );
};

export default EmployeeWithAnimals;
