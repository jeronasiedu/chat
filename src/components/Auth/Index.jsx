import Register from './Register'
import Login from './Login'
import { Routes, Route } from 'react-router-dom'
const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Index
