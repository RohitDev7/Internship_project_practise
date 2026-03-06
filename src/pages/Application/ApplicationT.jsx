import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Sidebar from "../component/Sidebar";
import { Link } from "react-router-dom";

export default function ApplicationT() {

  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [applications, setApplications] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:5001/applications")
      .then(res => setApplications(res.data))
      .catch(err => {
        console.log("Error fetching applications", err)
      })
  }, [])

  const deleteApplication = async (id) => {
    await axios.delete(`http://127.0.0.1:5001/applications/${id}`)
    setApplications(applications.filter((item) => item.id !== id))
  }

  return (
    <div>

      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className={sidebarOpen ? "dashboard-container sidebar-open" : "dashboard-container"}>

        <h2 className="signup-title mb-4">Applications</h2>

        <div className="chart-card internship-card">

          <Table striped bordered hover responsive>

            <thead>

              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Experience</th>
                <th>Current Company</th>
                <th>Current CTC</th>
                <th>Expected CTC</th>
                <th>Skills</th>
                <th>Education</th>
                <th>University</th>
                <th>Graduation Year</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
                <th>LinkedIn</th>
                <th>Portfolio</th>
                <th>Resume</th>
                <th>Cover Letter</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {applications.map((item) => (

                <tr key={item.id}>

                  <td>{item.id}</td>


                  <td>{item.fullName}</td>

                  <td>{item.email}</td>

                  <td>{item.phone}</td>

                  <td>{item.dob}</td>

                  <td>{item.gender}</td>

                  <td>{item.experience}</td>

                  <td>{item.currentCompany}</td>

                  <td>{item.currentCTC}</td>

                  <td>{item.expectedCTC}</td>

                  <td>{item.skills}</td>

                  <td>{item.education}</td>

                  <td>{item.university}</td>

                  <td>{item.graduationYear}</td>

                  <td>{item.address}</td>

                  <td>{item.city}</td>

                  <td>{item.state}</td>

                  <td>{item.country}</td>

                  <td>
                    <a href={item.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                  </td>

                  <td>
                    <a href={item.portfolio} target="_blank" rel="noreferrer">
                      Portfolio
                    </a>
                  </td>

                  <td>
                    <a href={item.resume} target="_blank" rel="noreferrer">
                      Resume
                    </a>
                  </td>

                  <td className='cover-letter'>
                    {item.coverLetter}
                  </td>

                  <td>
 <Link to={`/edit-application/${item.id}`}>
                      <button>Edit</button>
                    </Link>



                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteApplication(item.id)}
                    >
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