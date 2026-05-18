import Employee from "../models/Employee.js";


// Add Employee
export const addEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Get All Employees
export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    res.json(employees);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Search Employee
export const searchEmployee = async (req, res) => {
  try {
    const employees = await Employee.find({
      department: req.query.department,
    });

    res.json(employees);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Update Employee
export const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(employee);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Delete Employee
export const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);

    res.json({
      message: "Employee deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};