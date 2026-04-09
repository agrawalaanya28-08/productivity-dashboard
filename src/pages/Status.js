import React from "react";
import PropTypes from "prop-types";

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
      {/* UI SAME */}
    </div>
  );
};

Status.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  studySessions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Status;