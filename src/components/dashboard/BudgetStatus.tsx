import { Budget } from '../../types'
import { Card } from '../ui/Card'

interface BudgetStatusProps {
  budgets: Budget[]
  isLoading: boolean
}

export const BudgetStatus = ({ budgets, isLoading }: BudgetStatusProps) => {
  return (
    <Card>
      <h2 className="text-sm font-medium text-gray-900 mb-4">Budget Status</h2>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="animate-pulse">
              <div className="h-3 bg-gray-100 rounded w-24 mb-2"></div>
              <div className="h-2 bg-gray-100 rounded w-full"></div>
            </div>
          ))}
        </div>
      ) : budgets.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-6">
          No budgets set
        </p>
      ) : (
        <div className="space-y-4">
          {budgets.map(budget => {
            const spent = Number(budget.spent)
            const amount = Number(budget.amount)
            const percentage = Math.min((spent / amount) * 100, 100)
            const isOver = spent > amount
            const isWarning = percentage >= 80 && !isOver

            return (
              <div key={budget.id}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-medium text-gray-700 flex items-center gap-1">
                    {budget.category_icon} {budget.category_name}
                  </span>
                  <span className={`text-xs font-medium
                    ${isOver ? 'text-red-500' : isWarning ? 'text-orange-500' : 'text-gray-500'}`}>
                    {spent.toLocaleString()} / {amount.toLocaleString()}
                  </span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full">
                  <div
                    className={`h-full rounded-full transition-all
                      ${isOver ? 'bg-red-500' : isWarning ? 'bg-orange-400' : 'bg-green-500'}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {isOver
                    ? `Over by ${(spent - amount).toLocaleString()} PKR 🔴`
                    : `${Math.round(percentage)}% used`
                  }
                </p>
              </div>
            )
          })}
        </div>
      )}
    </Card>
  )
}