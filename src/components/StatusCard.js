import React from "react";

function StatusCard(props) {
  const validStatuses = ["Good", "Average", "Poor"];
  const isValid = validStatuses.includes(props.status);

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px",
    marginTop: "15px",
    width: "320px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  const statusStyle = {
    color:
      props.status === "Good"
        ? "green"
        : props.status === "Average"
        ? "orange"
        : "red",
    fontWeight: "bold",
  };

  const errorStyle = {
    color: "white",
    backgroundColor: "red",
    padding: "5px",
    marginTop: "10px",
  };

  return (
    <div style={cardStyle}>
      <h3>Productivity Status</h3>

      <p>
        <b>Tasks Completed:</b> {props.tasks}
      </p>

      <p>
        <b>Study Hours:</b> {props.hours}
      </p>

      {isValid ? (
        <p>
          <b>Status:</b>{" "}
          <span style={statusStyle}>{props.status}</span>
        </p>
      ) : (
        <div style={errorStyle}>
          Invalid status provided
        </div>
      )}
    </div>
  );
}

export default StatusCard;