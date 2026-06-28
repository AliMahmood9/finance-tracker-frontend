import {
    createFileRoute,
    redirect,
    isRedirect,
  } from "@tanstack/react-router"
  import { AppLayout } from "../components/layout/AppLayout"
  import { AuthService } from "../services/auth.service"
  
  export const Route = createFileRoute("/_app")({
    beforeLoad: async () => {
      try {
        await AuthService.getMe()
      } catch (error) {
        if (isRedirect(error)) throw error
        throw redirect({ to: "/login" })
      }
    },
    component: AppLayout,
  })