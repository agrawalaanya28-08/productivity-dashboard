import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "#f97316",
        padding: "15px 30px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link style={link} to="/">Dashboard</Link>
      <Link style={link} to="/tasks">Tasks</Link>
      <Link style={link} to="/tracker">Tracker</Link>
      <Link style={link} to="/status">Status</Link>
      <Link style={link} to="/notes">Notes</Link>
    </nav>
  );
};

const link = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Navbar;