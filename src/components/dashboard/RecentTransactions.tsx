import { Transaction } from '../../types'
import { Card } from '../ui/Card'
import { Link } from '@tanstack/react-router'

interface RecentTransactionsProps {
  transactions: Transaction[]
  isLoading: boolean
}

export const RecentTransactions = ({ transactions, isLoading }: RecentTransactionsProps) => {
  const recent = transactions.slice(0, 5)

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-gray-900">Recent Transactions</h2>
        <Link
          to="/transactions"
          className="text-xs text-blue-600 hover:underline"
        >
          View all
        </Link>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex items-center justify-between animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg"></div>
                <div>
                  <div className="h-3 bg-gray-100 rounded w-24 mb-1"></div>
                  <div className="h-2 bg-gray-100 rounded w-16"></div>
                </div>
              </div>
              <div className="h-3 bg-gray-100 rounded w-16"></div>
            </div>
          ))}
        </div>
      ) : recent.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-6">
          No transactions yet
        </p>
      ) : (
        <div className="space-y-3">
          {recent.map(transaction => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm
                  ${transaction.type === 'income' ? 'bg-green-50' : 'bg-red-50'}`}>
                  {transaction.category_icon ?? '💰'}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {transaction.title}
                  </p>
                  <p className="text-xs text-gray-400">
                    {transaction.date} · {transaction.category_name ?? 'Uncategorized'}
                  </p>
                </div>
              </div>
              <span className={`text-sm font-medium
                ${transaction.type === 'income' ? 'text-green-600' : 'text-red-500'}`}>
                {transaction.type === 'income' ? '+' : '-'}
                {Number(transaction.amount).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </Card>
  )
}