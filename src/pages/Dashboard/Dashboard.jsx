import React, { useEffect, useState } from "react"
import axios from "axios"
import Chart from "react-apexcharts"
import Sidebar from "../component/Sidebar"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
    const [stats, setStats] = useState({
        users: 0,
        internships: 0,
        employees: 0,
        applications: 0
    })

    
    const [barData, setBarData] = useState([])
    const [pieData, setPieData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const users = await axios.get("http://localhost:5001/users")
            const internships = await axios.get("http://localhost:5001/internships")
            const employees = await axios.get("http://localhost:5001/employees")
            const applications = await axios.get("http://localhost:5001/applications")

            const counts = [
                users.data.length,
                internships.data.length,
                employees.data.length,
                applications.data.length
            ]

            setStats({
                users: counts[0],
                internships: counts[1],
                employees: counts[2],
                applications: counts[3]
            })

            setBarData(counts)
            setPieData(counts)

        }

        fetchData()

    }, [])

    const barOptions = {
        chart: { id: "dashboard-bar" },
        xaxis: {
            categories: ["Users", "Internships", "Employees", "Applications"]
        }
    }

    const pieOptions = {
        labels: ["Users", "Internships", "Employees", "Applications"]
    }

return (
    <>
     <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    <div className={sidebarOpen ? "dashboard-container sidebar-open" : "dashboard-container"}>
        <h2 className="dashboard-title">Admin Dashboard</h2>

        <div className="stats-row">

            <div className="stat-card">
                <h5>Total Users</h5>
                <h2>{stats.users}</h2>
            </div>

            <div className="stat-card">
                <h5>Internships</h5>
                <h2>{stats.internships}</h2>
            </div>

            <div className="stat-card">
                <h5>Employees</h5>
                <h2>{stats.employees}</h2>

                {/* <div className="d-flex justify-content-between">
                    <p className="p-0 m-0">Active  (2)</p>  <p className="p-0 m-0">Inactive  (2)</p> 
                </div> */}
            </div>

            <div className="stat-card">
                <h5>Applications</h5>
                <h2>{stats.applications}</h2>
            </div>

        </div>

        <div className="chart-row">

            <div className="chart-card">
                <h4>System Overview</h4>
                <Chart
                    options={barOptions}
                    series={[{ name: "Count", data: barData }]}
                    type="bar"
                    width="100%"
                    height={300}
                />
            </div>

            <div className="chart-card">
                <h4>All Data</h4>
                <Chart
                    options={pieOptions}
                    series={pieData}
                    type="pie"
                    width="100%"
                    height={300}
                />
            </div>

        </div>
    </div>
    </>
)
}