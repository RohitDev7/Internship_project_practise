import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Sidebar from "../component/Sidebar"
import { Link } from 'react-router-dom';
export default function EmployeeDirectory() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [employess, setEmployess] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5001/employees")
      .then(res => setEmployess(res.data))
      .catch(err => {
        console.log("Error fetching employees", err)
      })
  }, [])

  const deleteItem = async (id) => {
    await axios.delete(`http://127.0.0.1:5001/employees/${id}`)
    setEmployess(employess.filter((item) => item.id !== id))
  }

  return (
    <div>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className={sidebarOpen ? "dashboard-container sidebar-open" : "dashboard-container"}>
        <div className='d-flex justify-content-between align-items-center mb-4'>
          <h2 className="signup-title mb-0">Employee Data</h2>
          <Link to="/add-employee" className='btn btn-primary'>Add Employee</Link>
        </div>
        <div className="chart-card internship-card">
          <Table striped bordered >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>Joining Date</th>
                <th>Location</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>


              {employess.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.department}</td>
                  <td>{item.designation}</td>
                  <td>{item.salary}</td>
                  <td>{item.joiningDate}</td>
                  <td>{item.location}</td>
                  <td
                    style={{
                      color: item.status === "Active" ? "green" : "red"
                    }}
                  >{item.status}</td>
                  <td>
                    <Link to={`/edit-employees/${item.id}`}>
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
