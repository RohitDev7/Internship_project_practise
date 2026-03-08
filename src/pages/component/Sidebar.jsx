import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {

  return (
    <>
      <div className={open ? "sidebar active" : "sidebar"}>

        <button className="toggleBtn" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/internships">Internships</Link>
          </li>

          <li>
            <Link to="/employees">Employees</Link>
          </li>

          <li>
            <Link to="/application">Application</Link>
          </li>
        </ul>

      </div>
    </>
  );
}