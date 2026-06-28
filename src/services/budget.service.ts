import api from './api'
import { Budget } from '../types'

export const BudgetService = {
  getAll: async (month: number, year: number): Promise<{ budgetList: Budget[] }> => {
    const response = await api.get('/api/budgets', { params: { month, year } })
    return response.data
  },

  create: async (data: {
    category_id: number
    amount: number
    month: number
    year: number
  }): Promise<{ budget: Budget }> => {
    const response = await api.post('/api/budgets', data)
    return response.data
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/api/budgets/${id}`)
  },
}