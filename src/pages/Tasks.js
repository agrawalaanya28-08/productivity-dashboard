import React, { useState } from "react";
import PropTypes from "prop-types";
import TaskCard from "../components/TaskCard";

const Tasks = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const addTask = (e) => {
    e.preventDefault();
    if (!title || !dueDate) return;

    const newTask = {
      id: Date.now(),
      title,
      dueDate,
      priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDueDate("");
    setPriority("Medium");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "auto" }}>
      <h2 style={{ marginBottom: "20px" }}>Task Manager</h2>

      <form onSubmit={addTask} style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        marginBottom: "25px"
      }}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "10px", flex: 1 }}
        />

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          style={{ padding: "10px" }}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ padding: "10px" }}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button type="submit" style={{ padding: "10px 15px" }}>
          Add Task
        </button>
      </form>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {tasks.length === 0 ? (
          <p>No tasks yet 🚀</p>
        ) : (
          tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default Tasks;