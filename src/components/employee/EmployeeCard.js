import React from "react";
// import "../Kennel.css";
import "./Employee.css";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./employee.png")} alt="Employee" />
        </picture>
        <h3>
          Employee: <span className="card-employeename">{props.employees.name}</span>
        </h3>
        <p>
          Quote: <span className="card-employeename">{props.employees.quote}</span>
        </p>
        <p>
          Picture: <span className="card-employeename">{props.employees.picture}</span>
        </p>
        <button type="button" onClick={() => props.deleteEmployee(props.employees.id)}>Discharge</button>
      </div>
      </div>
    
  );
};

export default EmployeeCard;
