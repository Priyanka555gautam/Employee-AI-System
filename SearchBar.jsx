import { useState } from "react";
import axios from "axios";

function SearchBar() {

  const [department, setDepartment] = useState("");
  const [employees, setEmployees] = useState([]);

  const searchEmployee = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        `http://localhost:5000/api/employees/search?department=${department}`,
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

  return (
    <div className="card">

      <h2>Search Employee</h2>

      <div className="search-box">

        <input
          type="text"
          placeholder="Enter Department"
          onChange={(e) =>
            setDepartment(e.target.value)
          }
        />

        <button onClick={searchEmployee}>
          Search
        </button>

      </div>

      {
        employees.map((emp) => (
          <div
            className="search-result"
            key={emp._id}
          >
            {emp.name} - {emp.department}
          </div>
        ))
      }

    </div>
  );
}

export default SearchBar;