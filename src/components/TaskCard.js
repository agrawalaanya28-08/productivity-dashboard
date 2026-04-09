import React from "react";
import PropTypes from "prop-types";

const TaskCard = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="card">
      <h3>{task.title}</h3>
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskCard;