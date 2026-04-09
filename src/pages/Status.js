import React from "react";
import PropTypes from "prop-types";

const Status = ({ tasks, studySessions }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;

  const totalStudyHours = studySessions.reduce(
    (sum, s) => sum + s.duration,
    0
  );

  const productivity = Math.round(
    (completed / total || 0) * 100 * 0.6 +
    Math.min((totalStudyHours / 10) * 100, 100) * 0.4
  );

  return (
    <div style={{ padding: "30px" }}>
      <h2>Status</h2>
      <p>Tasks: {completed}/{total}</p>
      <p>Study Hours: {totalStudyHours}</p>
      <h1>{productivity}%</h1>
    </div>
  );
};

Status.propTypes = {
  tasks: PropTypes.array.isRequired,
  studySessions: PropTypes.array.isRequired,
};

export default Status;