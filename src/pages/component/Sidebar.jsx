import React from "react";
import { Link, Links } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {

  return (
    <>
      <div className={open ? "sidebar active" : "sidebar"}>
        <div className="d-flex align-items-center w-100 justify-content-between p-4">
          <Link to="/">
            <h4 className="logo m-0 p-0">LOGO</h4>
          </Link>
          <button className="toggleBtn" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
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