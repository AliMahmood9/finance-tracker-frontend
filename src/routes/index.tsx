import { createFileRoute, redirect } from '@tanstack/react-router'
import { AuthService } from '../services/auth.service'

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    try {
      await AuthService.getMe()
      throw redirect({ to: '/dashboard' })
    } catch {
      throw redirect({ to: '/login' })
    }
  }
})