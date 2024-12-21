import { Link } from 'react-router-dom'
import { FaExchangeAlt, FaHistory } from 'react-icons/fa'

function QuickActions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <Link
        to="/send-money"
        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
      >
        <div className="flex items-center">
          <FaExchangeAlt className="w-8 h-8 text-primary mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Send Money</h3>
            <p className="text-gray-500">Transfer money to anyone instantly</p>
          </div>
        </div>
      </Link>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <FaHistory className="w-8 h-8 text-primary mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Recent Activity</h3>
            <p className="text-gray-500">View your transaction history</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickActions