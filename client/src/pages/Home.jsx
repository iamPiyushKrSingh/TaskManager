import React from "react";
import TaskForm from "../components/TaskForm";
import IncompleteList from "../components/TaskList-Incomplete";
import CompleteList from "../components/TaskList-Complete";

const Home = ({ tasks, addTask, deleteTask, editTask }) => {
  return (
    <div className="container mx-auto p-4">
      <TaskForm addTask={addTask} />
      <h2 className="text-3xl font-semibold my-5">Pending Tasks</h2>
      <IncompleteList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
      />

      <h2 className="text-3xl font-semibold my-5">Completed Tasks</h2>
      <CompleteList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default Home;
