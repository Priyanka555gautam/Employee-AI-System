import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/employees",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setEmployees(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="card">

      <h2>Employee List</h2>

      <div className="employee-grid">

        {
          employees.map((emp) => (
            <div
              className="employee-card"
              key={emp._id}
            >

              <h3>{emp.name}</h3>

              <p>{emp.email}</p>

              <p>{emp.department}</p>

              <p>
                Performance:
                {emp.performanceScore}
              </p>

              <p>
                Experience:
                {emp.experience} years
              </p>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default EmployeeList;