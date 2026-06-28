import api from './api'
import { Category } from '../types'

export const CategoryService = {
  getAll: async (): Promise<{ categories: Category[] }> => {
    const response = await api.get('/api/categories')
    return response.data
  },

  create: async (data: {
    name: string
    type: 'income' | 'expense'
    icon: string
  }): Promise<{ category: Category }> => {
    const response = await api.post('/api/categories', data)
    return response.data
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/api/categories/${id}`)
  },
}