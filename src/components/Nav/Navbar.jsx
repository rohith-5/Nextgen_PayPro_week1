import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaWallet, FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <FaWallet className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold text-secondary">PayPro</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/dashboard" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">Dashboard</Link>
            <Link to="/send-money" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">Send Money</Link>
            <Link to="/profile" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">Profile</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/dashboard"
              className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/send-money"
              className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Send Money
            </Link>
            <Link
              to="/profile"
              className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar