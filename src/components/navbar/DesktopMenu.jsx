import { Link } from 'react-router-dom'
import { navLinks } from './navLinks'

function DesktopMenu() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      {navLinks.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className="text-gray-700 hover:text-primary px-3 py-2 rounded-md"
        >
          {label}
        </Link>
      ))}
    </div>
  )
}

export default DesktopMenu