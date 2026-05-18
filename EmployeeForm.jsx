import { useState } from "react";
import axios from "axios";

function EmployeeForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    skills: "",
    performanceScore: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addEmployee = async () => {

    try {

      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/employees",
        {
          ...formData,
          skills: formData.skills.split(","),
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert("Employee Added Successfully");

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="card">

      <h2>Add Employee</h2>

      <div className="form-grid">

        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Employee Email"
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          onChange={handleChange}
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills"
          onChange={handleChange}
        />

        <input
          type="number"
          name="performanceScore"
          placeholder="Performance Score"
          onChange={handleChange}
        />

        <input
          type="number"
          name="experience"
          placeholder="Years of Experience"
          onChange={handleChange}
        />

      </div>

      <div className="center-box">

        <button
          className="primary-btn"
          onClick={addEmployee}
        >
          Add Employee
        </button>

      </div>

    </div>
  );
}

export default EmployeeForm;