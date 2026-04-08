import React, { useState } from "react";
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
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "auto" }}>
      <h2>Task Manager</h2>

      {/* FORM */}
      <form
        onSubmit={addTask}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #fed7aa",
          }}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button type="submit">Add Task</button>
      </form>

      {/* TASK LIST */}
      <div style={{ marginTop: "30px" }}>
        {tasks.length === 0 ? (
          <p>No tasks yet 🚀</p>
        ) : (
          tasks.map((task) => (
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

export default Tasks;