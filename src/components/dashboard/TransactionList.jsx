function TransactionList({ transactions }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Transactions</h3>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div>
              <p className="font-semibold text-gray-700">
                {transaction.type === 'credit'
                  ? `Received from ${transaction.from}`
                  : `Sent to ${transaction.to}`}
              </p>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
            <p
              className={`font-semibold ${
                transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransactionList