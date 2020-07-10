import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeDetail.css";

const EmployeeDetail = (props) => {
  const [employee, setEmployee] = useState({
    name: "",
    quote: "",
    picture: "",
  });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    EmployeeManager.get(props.employeeId).then((employee) => {
      setEmployee({
        employees: employee.name,
        quote: employee.quote,
      });
    });
  }, [props.employeeId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./employee.png")} alt="Employee" />
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{employee.name}</span>
        </h3>
        <p>Quote: {employee.quote}</p>
      </div>
    </div>
  );
};
// Remember to show individual animals in url use id(http://localhost:3000/animals/1) aka route parameter
export default EmployeeDetail;
