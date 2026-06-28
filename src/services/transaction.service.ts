import api from './api'
import { Transaction, Summary } from '../types'

export const TransactionService = {
  getAll: async (filters?: {
    month?: number
    year?: number
    type?: string
    category_id?: number
  }): Promise<{ transactions: Transaction[] }> => {
    const response = await api.get('/api/transactions', { params: filters })
    return response.data
  },

  getSummary: async (month: number, year: number): Promise<{ summary: Summary }> => {
    const response = await api.get('/api/transactions/summary', {
      params: { month, year }
    })
    return response.data
  },

  create: async (data: {
    title: string
    amount: number
    type: 'income' | 'expense'
    date: string
    notes?: string
    category_id?: number
  }): Promise<{ transaction: Transaction }> => {
    const response = await api.post('/api/transactions', data)
    return response.data
  },

  update: async (id: number, data: {
    title: string
    amount: number
    type: 'income' | 'expense'
    date: string
    notes?: string
    category_id?: number
  }): Promise<{ transaction: Transaction }> => {
    const response = await api.put(`/api/transactions/${id}`, data)
    return response.data
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/api/transactions/${id}`)
  },
}