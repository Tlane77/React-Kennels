import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import EmployeeCard from "../employee/EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";

const LocationWithEmployees = (props) => {
  const [location, setLocation] = useState({});
  const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const handleDelete = (id) => {
    setIsLoading(true);

EmployeeManager.delete(id).then(() =>
props.history.push("/locations")
    );
};

  useEffect(() => {
    //got here now make call to get employee with animal
    LocationManager.getWithEmployees(props.match.params.locationId).then(
      (APIResult) => {
        setLocation(APIResult);
        setEmployees(APIResult.employees);
      }
    );
  }, [props.match.params.locationId]);

  return (
    <div className="card">
      <p>Location: {location.name}</p>
      {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee}
              deleteEmployee={handleDelete}
          disabled={isLoading}
              {...props} />
      ))}
    </div>
  );
};

export default LocationWithEmployees;
