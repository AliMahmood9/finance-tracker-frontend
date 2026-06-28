import { cn } from '../../lib/utils'
import { HTMLAttributes } from 'react'

export const Card = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('bg-white rounded-xl border border-gray-200 p-6', className)}
    {...props}
  >
    {children}
  </div>
)