import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalForm.css";
import EmployeeManager from "../../modules/EmployeeManager";

const AnimalEditForm = (props) => {
  const [animal, setAnimal] = useState({
    name: "",
    breed: "",
    quote: "",
    picture: "",
    employeeId: "",
  });
  const [employees, setEmployee] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed,
      quote: animal.quote,
      picture: animal.picture,
      employeeId: animal.employeeId
    };

    AnimalManager.update(editedAnimal).then(() =>
      props.history.push("/animals")
    );
  };

  useEffect(() => {
    AnimalManager.get(props.match.params.animalId).then((animal) => {
      EmployeeManager.getAll().then((employees) => {
        console.log("employee response",employees)
        setEmployee(employees);
        setAnimal(animal);
        setIsLoading(false);
      });
    });
  }, [props.match.params.animalId]);

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
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="quote">Breed</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.quote}
            />
            <label htmlFor="name">Location</label>
          </div>

          <select
            className="form-control"
            id="employeeId"
            value={animal.employeeId}
            onChange={handleFieldChange}
          >
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </select>
          <label htmlFor="employeeId">Employee</label>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingAnimal}
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

export default AnimalEditForm;
