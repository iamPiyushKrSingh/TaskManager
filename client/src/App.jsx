// require("dotenv").config();
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const [tasks, setTasks] = useState([]);

  // For the api URL in development, use "http://localhost:3000/tasks" //
  useEffect(() => {
    fetch("/tasks")
      .then((response) => response.json())
      .then((tasks) => {
        // console.log(tasks);
        setTasks(tasks);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const addTask = async (task) => {
    try {
      const response = await fetch("/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await response.json();
      setTasks([...tasks, data]);
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteTask = async (_id) => {
    try {
      await fetch(`/tasks/${_id}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task._id !== _id));
    } catch (err) {
      console.log(err.message);
    }
  };

  const updateTask = (_id, status) => {
    try {
      fetch(`/tasks/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !status }),
      });
      setTasks(
        tasks.map((task) => {
          if (task._id === _id) {
            task.completed = !status;
          }
          return task;
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  };
  true;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              editTask={updateTask}
              addTask={addTask}
              deleteTask={deleteTask}
              tasks={tasks}
            />
          }
        />
        <Route
          path="*"
          element={
            <h1 className="text-2xl text-center text-gray-400 mt-10">
              404 Not Found
            </h1>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
