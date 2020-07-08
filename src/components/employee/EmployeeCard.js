import React from "react";
import "../Kennel.css";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./employee.png")} alt="Employee" />
        </picture>
        <h3>
          Employee: <span className="card-employeename">Doug</span>
        </h3>
        <p>Title: Director of Pooper Scooper</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
