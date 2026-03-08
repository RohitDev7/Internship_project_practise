import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Sidebar from "../component/Sidebar"

export default function InternshipList() {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [internships, setInternships] = useState([])

    const InternshipFetch = async () => {
        const response = await axios.get("http://localhost:5001/internships")
        setInternships(response.data)
    }

    const deleteItem = async (id) => {
        await axios.delete(`http://localhost:5001/internships/${id}`)
        setInternships(internships.filter((item) => item.id !== id))
    }

    useEffect(() => {
        InternshipFetch()
    }, [])

    return (
        <div>
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

            <div className={sidebarOpen ? "dashboard-container sidebar-open" : "dashboard-container"}>
                    <h2 className="signup-title">Internship</h2>
                <div className="chart-card internship-card">
                    <Table bordered responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>City</th>
                                <th>Internship</th>
                                <th>Department</th>
                                <th>Location</th>
                                <th>Type</th>
                                <th>Duration</th>
                                <th>Stipend</th>
                                <th>College</th>
                                <th>Course</th>
                                <th>Year</th>
                                <th>Skills</th>
                                <th>Experience</th>
                                <th>Status</th>
                                <th>Applied Date</th>
                                <th className='cover-letter'>Cover Letter</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {internships.map((item) => (
                                <tr key={item.id}>
<td>{item.id}</td>
                                    <td>{item.fullName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.city}</td>
                                    <td>{item.internshipTitle}</td>
                                    <td>{item.department}</td>
                                    <td>{item.location}</td>
                                    <td>{item.type}</td>
                                    <td>{item.duration}</td>
                                    <td>{item.stipend}</td>
                                    <td>{item.college}</td>
                                    <td>{item.course}</td>
                                    <td>{item.year}</td>
                                    <td>{item.skills}</td>
                                    <td>{item.experience}</td>

                                    <td style={{
                                        color:
                                            item.status === "Pending"
                                                ? "orange"
                                                : item.status === "Approved"
                                                ? "green"
                                                : "red"
                                    }}>
                                        {item.status}
                                    </td>

                                    <td>{item.appliedDate}</td>

                                    <td className='cover-letter'>{item.coverLetter}</td>

                                    <td>
                                        <Link to={`/edit-internship/${item.id}`}>
                                            <button>Edit</button>
                                        </Link>

                                        <button onClick={() => deleteItem(item.id)}>
                                            Delete
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </Table>

                </div>
            </div>
        </div>
    )
}
