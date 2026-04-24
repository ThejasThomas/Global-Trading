import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import HomePage from './pages/HomePage'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
    </BrowserRouter>
  )
}

export default App