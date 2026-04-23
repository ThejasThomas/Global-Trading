import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import AdminLogin from './pages/AdminLogin'


function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path="/login" element={<Login />} />
    <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
