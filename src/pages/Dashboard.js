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
    task =>
      new Date(task.dueDate) < new Date() && !task.completed
  ).length;

  const taskScore =
    totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  const studyScore = Math.min((totalStudyHours / 10) * 100, 100);

  const productivity = Math.round(taskScore * 0.6 + studyScore * 0.4);

  const recentTasks = tasks.slice(-5).reverse();

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
      {/* UI SAME */}
    </div>
  );
}

Dashboard.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
      priority: PropTypes.string,
      dueDate: PropTypes.string,
    })
  ).isRequired,
  studySessions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      duration: PropTypes.number,
      subject: PropTypes.string,
    })
  ).isRequired,
};

export default Dashboard;