import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Status from "./pages/Status";
import Tracker from "./pages/Tracker";
import Notes from "./pages/Notes";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [studySessions, setStudySessions] = useState([]);

  // 🔥 CLEAR OLD DATA (for clean demo)
  useEffect(() => {
    localStorage.clear();
  }, []);

  // Load tasks
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Load sessions
  useEffect(() => {
    const savedSessions = JSON.parse(localStorage.getItem("sessions"));
    if (savedSessions) setStudySessions(savedSessions);
  }, []);

  useEffect(() => {
    localStorage.setItem("sessions", JSON.stringify(studySessions));
  }, [studySessions]);

  const addSession = (session) => {
    setStudySessions([...studySessions, session]);
  };

  const deleteSession = (id) => {
    setStudySessions(studySessions.filter((s) => s.id !== id));
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard tasks={tasks} studySessions={studySessions} />} />
        <Route path="/tasks" element={<Tasks tasks={tasks} setTasks={setTasks} />} />
        <Route path="/tracker" element={
          <Tracker
            studySessions={studySessions}
            onAddSession={addSession}
            onDeleteSession={deleteSession}
          />
        }/>
        <Route path="/status" element={<Status tasks={tasks} studySessions={studySessions} />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  );
}

export default App;