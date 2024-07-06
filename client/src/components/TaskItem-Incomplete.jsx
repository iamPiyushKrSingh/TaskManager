import React from "react";
import completeIcon from "../assets/check-mark-button.png";
import deleteIcon from "../assets/delete.png";

const Incomplete = ({ task, deleteTask, editTask }) => {
  return (
    <div className="flex justify-between p-4 rounded shadow-lg bg-[#B2C6B6]">
      <div>
        <h2 className="text-xl font-semibold">{task.title}</h2>
      </div>
      <div>
        <button
          onClick={() => editTask(task._id, task.completed)}
          className="bg-[#185a4c] rounded-lg p-2 w-10 mx-2"
        >
          <img src={completeIcon} alt="Complete" className="object-cover" />
        </button>
        <button
          onClick={() => deleteTask(task._id)}
          className="bg-[#E8ECD6] rounded-lg p-2 w-10 mx-2"
        >
          <img src={deleteIcon} alt="Delete" className="object-cover" />
        </button>
      </div>
    </div>
  );
};

export default Incomplete;
