import React from "react";
import PropTypes from "prop-types";

function StatusCard(props) {
  const validStatuses = ["Good", "Average", "Poor"];
  const isValid = validStatuses.includes(props.status);

  return (
    <div>
      {/* UI SAME */}
    </div>
  );
}

StatusCard.propTypes = {
  tasks: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export default StatusCard;