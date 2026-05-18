import express from "express";

import {
  addEmployee,
  getEmployees,
  searchEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employeeController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addEmployee);

router.get("/", protect, getEmployees);

router.get("/search", protect, searchEmployee);

router.put("/:id", protect, updateEmployee);

router.delete("/:id", protect, deleteEmployee);

export default router;