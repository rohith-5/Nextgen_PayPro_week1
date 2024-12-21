import { Link } from 'react-router-dom'
import { FaWallet } from 'react-icons/fa'

function Logo() {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center">
        <FaWallet className="h-8 w-8 text-primary" />
        <span className="ml-2 text-2xl font-bold text-secondary">PayPro</span>
      </Link>
    </div>
  )
}

export default Logo