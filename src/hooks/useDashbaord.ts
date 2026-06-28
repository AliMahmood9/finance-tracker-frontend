import { useQuery } from '@tanstack/react-query'
import { TransactionService } from '../services/transaction.service'
import { BudgetService } from '../services/budget.service'

export const useDashboard = (month: number, year: number) => {
  const summary = useQuery({
    queryKey: ['summary', month, year],
    queryFn: () => TransactionService.getSummary(month, year),
  })

  const transactions = useQuery({
    queryKey: ['transactions', month, year],
    queryFn: () => TransactionService.getAll({ month, year }),
  })

  const budgets = useQuery({
    queryKey: ['budgets', month, year],
    queryFn: () => BudgetService.getAll(month, year),
  })

  return {
    summary: summary.data?.summary,
    transactions: transactions.data?.transactions ?? [],
    budgets: budgets.data?.budgetList ?? [],
    isLoading: summary.isLoading || transactions.isLoading || budgets.isLoading,
    isError: summary.isError || transactions.isError || budgets.isError,
  }
}