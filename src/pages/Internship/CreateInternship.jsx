import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export default function CreateInternship() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        userId: "",
        fullName: "",
        email: "",
        phone: "",
        city: "",
        internshipTitle: "",
        department: "",
        location: "",
        type: "Online",
        duration: "",
        stipend: "",
        college: "",
        course: "",
        year: "",
        skills: "",
        experience: "",
        resume: "",
        portfolio: "",
        linkedin: "",
        coverLetter: "",
        availability: "",
        status: "Pending",
        appliedDate: new Date().toISOString().split("T")[0]
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:5001/internships", form);

        navigate("/login");
    };

    return (
        <div className="signup-parent">
            <div className="signup-child">
                <div className="signup-card">

                    <h2 className="signup-title">Internship Application</h2>

                    <form className="signup-form" onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        onChange={handleChange}
                                    />
                                </div>
                            </Col>

                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                    />
                                </div>
                            </Col>


                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        onChange={handleChange}
                                    />
                                </div>
                            </Col>


                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        onChange={handleChange}
                                    />
                                </div>
                            </Col>


                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>Internship Job Name</label>
                                    <input
                                        type="text"
                                        name="internshipTitle"
                                        onChange={handleChange}
                                    />
                                </div>
                            </Col>

                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>Department</label>
                                    <input
                                        type="text"
                                        name="department"
                                        onChange={handleChange}
                                    />
                                </div>
                            </Col>



                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        onChange={handleChange}
                                    />
                                </div>
                            </Col>


                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>Type</label>
                                    <select name="type" onChange={handleChange}>
                                        <option value="Online">Online</option>
                                        <option value="Offline">Offline</option>
                                    </select>
                                </div>
                            </Col>


                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>Duration</label>
                                    <select name="duration" onChange={handleChange}>
                                        <option value="1 Month">1 Month</option>
                                        <option value="3 Months">3 Months</option>
                                        <option value="6 Months">6 Months</option>
                                    </select>
                                </div>
                            </Col>


                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>Salary</label>
                                    <input
                                        type="text"
                                        name="stipend"
                                        onChange={handleChange}
                                    />
                                </div>

                            </Col>

                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>College</label>
                                    <input
                                        type="text"
                                        name="college"
                                        onChange={handleChange}
                                    />
                                </div>
                            </Col>

                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>Course</label>
                                    <input
                                        type="text"
                                        name="course"
                                        onChange={handleChange}
                                    />
                                </div>
                            </Col>


                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>Year</label>
                                    <input
                                        type="text"
                                        name="year"
                                        onChange={handleChange}
                                    />
                                </div>
                            </Col>


                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>Skills</label>
                                    <input
                                        type="text"
                                        name="skills"
                                        onChange={handleChange}
                                    />
                                </div>
                            </Col>

                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>Experience</label>
                                    <input
                                        type="text"
                                        name="experience"
                                        onChange={handleChange}
                                    />
                                </div>
                            </Col>

                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>Resume Link</label>
                                    <input
                                        type="text"
                                        name="resume"
                                        onChange={handleChange}
                                    />
                                </div>
                            </Col>


                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>Portfolio</label>
                                    <input
                                        type="text"
                                        name="portfolio"
                                        onChange={handleChange}
                                    />
                                </div>
                            </Col>


                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>LinkedIn</label>
                                    <input
                                        type="text"
                                        name="linkedin"
                                        onChange={handleChange}
                                    />
                                </div>
                            </Col>

                            <Col md={6} className="mb-3">
                                <div className="form-group">
                                    <label>Availability</label>
                                    <select name="availability" onChange={handleChange}>
                                        <option value="Immediate">Immediate</option>
                                        <option value="1 Month">1 Month</option>
                                    </select>
                                </div>
                            </Col>
                            <Col md={12} className="mb-1">
                                <div className="form-group">
                                    <label>Cover Letter</label>
                                    <textarea
                                        name="coverLetter"
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </Col>



                            <Col md={12} className="mb-3">
                                <button type="submit" className="signup-btn">
                                    Apply Internship
                                </button>
                            </Col>
                        </Row>
                    </form>

                </div>
            </div>
        </div>
    );
}