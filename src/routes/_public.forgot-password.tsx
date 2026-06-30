import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/forgot-password')({
  component: ForgotPasswordPage,
})

function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl border border-gray-200 p-8 w-full max-w-md">
        <div className="mb-6">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
            <span className="text-blue-600 text-lg font-bold">₨</span>
          </div>
          <h1 className="text-xl font-medium text-gray-900 mb-1">
            Forgot password?
          </h1>
          <p className="text-sm text-gray-500">
            Enter your email and we'll send you a reset link
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-500 block mb-1.5">
              Email address
            </label>
            <input
              type="email"
              placeholder="ali@gmail.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Send reset link
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          Remember your password?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}