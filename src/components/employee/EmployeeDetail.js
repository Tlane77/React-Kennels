import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeDetail.css";

const EmployeeDetail = (props) => {
  const [employee, setEmployee] = useState({
    name: "",
    quote: "",
    picture: ""
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    EmployeeManager.get(props.employeeId).then((employee) => {
      setEmployee({
        name: employee.name,
        quote: employee.quote,
        picture:employee.picture

  
      });
      setIsLoading(false);
    });
  }, [props.employeeId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    EmployeeManager.delete(props.employeeId).then(() =>
      props.history.push("/employees")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        {employee.picture !== "" && (
          <picture>
            <img src={employee.picture} alt="Employee" />
          </picture>
        )}
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{employee.name}</span>
        </h3>
        <p>Quote: {employee.quote}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          FIRE!
        </button>
      </div>
    </div>
  );
};
// Remember to show individual employees in url use id(http://localhost:3000/employees/1) aka route parameter
export default EmployeeDetail;
