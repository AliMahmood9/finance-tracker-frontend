import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { AuthService } from '../../services/auth.service'

const schema = yup.object({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
})

type RegisterFormData = yup.InferType<typeof schema>

export const RegisterForm = () => {
  const [serverError, setServerError] = useState('')
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: RegisterFormData) => {
    setServerError('')
    try {
      await AuthService.register(data.name, data.email, data.password)
      navigate({ to: '/dashboard' })
    } catch {
      setServerError('Something went wrong. Please try again.')
    }
  }

  const fields = [
    {
      name: 'name' as const,
      label: 'Full name',
      type: 'text',
      placeholder: 'Ali Mahmood',
    },
    {
      name: 'email' as const,
      label: 'Email address',
      type: 'email',
      placeholder: 'ali@gmail.com',
    },
    {
      name: 'password' as const,
      label: 'Password',
      type: 'password',
      placeholder: '••••••••',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl border border-gray-200 p-8 w-full max-w-md">

        {/* Header */}
        <div className="mb-6">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
            <span className="text-blue-600 text-lg font-bold">₨</span>
          </div>
          <h1 className="text-xl font-medium text-gray-900 mb-1">
            Create account
          </h1>
          <p className="text-sm text-gray-500">
            Start tracking your finances today
          </p>
        </div>

        {/* Server error */}
        {serverError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{serverError}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {fields.map(field => (
            <Input
              key={field.name}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              error={errors[field.name]?.message}
              {...register(field.name)}
            />
          ))}

          <Button
            type="submit"
            loading={isSubmitting}
            className="w-full mt-2"
          >
            Create account
          </Button>
        </form>

        {/* Login link */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}