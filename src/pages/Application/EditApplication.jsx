import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from "../component/Sidebar"
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from '../component/Header';

export default function EditInternship() {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const { id } = useParams();
    const navigate = useNavigate();

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


    useEffect(() => {
        axios.get(`http://localhost:5001/applications/${id}`)
            .then(res => setEmployeeData(res.data))
            .catch(err => console.log("Error fetching applications details", err))
    }, [id]);

    const updateInternship = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5001/applications/${id}`, employeeData);
            navigate("/application");
        }
        catch (error) {
            console.log("Error updating application", error);
        }
    }


    return (
        <>
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className={sidebarOpen ? "dashboard-container sidebar-open" : "dashboard-container"}>
                <div className="signup-parents">
                    <h2 className="signup-title">Edit Internship Application</h2>
                    <div className="signup-card">

                        <Form onSubmit={updateInternship}>
                            <Row>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input
                                            className="form-control"
                                            name="fullName"
                                            value={employeeData.fullName}
                                            onChange={e => setEmployeeData({ ...employeeData, fullName: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            className="form-control"
                                            name="email"
                                            value={employeeData.email}
                                            onChange={e => setEmployeeData({ ...employeeData, email: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input
                                            className="form-control"
                                            name="phone"
                                            value={employeeData.phone}
                                            onChange={e => setEmployeeData({ ...employeeData, phone: e.target.value })}
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
                                             value={employeeData.dob}
                                            onChange={e => setEmployeeData({ ...employeeData, dob: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <select
                                            className="form-control"
                                            name="gender"
                                            value={employeeData.gender}
                                            onChange={e => setEmployeeData({ ...employeeData, gender: e.target.value })}
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
                                            value={employeeData.experience}
                                            onChange={e => setEmployeeData({ ...employeeData, experience: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Current Company</label>
                                        <input
                                            className="form-control"
                                            name="currentCompany"
                                            value={employeeData.currentCompany}
                                            onChange={e => setEmployeeData({ ...employeeData, currentCompany: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Current CTC</label>
                                        <input
                                            className="form-control"
                                            name="currentCTC"
                                            value={employeeData.currentCTC}
                                            onChange={e => setEmployeeData({ ...employeeData, currentCTC: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Expected CTC</label>
                                        <input
                                            className="form-control"
                                            name="expectedCTC"
                                            value={employeeData.expectedCTC}
                                            onChange={e => setEmployeeData({ ...employeeData, expectedCTC: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Skills</label>
                                        <input
                                            className="form-control"
                                            name="skills"
                                            value={employeeData.skills}
                                            onChange={e => setEmployeeData({ ...employeeData, skills: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Education</label>
                                        <input
                                            className="form-control"
                                            name="education"
                                            value={employeeData.education}
                                            onChange={e => setEmployeeData({ ...employeeData, education: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>University</label>
                                        <input
                                            className="form-control"
                                            name="university"
                                            value={employeeData.university}
                                            onChange={e => setEmployeeData({ ...employeeData, university: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Graduation Year</label>
                                        <input
                                            className="form-control"
                                            name="graduationYear"
                                            value={employeeData.graduationYear}
                                            onChange={e => setEmployeeData({ ...employeeData, graduationYear: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input
                                            className="form-control"
                                            name="address"
                                            value={employeeData.address}
                                            onChange={e => setEmployeeData({ ...employeeData, address: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>City</label>
                                        <input
                                            className="form-control"
                                            name="city"
                                            value={employeeData.city}
                                            onChange={e => setEmployeeData({ ...employeeData, city: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>State</label>
                                        <input
                                            className="form-control"
                                            name="state"
                                             value={employeeData.state}
                                            onChange={e => setEmployeeData({ ...employeeData, state: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Country</label>
                                        <input
                                            className="form-control"
                                            name="country"
                                            value={employeeData.country}
                                            onChange={e => setEmployeeData({ ...employeeData, country: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>LinkedIn</label>
                                        <input
                                            className="form-control"
                                            name="linkedin"
                                            value={employeeData.linkedin}
                                            onChange={e => setEmployeeData({ ...employeeData, linkedin: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Portfolio</label>
                                        <input
                                            className="form-control"
                                            name="portfolio"
                                            value={employeeData.portfolio}
                                            onChange={e => setEmployeeData({ ...employeeData, portfolio: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Resume URL</label>
                                        <input
                                            className="form-control"
                                            name="resume"
                                            value={employeeData.resume}
                                            onChange={e => setEmployeeData({ ...employeeData, resume: e.target.value })}
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
                                           value={employeeData.coverLetter}
                                            onChange={e => setEmployeeData({ ...employeeData, coverLetter: e.target.value })}
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
        </>
    )
}