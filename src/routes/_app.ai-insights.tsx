import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/ai-insights')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/ai-insights"!</div>
}
