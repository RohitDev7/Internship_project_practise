import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from "../component/Sidebar"
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from '../component/Header';

export default function EditUser() {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "Intern",
    });

    useEffect(() => {
        axios.get(`http://localhost:5001/users/${id}`)
            .then(res => setForm(res.data))
            .catch(err => console.log("Error fetching internship details", err))
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5001/users/${id}`, form);
            navigate("/user");
        }
        catch (error) {
            console.log("Error updating internship", error);
        }
    }

    return (
        <div>
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className={sidebarOpen ? "dashboard-container sidebar-open" : "dashboard-container"}>
                <div className="signup-parents">
                    <h2 className="signup-title">Edit User</h2>
                    <div className="signup-card">
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6} className="mb-1">
                                    <div className="form-group">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your full name"
                                            value={form.name}
                                            onChange={e => setForm({ ...form, name: e.target.value })}
                                            name="name"
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-1">
                                    <div className="form-group">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email"
                                            value={form.email}
                                            onChange={e => setForm({ ...form, email: e.target.value })}
                                            name="email"
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-1">
                                    <div className="form-group">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter password"
                                            value={form.password}
                                            onChange={e => setForm({ ...form, password: e.target.value })}
                                            name="password"
                                        />
                                    </div>
                                </Col>


                                <Col md={6} className="mb-1">
                                    <div className="form-group">
                                        <Form.Label>Role</Form.Label>
                                        <Form.Select
                                            value={form.role}
                                            onChange={e => setForm({ ...form, role: e.target.value })}
                                        >
                                            <option>HR</option>
                                            <option>Admin</option>
                                            <option>User</option>
                                        </Form.Select>
                                    </div>
                                </Col>
                            </Row>

                            <button className="signup-btn">Update User</button>

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
