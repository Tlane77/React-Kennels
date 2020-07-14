import React, { useState, useEffect } from "react";
//import the components we will need
import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";

const EmployeeList = (props) => {
  // The initial state is an empty array
  const [employee, setEmployee] = useState([]);

  const getEmployee = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return EmployeeManager.getAll().then((employeeFromAPI) => {
      setEmployee(employeeFromAPI);
    });
  };
  const deleteEmployee = (id) => {
    EmployeeManager.delete(id).then(() =>
      EmployeeManager.getAll().then(setEmployee)
    );
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getEmployee();
  }, []);
  

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {/* //add this button above your display of animal cards */}
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/employees/new");
          }}
        >
          New Caretaker
        </button>
      </section>
      {employee.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employees={employee}
          deleteEmployee={deleteEmployee}
          {...props}
        />
      ))}
    </div>
  );
};
export default EmployeeList;
