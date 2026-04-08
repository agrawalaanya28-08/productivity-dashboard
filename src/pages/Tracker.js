import React, { useState } from "react";

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

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          style={{ marginRight: "10px" }}
        />

        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Hours"
          style={{ marginRight: "10px" }}
        />

        <button type="submit">Add</button>
      </form>

      <div className="card" style={{ marginTop: "20px" }}>
        <h3>Total Study Time</h3>
        <p>{totalStudyTime.toFixed(1)} hrs</p>
      </div>

      {studySessions.map((s) => (
        <div className="card" key={s.id} style={{ marginTop: "10px" }}>
          <p>{s.subject} - {s.duration} hrs</p>
          <button onClick={() => onDeleteSession(s.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Tracker;