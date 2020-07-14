import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeSpotlight.css";

const EmployeeSpotlight = (props) => {
  const [employee, setEmployee] = useState({ name: "", quote: "" });

  useEffect(() => {
    EmployeeManager.get(props.employeeId).then((employee) => {
      setEmployee({
        name: employee.name,
        quote: employee.quote,
      });
    });
  }, [props.employeeId]);

  return (
    <div className="employee-spotlight">
      <img src={require("./employee.png")} alt="Employee" />
      <div>
        <h3>{employee.name}</h3>
        <p>{employee.quote}</p>
      </div>
    </div>
  );
};

export default EmployeeSpotlight;
