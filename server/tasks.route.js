const express = require("express");
const router = express.Router();

const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("./tasks.controller");

// get all tasks
router.get("/", getTasks);

// get a task by id
router.get("/:id", getTask);

// create a new task
router.post("/", createTask);

// update a task by id
router.patch("/:id", updateTask);

// delete a task by id
router.delete("/:id", deleteTask);

module.exports = router;
