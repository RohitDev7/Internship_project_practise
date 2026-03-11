import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Sidebar from "../component/Sidebar"
import Header from '../component/Header';

export default function UserPersona() {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [internships, setInternships] = useState([])
    const [expandedRow, setExpandedRow] = useState(null);
    const InternshipFetch = async () => {
        const response = await axios.get("http://localhost:5001/users")
        setInternships(response.data)
    }

    const deleteItem = async (id) => {
        await axios.delete(`http://localhost:5001/users/${id}`)
        setInternships(internships.filter((item) => item.id !== id))
    }

    useEffect(() => {
        InternshipFetch()
    }, [])

    return (
        <div>
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className={sidebarOpen ? "dashboard-container sidebar-open" : "dashboard-container"}>
                <h2 className="signup-title">User</h2>
                <div className="chart-card internship-card">
                    <Table bordered responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {internships.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <Link to={`/edit-user/${item.id}`}>
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
