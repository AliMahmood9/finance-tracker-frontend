import { cn } from '../../lib/utils'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  className,
  ...props
}, ref) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-medium text-gray-500">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={cn(
          'w-full border rounded-lg px-4 py-2.5 text-sm outline-none transition-colors',
          'placeholder:text-gray-400',
          error
            ? 'border-red-300 focus:border-red-500'
            : 'border-gray-200 focus:border-blue-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'