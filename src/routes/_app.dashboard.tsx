import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useDashboard } from '../hooks/useDashbaord'
import { SummaryCards } from '../components/dashboard/SummaryCard'
import { RecentTransactions } from '../components/dashboard/RecentTransactions'
import { BudgetStatus } from '../components/dashboard/BudgetStatus'

export const Route = createFileRoute('/_app/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  const currentDate = new Date()
  const [month, setMonth] = useState(currentDate.getMonth() + 1)
  const [year, setYear] = useState(currentDate.getFullYear())

  const { summary, transactions, budgets, isLoading } = useDashboard(month, year)

  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ]

  return (
    <div className="p-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-lg font-medium text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500">
            {months[month - 1]} {year}
          </p>
        </div>
        <select
          value={`${month}-${year}`}
          onChange={(e) => {
            const [m, y] = e.target.value.split('-')
            setMonth(Number(m))
            setYear(Number(y))
          }}
          className="text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
        >
          {Array.from({ length: 12 }, (_, i) => {
            const d = new Date()
            d.setMonth(d.getMonth() - i)
            const m = d.getMonth() + 1
            const y = d.getFullYear()
            return (
              <option key={`${m}-${y}`} value={`${m}-${y}`}>
                {months[m - 1]} {y}
              </option>
            )
          })}
        </select>
      </div>

      {/* Summary Cards */}
      <div className="mb-6">
        <SummaryCards summary={summary} isLoading={isLoading} />
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <RecentTransactions
            transactions={transactions}
            isLoading={isLoading}
          />
        </div>
        <div>
          <BudgetStatus
            budgets={budgets}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  )
}