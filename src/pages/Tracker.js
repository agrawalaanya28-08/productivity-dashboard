import React, { useState } from "react";
import PropTypes from "prop-types";

const Tracker = ({ studySessions, onAddSession, onDeleteSession }) => {
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject || duration <= 0) return;

    const newSession = {
      id: Date.now().toString(),
      subject,
      duration: parseFloat(duration),
    };

    onAddSession(newSession);
    setSubject("");
    setDuration("");
  };

  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "auto" }}>
      {/* UI SAME */}
    </div>
  );
};

Tracker.propTypes = {
  studySessions: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddSession: PropTypes.func.isRequired,
  onDeleteSession: PropTypes.func.isRequired,
};

export default Tracker;