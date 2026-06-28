import { Summary } from '../../types'
import { Card } from '../ui/Card'
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react'

interface SummaryCardsProps {
  summary: Summary | undefined
  isLoading: boolean
}

const formatAmount = (amount: number) =>
  new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    maximumFractionDigits: 0,
  }).format(amount)

export const SummaryCards = ({ summary, isLoading }: SummaryCardsProps) => {
  const cards = [
    {
      label: 'Total Income',
      value: summary?.income ?? 0,
      icon: TrendingUp,
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      label: 'Total Expenses',
      value: summary?.expense ?? 0,
      icon: TrendingDown,
      color: 'text-red-500',
      bg: 'bg-red-50',
    },
    {
      label: 'Balance',
      value: summary?.balance ?? 0,
      icon: Wallet,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
  ]

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map(i => (
          <Card key={i} className="animate-pulse">
            <div className="h-4 bg-gray-100 rounded w-24 mb-3"></div>
            <div className="h-7 bg-gray-100 rounded w-32"></div>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map(({ label, value, icon: Icon, color, bg }) => (
        <Card key={label}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-gray-500">{label}</p>
            <div className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center`}>
              <Icon size={16} className={color} />
            </div>
          </div>
          <p className={`text-xl font-medium ${color}`}>
            {formatAmount(value)}
          </p>
        </Card>
      ))}
    </div>
  )
}