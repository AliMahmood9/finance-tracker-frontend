import {
    createFileRoute,
    redirect,
    Outlet,
    isRedirect,
  } from "@tanstack/react-router"
  import { AuthService } from "../services/auth.service"
  
  export const Route = createFileRoute("/_public")({
    beforeLoad: async () => {
      try {
        await AuthService.getMe()
        throw redirect({ to: "/dashboard" })
      } catch (error) {
        if (isRedirect(error)) throw error
      }
    },
    component: () => <Outlet />,
  })