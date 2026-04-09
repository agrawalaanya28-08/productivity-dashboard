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

  const totalStudyTime = studySessions.reduce(
    (sum, s) => sum + s.duration,
    0
  );

  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "auto" }}>
      <h2>Study Tracker</h2>

      <form onSubmit={handleSubmit}>
        <input value={subject} onChange={(e) => setSubject(e.target.value)} />
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
        <button>Add</button>
      </form>

      <p>Total: {totalStudyTime.toFixed(1)} hrs</p>

      {studySessions.map(s => (
        <div key={s.id}>
          {s.subject} - {s.duration}
          <button onClick={() => onDeleteSession(s.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

Tracker.propTypes = {
  studySessions: PropTypes.array.isRequired,
  onAddSession: PropTypes.func.isRequired,
  onDeleteSession: PropTypes.func.isRequired,
};

export default Tracker;