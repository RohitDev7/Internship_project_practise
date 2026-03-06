import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from "../component/Sidebar"
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function EditInternship() {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        internshipTitle: "",
        department: "",
        location: "",
        type: "",
        duration: "",
        stipend: "",
        college: "",
        course: "",
        year: "",
        skills: "",
        experience: "",
        status: "",
        appliedDate: "",
        coverLetter: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:5001/internships/${id}`)
            .then(res => setForm(res.data))
            .catch(err => console.log("Error fetching internship details", err))
    }, [id]);

    const updateInternship = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5001/internships/${id}`, form);
            navigate("/internships");
        }
        catch (error) {
            console.log("Error updating internship", error);
        }
    }

    return (
        <>
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

            <div className={sidebarOpen ? "dashboard-container sidebar-open" : "dashboard-container"}>
                <div className="signup-parents">
                    <h2 className="signup-title">Edit Internship Application</h2>
                    <div className="signup-card">

                        <form className="signup-form" onSubmit={updateInternship}>
                            <Row>
                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={form.fullName}
                                            onChange={e => setForm({ ...form, fullName: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            value={form.email}
                                            onChange={e => setForm({ ...form, email: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={form.phone}
                                            onChange={e => setForm({ ...form, phone: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={form.city}
                                            onChange={e => setForm({ ...form, city: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <Form.Label>Internship Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={form.internshipTitle}
                                            onChange={e => setForm({ ...form, internshipTitle: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <Form.Label>Department</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={form.department}
                                            onChange={e => setForm({ ...form, department: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <Form.Label>Location</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={form.location}
                                            onChange={e => setForm({ ...form, location: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Select
                                            value={form.type}
                                            onChange={e => setForm({ ...form, type: e.target.value })}
                                        >
                                            <option value="Online">Online</option>
                                            <option value="Offline">Offline</option>
                                        </Form.Select>
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <Form.Label>Duration</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={form.duration}
                                            onChange={e => setForm({ ...form, duration: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <Form.Label>Stipend</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={form.stipend}
                                            onChange={e => setForm({ ...form, stipend: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <Form.Label>College</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={form.college}
                                            onChange={e => setForm({ ...form, college: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <Form.Label>Course</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={form.course}
                                            onChange={e => setForm({ ...form, course: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <Form.Label>Year</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={form.year}
                                            onChange={e => setForm({ ...form, year: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <Form.Label>Skills</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={form.skills}
                                            onChange={e => setForm({ ...form, skills: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <Form.Label>Experience</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={form.experience}
                                            onChange={e => setForm({ ...form, experience: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <Form.Label>Status</Form.Label>
                                        <Form.Select
                                            value={form.status}
                                            onChange={e => setForm({ ...form, status: e.target.value })}
                                        >
                                            <option value="">Select Status</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Approved">Approved</option>
                                            <option value="Rejected">Rejected</option>
                                        </Form.Select>
                                    </div>
                                </Col>

                                <Col md={6} className="mb-1">
                                    <div className="form-group">
                                        <Form.Label>Applied Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={form.appliedDate}
                                            onChange={e => setForm({ ...form, appliedDate: e.target.value })}
                                        />
                                    </div>
                                </Col>


                                <Col md={12} className="mb-1">
                                    <div className="form-group">
                                        <label>Cover Letter</label>
                                        <textarea
                                            type="text"
                                            value={form.coverLetter}
                                            onChange={e => setForm({ ...form, coverLetter: e.target.value })}
                                        ></textarea>
                                    </div>
                                </Col>

                                <Col md={12} className="mb-3">
                                    <Button type="submit" className="signup-btn">
                                        Update Application
                                    </Button>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}