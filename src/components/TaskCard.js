import React from "react";
import PropTypes from "prop-types";

const TaskCard = ({ task, toggleComplete, deleteTask }) => {
  const getPriorityClass = (priority) => {
    if (priority === "High") return "high";
    if (priority === "Medium") return "medium";
    return "low";
  };

  const isOverdue =
    new Date(task.dueDate) < new Date() && !task.completed;

  return (
    <div className="card">
      <h3>{task.title}</h3>
      <p>📅 {new Date(task.dueDate).toLocaleDateString()}</p>
      <span className={`priority ${getPriorityClass(task.priority)}`}>
        {task.priority}
      </span>

      {isOverdue && <p style={{ color: "red" }}>⚠ Overdue</p>}

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