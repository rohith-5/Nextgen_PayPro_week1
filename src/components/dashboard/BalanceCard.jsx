import { FaWallet } from 'react-icons/fa'

function BalanceCard({ balance }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Your Balance</h2>
          <p className="text-3xl font-bold text-primary mt-2">₹{balance.toFixed(2)}</p>
        </div>
        <FaWallet className="w-12 h-12 text-primary" />
      </div>
    </div>
  )
}

export default BalanceCard