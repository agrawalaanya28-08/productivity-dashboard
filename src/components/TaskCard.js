import React from "react";

const TaskCard = ({ task, toggleComplete, deleteTask }) => {
  const getPriorityClass = (priority) => {
    if (priority === "High") return "high";
    if (priority === "Medium") return "medium";
    return "low";
  };

  const isOverdue =
    new Date(task.dueDate) < new Date() && !task.completed;

  return (
    <div
      className="card"
      style={{
        marginBottom: "15px",
        textAlign: "left",
      }}
    >
      <h3 style={{ marginBottom: "8px" }}>{task.title}</h3>

      <p style={{ margin: "4px 0" }}>
        📅 {new Date(task.dueDate).toLocaleDateString()}
      </p>

      <div style={{ marginTop: "8px" }}>
        <span className={`priority ${getPriorityClass(task.priority)}`}>
          {task.priority}
        </span>
      </div>

      {isOverdue && (
        <p style={{ color: "red", marginTop: "8px" }}>
          ⚠ Overdue
        </p>
      )}

      {/* ACTIONS */}
      <div
        style={{
          marginTop: "12px",
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;