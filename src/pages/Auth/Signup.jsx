import React, { useState } from "react";
import "./LoginSignup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Intern"
  })

  const [error, setError] = useState("")
  const [showPopup, setShowPopup] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required")
      return
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    try {

      await axios.post("http://localhost:5001/users", {
        name: form.name,
        email: form.email,
        password: form.password,
        role: form.role
      })

      setShowPopup(true)

    } catch (err) {
      setError("Something went wrong")
    }
  }

  return (
    <div className="signup-parent">
      <div className="signup-child">
        <div className="signup-card">

          <h2 className="signup-title">Signup</h2>

          <form className="signup-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                name="name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                name="email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                name="password"
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
              />
            </div>

            <div className="form-group">
              <label>Role</label>
              <select
                value={form.role}
                onChange={handleChange}
                name="role"
              >
                <option>Intern</option>
                <option>HR</option>
                <option>Admin</option>
              </select>
            </div>

            <button type="submit" className="signup-btn">
              Signup
            </button>
<Link to="/login">Login</Link>

            {error && (
              <p style={{ color: "red" }}>{error}</p>
            )}

          </form>

        </div>
      </div>

      {/* Popup */}

      {showPopup && (

        <div className="popup-overlay">

          <div className="popup-box">

            <h3>Signup Successful 🎉</h3>

            <p>What would you like to do?</p>

            <button
              className="popup-btn"
              onClick={() => navigate("/create-internship")}
            >
              Apply Internship
            </button>

            <button
              className="popup-btn"
              onClick={() => navigate("/all-application")}
            >
              Apply Experience Application
            </button>

          </div>

        </div>

      )}

    </div>
  )
}