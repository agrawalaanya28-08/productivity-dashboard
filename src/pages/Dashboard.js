import React from "react";
import PropTypes from "prop-types";

function Dashboard({ tasks, studySessions }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  const totalStudyHours = studySessions.reduce(
    (sum, session) => sum + session.duration,
    0
  );

  const overdueTasks = tasks.filter(
    task => new Date(task.dueDate) < new Date() && !task.completed
  ).length;

  const taskScore =
    totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  const studyScore = Math.min((totalStudyHours / 10) * 100, 100);

  const productivity = Math.round(taskScore * 0.6 + studyScore * 0.4);

  const recentTasks = tasks.slice(-5).reverse();

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
      <h2>Dashboard Overview</h2>
      <p>Welcome back! Here's your productivity summary.</p>

      <div className="grid" style={{ marginTop: "20px" }}>
        <div className="card">
          <h3>Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>

        <div className="card">
          <h3>Completed Tasks</h3>
          <p>{completedTasks}</p>
        </div>

        <div className="card">
          <h3>Study Hours</h3>
          <p>{totalStudyHours.toFixed(1)}h</p>
        </div>

        <div className="card">
          <h3>Study Sessions</h3>
          <p>{studySessions.length}</p>
        </div>
      </div>

      <div className="grid" style={{ marginTop: "15px" }}>
        <div className="card">
          <h3>Overdue Tasks</h3>
          <p>{overdueTasks}</p>
        </div>

        <div className="card">
          <h3>Productivity</h3>
          <p style={{ color: "#f97316", fontWeight: "bold" }}>
            {productivity}%
          </p>
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>Recent Tasks</h3>
        {recentTasks.length > 0 ? (
          recentTasks.map(task => (
            <div key={task.id} className="card" style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
              <input type="checkbox" checked={task.completed} readOnly />
              <div>
                <h4 style={{ margin: 0 }}>{task.title}</h4>
                <small>
                  {task.priority} • Due:{" "}
                  {new Date(task.dueDate).toLocaleDateString()}
                </small>
              </div>
            </div>
          ))
        ) : (
          <p>No tasks yet.</p>
        )}
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  tasks: PropTypes.array.isRequired,
  studySessions: PropTypes.array.isRequired,
};

export default Dashboard;