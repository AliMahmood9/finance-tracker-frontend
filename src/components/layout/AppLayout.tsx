import { Outlet } from '@tanstack/react-router'
import { Sidebar } from './Sidebar'

export const AppLayout = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}