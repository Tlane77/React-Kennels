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
          Employee: <span className="card-employeename">{props.name}</span>
        </h3>
        <p>
          Quote: <span className="card-employeename">{props.quote}</span>
        </p>
        <p>
          Picture: <span className="card-employeename">{props.picture}</span>
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;
