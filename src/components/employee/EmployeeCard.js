import React from "react";
import { Link } from "react-router-dom";
// import "../Kennel.css";
import "./Employee.css";
import { firstLetterCase } from "../../modules/helpers";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img
            className="employeeImg"
            src={require(`./${props.employees.picture}`)}
            alt="Employee"
          />
        </picture>
        <h3>
          Employee:{" "}
          <span className="card-employeeName">
            {firstLetterCase(props.employees.name)}
          </span>
        </h3>
        <p>
          Quote:{" "}
          <span className="card-employeeName">{props.employees.quote}</span>
        </p>
        {/* <p>
          Picture:{" "}
          <span className="card-employeeName">{props.employees.picture}</span>
        </p> */}
        <button
          type="button"
          onClick={() => props.history.push(`/employees/${props.employees.id}/edit`)}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.deleteEmployee(props.employees.id)}
        >
          Discharge
        </button>
        <Link to={`/employees/${props.employees.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeCard;
