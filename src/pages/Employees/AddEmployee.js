import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../component/Sidebar"
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function AddEmployee() {
      const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const [employeeData, setEmployeeData] = useState({
        userId: "",
        name: "",
        email: "",
        phone: "",
        department: "",
        designation: "",
        experience: "",
        salary: "",
        joiningDate: "",
        location: "",

    })

    const handleChange = (e) => {
        setEmployeeData({ ...employeeData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:5001/employees", employeeData);

        navigate("/employees")

    }


    return (
        <>
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

            <div className={sidebarOpen ? "dashboard-container sidebar-open" : "dashboard-container"}>
                <div className="signup-parents">
                    <h2 className="signup-title">Add Employee</h2>
                    <div className="signup-card">
                        <form className="signup-form" onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            className="form-control"
                                            name="name"
                                            onChange={handleChange}
                                        />

                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" name="email" onChange={handleChange} />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input className="form-control" name="phone" onChange={handleChange} />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Department</label>
                                        <select className="form-control" name="department" onChange={handleChange}>
                                            <option>IT</option>
                                            <option>HR</option>
                                            <option>Finance</option>
                                            <option>Marketing</option>
                                        </select>
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Designation</label>
                                        <input className="form-control" name="designation" onChange={handleChange} />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Experience</label>
                                        <input className="form-control" name="experience" onChange={handleChange} />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Salary</label>
                                        <input className="form-control" name="salary" onChange={handleChange} />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Joining Date</label>
                                        <input type="date" className="form-control" name="joiningDate" onChange={handleChange} />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Location</label>
                                        <input className="form-control" name="location" onChange={handleChange} />
                                    </div>
                                </Col>


                                <Col md={12} className="mb-3">
                                    <Button type="submit" className="signup-btn">Save Employee</Button>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
