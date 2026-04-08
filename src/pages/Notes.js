import React, { useState } from "react";

const Notes = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (!note) return;
    setNotes([...notes, note]);
    setNote("");
  };

  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "auto" }}>
      <h2>Notes</h2>

      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write a note..."
      />

      <button onClick={addNote} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <div style={{ marginTop: "20px" }}>
        {notes.map((n, i) => (
          <div className="card" key={i} style={{ marginTop: "10px" }}>
            {n}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;