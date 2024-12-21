import { Link } from 'react-router-dom'
import { navLinks } from './navLinks'

function MobileMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MobileMenu