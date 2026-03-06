import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export default function Application() {
  const navigate = useNavigate();

  const [application, setApplicationData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5001/jobs")
      .then(response => {
        setApplicationData(response.data)
      })
      .catch(error => {
        console.log("Error fetching employees", error)
      })
  }, [])

  const selectJob = (job) => {
    navigate("/application-form", { state: job })
  }


  return (
    <>
      <div className="parent-container">
        <Container>
          <Row>
            {application.map((item) => (
              <Col lg={4}>
                <div className="job-card" key={item.id}>

                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div className='company-name'>
                      <p className='m-0 p-0'><b>Company:</b> {item.company}</p>
                    </div>
                    <div className='logo'>
                      <img src={item.logo} alt="logo" className="company-logo" />
                    </div>
                  </div>
                  <div className="card-header">
                    <div className='company-name'>
                      <h2 className='m-0 p-0'>{item.title}</h2>
                    </div>

                        
                  </div>
                  <div className="card-header d-flex align-items-center gap-3">
                    <div className='company-name'>
                      <p><b>Location:</b> {item.location}</p>
                    </div>
                    <div className='company-name'>
                      <p><b>Experience:</b> {item.experience}</p>
                    </div>
                  </div>
                  <div className="card-header d-flex align-items-center gap-3">
                    <div className='company-name'>
                      <p><b>Salary:</b> {item.salary}</p>
                    </div>
                    <div className='company-name'>
                      <p><b>Job Type:</b> {item.jobType}</p>
                    </div>
                  </div>
                  <div className="card-header">
                    <div className='company-name'>
                      <p><b>Skills:</b> {item.skills}</p>
                    </div>
                  </div>
                  <div className="card-header">
                    <div className='company-name'>
                      <p className="desc">{item.description}</p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button
                      className="apply-btn"
                      onClick={() => selectJob(item)}
                    >
                      Apply Now
                    </button>
                     <p className='m-0 p-0'>{item.postedDate}</p>
                  </div>

                </div>
              </Col>
            ))}

          </Row>
        </Container>
      </div>
    </>
  )
}
