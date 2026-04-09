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
      {/* UI SAME */}
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    dueDate: PropTypes.string,
    priority: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskCard;