import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Nav/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
import Profile from './pages/Profile'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send-money" element={<SendMoney />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App