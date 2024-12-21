import { FaBars, FaTimes } from 'react-icons/fa'

function MobileMenuButton({ isOpen, setIsOpen }) {
  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-primary"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <FaTimes className="h-6 w-6" />
        ) : (
          <FaBars className="h-6 w-6" />
        )}
      </button>
    </div>
  )
}

export default MobileMenuButton