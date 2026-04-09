import React from "react";
import PropTypes from "prop-types";

function StatusCard({ tasks, hours, status }) {
  return (
    <div>
      <p>{tasks}</p>
      <p>{hours}</p>
      <p>{status}</p>
    </div>
  );
}

StatusCard.propTypes = {
  tasks: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  status: PropTypes.oneOf(["Good", "Average", "Poor"]).isRequired,
};

export default StatusCard;