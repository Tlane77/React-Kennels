import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeForm.css";
import LocationManager from "../../modules/LocationManager";


const EmployeeEditForm = (props) => {
  const [employee, setEmployee] = useState({
    name: "",
    quote: "",
    picture: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState([]);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: props.match.params.employeeId,
      name: employee.name,
      quote: employee.quote,
      picture: employee.picture,
      // any kind of input coming back as string
      locationId: parseInt(employee.locationId),
    };

    EmployeeManager.update(editedEmployee).then(() =>
      props.history.push("/employees")
    );
  };

  useEffect(() => {
    EmployeeManager.get(props.match.params.employeeId).then((employee) => {
      // getting all of the locations using API calls
      LocationManager.getAll().then((locations) => {
        setLocations(locations);
        // get locations before you se employees
        setEmployee(employee);
        // controlling button
        setIsLoading(false);
      })
    });
  }, [props.match.params.employeeId]);

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
              value={employee.name}
            />
            <label htmlFor="name">Employee name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="quote"
              value={employee.quote}
            />
            <label htmlFor="quote">quote</label>
            <select
              className="form-control"
              id="locationId"
              value={employee.locationId}
              onChange={handleFieldChange}
            >
              {locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingEmployee}
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

export default EmployeeEditForm;
