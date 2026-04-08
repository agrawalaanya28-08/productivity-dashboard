import React from "react";

const Status = ({ tasks, studySessions }) => {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;

  const taskScore = total === 0 ? 0 : (completed / total) * 100;

  const totalStudyHours = studySessions.reduce(
    (sum, s) => sum + s.duration,
    0
  );

  const studyScore = Math.min((totalStudyHours / 10) * 100, 100);

  const productivity = Math.round(
    taskScore * 0.6 + studyScore * 0.4
  );

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "auto" }}>
      <h2>Status Overview</h2>

      <div className="card" style={{ marginTop: "20px" }}>
        <p>Total Tasks: {total}</p>
        <p>Completed Tasks: {completed}</p>
        <p>Study Hours: {totalStudyHours.toFixed(1)}</p>
      </div>

      <div className="card" style={{ marginTop: "20px" }}>
        <h3>Productivity Score</h3>
        <h1 style={{ color: "#f97316" }}>{productivity}%</h1>
      </div>
    </div>
  );
};

export default Status;