import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaWallet, FaExchangeAlt, FaHistory } from 'react-icons/fa'
import BalanceCard from '../components/dashboard/BalanceCard'
import QuickActions from '../components/dashboard/QuickActions'
import TransactionList from '../components/dashboard/TransactionList'

function Dashboard() {
  const [balance] = useState(5000)
  const [recentTransactions] = useState([
    { id: 1, type: 'credit', amount: 500, from: 'John Doe', date: '2024-03-10' },
    { id: 2, type: 'debit', amount: 200, to: 'Jane Smith', date: '2024-03-09' },
    { id: 3, type: 'credit', amount: 1000, from: 'Mike Johnson', date: '2024-03-08' },
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BalanceCard balance={balance} />
      <QuickActions />
      <TransactionList transactions={recentTransactions} />
    </div>
  )
}

export default Dashboard