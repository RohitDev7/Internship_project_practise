import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../component/Sidebar"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'


export default function EditEmployee() {
    const { id } = useParams();
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
        status:"",

    })

    useEffect(() => {
        axios.get(`http://localhost:5001/employees/${id}`)
            .then(res => setEmployeeData(res.data))
            .catch(err => console.log("Error fetching employees details", err))
    }, [id]);

    const updateEmployee = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5001/employees/${id}`, employeeData);
            navigate("/employees");
        }
        catch (error) {
            console.log("Error updating employee", error);
        }
    }


    return (
        <>
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

            <div className={sidebarOpen ? "dashboard-container sidebar-open" : "dashboard-container"}>
                <div className="signup-parents">
                    <h2 className="signup-title">Edit Employee</h2>
                    <div className="signup-card">
                        <form className="signup-form" onSubmit={updateEmployee}>
                            <Row>
                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            className="form-control"
                                            name="name"
                                            value={employeeData.name}
                                            onChange={e => setEmployeeData({ ...employeeData, name: e.target.value })}
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
                                        <label>Department</label>
                                        <select className="form-control" name="department"
                                            value={employeeData.department}
                                            onChange={e => setEmployeeData({ ...employeeData, department: e.target.value })}
                                            >
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
                                        <input
                                            className="form-control"
                                            name="designation"
                                            value={employeeData.designation}
                                            onChange={e => setEmployeeData({ ...employeeData, designation: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Experience</label>
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
                                        <label>Salary</label>
                                        <input
                                            className="form-control"
                                            name="salary"
                                            value={employeeData.salary}
                                            onChange={e => setEmployeeData({ ...employeeData, salary: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Joining Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="joiningDate"
                                            value={employeeData.joiningDate}
                                            onChange={e => setEmployeeData({ ...employeeData, joiningDate: e.target.value })}
                                        />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Location</label>
                                        <input
                                            className="form-control"
                                            name="location"
                                            value={employeeData.location}
                                            onChange={e => setEmployeeData({ ...employeeData, location: e.target.value })}
                                             />
                                    </div>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <div className="form-group">
                                        <label>Status</label>
                                        <select className="form-control" name="status" 
                                        value={employeeData.status}
                                            onChange={e => setEmployeeData({ ...employeeData, status: e.target.value })}
                                        >
                                            <option>Active</option>
                                            <option>Inactive</option>
                                        </select>
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
