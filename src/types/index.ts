export interface User {
    id: number
    created_at: string
    name: string
    email: string
    google_id: string | null
  }
  
  export interface Category {
    id: number
    name: string
    type: 'income' | 'expense'
    icon: string
    is_default: boolean
    user_id: number | null
  }
  
  export interface Transaction {
    id: number
    title: string
    amount: string
    type: 'income' | 'expense'
    date: string
    notes: string | null
    user_id: number
    category_id: number | null
    created_at: string
    category_name: string | null
    category_icon: string | null
  }

  export interface Budget {
    id: number
    amount: string
    month: number
    year: number
    user_id: number
    category_id: number
    created_at: string
    category_name: string | null
    category_icon: string | null
    spent: string
  }

  export interface Summary {
    income: number,
    expense: number,
    balance: number
  }

  export interface AuthResponse {
    message: string,
    token: string,
    user: User
  }