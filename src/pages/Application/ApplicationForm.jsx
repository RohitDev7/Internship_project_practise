import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar"
import axios from 'axios';

export default function ApplicationForm() {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const [employeeData, setEmployeeData] = useState({
        userId: "",
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        experience: "",
        currentCompany: "",
        currentCTC: "",
        expectedCTC: "",
        skills: "",
        education: "",
        university: "",
        graduationYear: "",
        address: "",
        city: "",
        state: "",
        country: "",
        linkedin: "",
        portfolio: "",
        resume: "",
        coverLetter: ""
    });

    const handleChnage = (e) => {
        setEmployeeData({ ...employeeData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5001/applications", employeeData)
        navigate("/application")
    }


    return (
        <div>

            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />


            <div className={sidebarOpen ? "dashboard-container sidebar-open" : "dashboard-container"}>
                <div className="signup-parents">
                    <h2 className="signup-title">Application</h2>
                    <div className="signup-card">
                        <Form onSubmit={handleSubmit}>
                            <Row>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input
                                            className="form-control"
                                            name="fullName"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            className="form-control"
                                            name="email"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input
                                            className="form-control"
                                            name="phone"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Date of Birth</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="dob"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <select
                                            className="form-control"
                                            name="gender"
                                            onChange={handleChnage}
                                        >
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Total Experience</label>
                                        <input
                                            className="form-control"
                                            name="experience"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Current Company</label>
                                        <input
                                            className="form-control"
                                            name="currentCompany"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Current CTC</label>
                                        <input
                                            className="form-control"
                                            name="currentCTC"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Expected CTC</label>
                                        <input
                                            className="form-control"
                                            name="expectedCTC"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Skills</label>
                                        <input
                                            className="form-control"
                                            name="skills"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Education</label>
                                        <input
                                            className="form-control"
                                            name="education"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>University</label>
                                        <input
                                            className="form-control"
                                            name="university"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Graduation Year</label>
                                        <input
                                            className="form-control"
                                            name="graduationYear"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input
                                            className="form-control"
                                            name="address"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>City</label>
                                        <input
                                            className="form-control"
                                            name="city"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>State</label>
                                        <input
                                            className="form-control"
                                            name="state"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Country</label>
                                        <input
                                            className="form-control"
                                            name="country"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>LinkedIn</label>
                                        <input
                                            className="form-control"
                                            name="linkedin"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Portfolio</label>
                                        <input
                                            className="form-control"
                                            name="portfolio"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Resume URL</label>
                                        <input
                                            className="form-control"
                                            name="resume"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={12} className="mb-3">
                                    <div className="form-group">
                                        <label>Cover Letter</label>
                                        <textarea
                                            className="form-control"
                                            name="coverLetter"
                                            rows="4"
                                            onChange={handleChnage}
                                        />
                                    </div>
                                </Col>

                                <Col md={12}>
                                    <button className="btn btn-success">
                                        Submit Application
                                    </button>
                                </Col>

                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
