import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./routes/ProtectedRoute"
import PublicRoute from "./routes/PublicRoute"
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import CreateInternship from './pages/Internship/CreateInternship'
import InternshipList from './pages/Internship/InternshipList'
import EditInternship from './pages/Internship/EditInternship'
import EmployeeDirectory from './pages/Employees/EmployeeDirectory'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployee from './pages/Employees/AddEmployee'
import EditEmployee from './pages/Employees/EditEmployee'
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/create-internship"
            element={
              <PublicRoute>
                <CreateInternship />
              </PublicRoute>
            }
          />


          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/internships"
            element={
              <ProtectedRoute>
                <InternshipList />
              </ProtectedRoute>
            }
          />


          <Route
            path="/edit-internship/:id"
            element={
              <ProtectedRoute>
                <EditInternship />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employees"
            element={
              <ProtectedRoute>
                <EmployeeDirectory />
              </ProtectedRoute>
            }
          />

        <Route
            path="/add-employee"
            element={
              <ProtectedRoute>
                <AddEmployee />
              </ProtectedRoute>
            }
          />



          <Route
            path="/edit-employees/:id"
            element={
              <ProtectedRoute>
                <EditEmployee />
              </ProtectedRoute>
            }
          />







        </Routes>


      </BrowserRouter>
    </AuthProvider>
  )
}
