import React from "react";
import Complete from "./TaskItem-Complete";

const CompleteList = ({ tasks, deleteTask, editTask }) => {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-500">There are no tasks.</p>;
  }

  let count = 0;
  tasks.map((task) => {
    if (!task.completed) {
      count++;
    }
  });

  if (count === tasks.length) {
    return (
      <p className="text-center text-gray-500">There are no completed tasks.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
      {/* Loop through the tasks array and if task.completed is false then create a Task Item */}
      {tasks.map((task) => {
        if (task.completed) {
          return (
            <Complete
              key={task._id}
              task={task}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          );
        }
      })}
    </div>
  );
};

export default CompleteList;
