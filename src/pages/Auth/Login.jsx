import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom";
import MyNavbar from '../component/Navbar';
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (!email || !password) {
            setError("All fields are required");
            return;
        }
        try {
            const res = await axios.get(
                `http://localhost:5001/users?email=${email}&password=${password}`
            );
            if (res.data.length > 0) {
                const user = res.data[0];
                if (user.role === "Admin") {
                    login(user);
                    navigate("/all-application");
                    return;
                }
                const internshipRes = await axios.get(
                    "http://localhost:5001/internships"
                );
                const applicationRes = await axios.get(
                    "http://localhost:5001/applications"
                );
                const internshipMatch = internshipRes.data.find(
                    (item) => item.email === email
                );
                const applicationMatch = applicationRes.data.find(
                    (item) => item.email === email
                );
                if (internshipMatch || applicationMatch) {
                    login(user);
                    navigate("/all-application");
                } else {
                    setShowPopup(true);
                }
            } else {
                setError("Invalid email or password");
            }
        } catch (err) {
            setError("Something went wrong");
        }
    };
    return (
        <>
            <MyNavbar />
            <div className="signup-parent">
                <div className="signup-child">
                    <div className="signup-card">
                        <h2 className="signup-title">Sign In</h2>
                        <form className="signup-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button className="signup-btn">Login</button>
                            {error && <p style={{ color: "red" }}>{error}</p>}
                        </form>
                        <Link to="/signup" className='signup-signin'>Sign up</Link>
                    </div>
                </div>
            </div>
            {/* POPUP */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <h3>Form Required</h3>
                        <p>You must fill Internship or Application form before login</p>
                        <button
                            className="popup-btn"
                            onClick={() => navigate("/create-internship")}
                        >
                            Apply Internship
                        </button>
                        <button
                            className="popup-btn"
                            onClick={() => navigate("/application-form")}
                        >
                            Apply Experience Application
                        </button>
                        <button
                            className="popup-btn"
                            onClick={() => setShowPopup(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}