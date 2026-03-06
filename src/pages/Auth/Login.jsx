import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { AuthContext } from "../../context/AuthContext"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { login } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        if (!email || !password) {
            setError("All fields are required")
            return
        }

        if (password.length < 3) {
            setError("Password must be at least 3 characters")
            return
        }

        try {
            const res = await axios.get(
                `http://localhost:5001/users?email=${email}&password=${password}`
            )
            if (res.data.length > 0) {
                login(res.data[0])
                navigate("/dashboard")
            } else {
                setError("Invalid email or password")
            }
        } catch (err) {
            setError("Something went wrong")
        }
    }

    return (
        <>
            <div className="signup-parent">
                <div className="signup-child">
                    <div className="signup-card">
                        <h2 className="signup-title">Sign In</h2>
                        <form className="signup-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button className="signup-btn">Login</button>
                            {error && <p style={{ color: "red" }}>{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
